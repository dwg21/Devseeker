import React from "react";
import { useState } from "react";
import Loader from "../Loader";

const PageNavigation = ({
  selectedPage,
  setSelectedPage,
  loaderActive,
  setLoaderActive,
}) => {
  const handleClick = () => {
    setSelectedPage(selectedPage + 1);
    setLoaderActive(true);
  };

  return (
    <>
      {!loaderActive ? (
        <button
          className="text-white font-extrabold  bg-gradient-to-r from-[#001eb3] to-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 max-w-[250px]"
          onClick={() => handleClick()}
        >
          See More
        </button>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PageNavigation;
