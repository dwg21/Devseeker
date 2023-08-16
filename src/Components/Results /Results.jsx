import React, { useEffect, useState } from "react";
import axios from "axios";

import PageNavigation from "./PageNavigation";
import JobDetail from "./JobDetail";

// Custom loader
import Loader from "../Loader";

import SearchBar from "../Searchbar/SearchBar";
import JobList from "./JobList";

// color palate https://huemint.com/brand-intersection/#palette=f4f9ff-001eb3-17478c-a1a6bf

const Results = () => {
  // Contains all the job data unfiltered
  const [jobResults, setJobResults] = useState(null);

  //Contains filtered job data
  const [filteredJobResults, setFilteredJobResults] = useState(null);

  //filter keyword
  const [filterKeyword, setFilterKeyword] = useState(null);

  const [linkedinData, setLinkedinData] = useState([]);
  const [indeedData, setIndeedData] = useState([]);

  const [errorState, setErrorState] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedPage, setSelectedPage] = useState(1);

  // Sets see more button to loader animation during fetching;
  const [loaderActive, setLoaderActive] = useState(false);

  //Filter results function
  const filterResults = (searchTerm, includeDescription) => {
    if (jobResults && jobResults.length > 1) {
      let filteredResults = jobResults.filter(
        (result) =>
          (result.title &&
            result.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (result.description &&
            result.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredJobResults(filteredResults);
      console.log("ff", filteredResults);
    }
  };

  // useEffect(() => {
  //   filterResults(filterKeyword);
  // }, [filterKeyword]);

  // Calls the scrapper - need to put scrapper on backend
  useEffect(() => {
    const fetchJobs = async () => {
      console.log(selectedPage);

      try {
        const jobs = await axios.get(
          `http://localhost:5000/api/v1/scraper?pageNum=${selectedPage}`
        );

        const indeedData = await axios.get(
          `http://localhost:5000/api/v1/scraper/indeed/?pageNum=${selectedPage}`
        );

        console.log(indeedData);

        // Function that reformats indeed data to correct format
        let reformatedIndeedData = indeedData.data.map((item) => {
          const {
            "job-title": title,
            "job-link": link,
            "post-date": date,
            "company-location": location,
            "job-snippet": description,
            "company-name": company,
          } = item;
          return { title, link, date, location, description, company };
        });

        //Back end supplies only new page data so add to previous results
        setLinkedinData([...linkedinData, ...jobs.data]);
        //setLinkedinData(jobs.data);

        console.log(linkedinData);
        setIndeedData(reformatedIndeedData);

        //console.log("jobresults array", jobResults);
      } catch (error) {
        console.error("Error fetching job data:", error);
        setErrorState("Error fetching job data. Please try again later.");
      }
    };
    fetchJobs();
  }, [selectedPage]);

  useEffect(() => {
    console.log("linkedinData", linkedinData);
    console.log("indeedData", indeedData);

    const combinedData = [...linkedinData, ...indeedData];
    console.log(combinedData);
    setJobResults(combinedData);
    setLoaderActive(false);

    //test search functionn
    //filterResults("developer");
    console.log("filteredJobResults", filteredJobResults);
  }, [indeedData, linkedinData]);

  // console.log("jobresults array", jobResults);
  //console.log("selctedjob company", testData[selectedJob]);

  return (
    <div className="px-10 py-4">
      <h1 className="text-center font-bold text-2xl italic m-2 select-none">
        JOB LISTINGS
      </h1>
      <div className="flex flex-col gap-3 justify-center items-center">
        <SearchBar
          filterKeyword={filterKeyword}
          setFilterKeyword={setFilterKeyword}
          filterResults={filterResults}
        />
        <p>{filterKeyword && filterKeyword}</p>
      </div>

      <div className="h-screen bg-[#f4f9ff]  ">
        {errorState ? (
          <div className="p-8">
            <h2 className="text-center text-xl">{errorState}</h2>
          </div>
        ) : jobResults && jobResults.length > 0 ? (
          <div className="flex gap-6 p-4  ">
            <div
              className={`flex-1  h-[80vh] md:block overflow-y-scroll bg-white ${
                selectedJob && `hidden`
              }`}
            >
              {!filterKeyword
                ? jobResults.map((item, index) => (
                    <JobList
                      item={item}
                      index={index}
                      selectedJob={selectedJob}
                      setSelectedJob={setSelectedJob}
                    />
                  ))
                : filteredJobResults &&
                  filteredJobResults.length > 0 &&
                  filteredJobResults.map((item, index) => (
                    <JobList
                      item={item}
                      index={index}
                      selectedJob={selectedJob}
                      setSelectedJob={setSelectedJob}
                    />
                  ))}
              <div className="m-2 flex items-center justify-center">
                <PageNavigation
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  loaderActive={loaderActive}
                  setLoaderActive={setLoaderActive}
                />
              </div>
            </div>

            {jobResults && jobResults[selectedJob] && (
              <div
                className={`flex-1 h-[80vh] overflow-y-scroll md:block bg-white p-4 rounded-md ${
                  !selectedJob && `hidden`
                } `}
              >
                <JobDetail
                  jobData={jobResults[selectedJob]}
                  selectedJob={selectedJob}
                  setSelectedJob={setSelectedJob}
                />
              </div>
            )}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Results;
