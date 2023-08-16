import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const JobDetail = ({ jobData, setSelectedJob }) => {
  console.log("hello", jobData);
  return (
    <div>
      {jobData ? (
        <div className="flex flex-col gap-2 mb-2  ">
          <div
            className=" flex justify-between items-center"
            onClick={() => setSelectedJob(null)}
          >
            <h3 className=" text-lg font-medium text-[#17478c]  ">
              {jobData.title}
            </h3>
            <div className="flex cursor-pointer md:hidden">
              <p className=" font-bold">Return to Listings</p>
              <AiOutlineClose className=" cursor-pointer  font-bold text-2xl" />
            </div>
          </div>

          <a href={jobData.link} target="_blank">
            <button
              type="button"
              className="text-white font-bold bg-gradient-to-r from-[#001eb3] to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 max-w-[250px]"
            >
              Go to advert
            </button>
          </a>

          <h3>
            <span className=" font-semibold">Company:</span>
            {jobData.company}
          </h3>
          <h3>
            <span className=" font-semibold">Date Posted:</span>
            {jobData.date}
          </h3>
          <h3>
            <span className=" font-semibold">Job Type:</span>
            {jobData.type}
          </h3>
          <h3 className="mb-1 font-medium">Description:</h3>
          <p>{jobData.description}</p>
        </div>
      ) : (
        <p>No Job Data Available</p>
      )}
    </div>
  );
};

export default JobDetail;
