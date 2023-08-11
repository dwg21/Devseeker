import React, { useEffect, useState } from "react";
import axios from "axios";

import { BsLinkedin } from "react-icons/bs";
import { SiIndeed } from "react-icons/si";
import PageNavigation from "./PageNavigation";
import JobDetail from "./JobDetail";

// Custom loader
import Loader from "../Loader";

import SearchBar from "./SearchBar";

// color palate https://huemint.com/brand-intersection/#palette=f4f9ff-001eb3-17478c-a1a6bf

//  jobsreuslts = {
//   pagenum :  []
// }

const Results = () => {
  // Contains all the job data
  const [jobResults, setJobResults] = useState(null);

  const [linkedinData, setLinkedinData] = useState([]);
  const [indeedData, setIndeedData] = useState([]);

  const [errorState, setErrorState] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedPage, setSelectedPage] = useState(1);

  // Sets see more button to loader animation during fetching;
  const [loaderActive, setLoaderActive] = useState(false);

  // Calls the scrapper - need to put scrapper on backend
  useEffect(() => {
    const fetchJobs = async () => {
      console.log(selectedPage);
      // if (jobResults && jobResults.length > 0) {
      //   console.log("aca");
      //   return;
      // }
      try {
        const jobs = await axios.get(
          `http://localhost:5000/api/v1/scraper?pageNum=${selectedPage}`
        );

        const indeedData = await axios.get(
          `http://localhost:5000/api/v1/scraper/indeed/?pageNum=${selectedPage}`
        );

        // Function that reformats indeed data to correct format
        let reformatedIndeedData = indeedData.data.map((item) => {
          const {
            "job-title": title,
            "job-link": link,
            "post-date": date,
            "company-location": location,
          } = item;
          return { title, link, date, location };
        });

        //Back end supplies only new page data so add to previous results
        setLinkedinData([...linkedinData, ...jobs.data]);
        //setLinkedinData(jobs.data);

        console.log(linkedinData);
        setIndeedData(reformatedIndeedData);

        //LinkedinData
        //console.log(jobs);

        // Concatenate the job data from both sources
        // const combinedData = [...linkedinData, ...reformatedIndeedData];

        // console.log(combinedData);
        // setJobResults(combinedData);

        console.log("jobresults array", jobResults);
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
  }, [indeedData, linkedinData]);

  // console.log("jobresults array", jobResults);
  //console.log("selctedjob company", testData[selectedJob]);
  let jobList;

  if (jobResults && jobResults.length > 0) {
    jobList = jobResults.map((item, index) => {
      return (
        <div
          className={` ${
            selectedJob === index ? `bg-[#a1a6bf]` : `bg-white`
          } hover:bg-[#a1a6bf] cursor-pointer flex justify-center items-center`}
        >
          <div
            className="border-b-2 p-3 w-[90%] border-black   "
            onClick={() => setSelectedJob(index)}
          >
            <div>
              <p>{index}</p>
              <div className="flex justify-left gap-4 items-center mb-2  ">
                {item.link && item.link.includes("linkedin") ? (
                  <BsLinkedin className="text-xl text-[#17478c]" />
                ) : (
                  <SiIndeed className="text-xl text-[#17478c]" />
                )}

                <h3 className="font-medium">{item.title}</h3>
              </div>

              <div className="flex gap-4 font-light">
                <p> {item.company}</p>
                <p>{item.location}</p>
              </div>

              <p>{item.date}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <h1 className="text-center font-bold text-2xl italic m-2">
        JOB LISTINGS
      </h1>
      <div className="flex justify-center items-center">
        <SearchBar />
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
              {jobList}
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
    </>
  );
};

export default Results;
