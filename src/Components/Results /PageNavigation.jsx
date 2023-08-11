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
          className=" font-bold  p-2 border-2 border-black"
          onClick={() => handleClick()}
        >
          See More +
        </button>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PageNavigation;
