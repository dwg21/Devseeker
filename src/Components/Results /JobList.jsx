import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiIndeed } from "react-icons/si";

const JobList = ({ item, index, selectedJob, setSelectedJob }) => {
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
};

export default JobList;
