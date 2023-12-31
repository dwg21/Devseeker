import React from "react";
import { useState } from "react";
import Dropdown from "./Dropdown";

const SearchBar = ({ filterResults, setFilterKeyword }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    setFilterKeyword(searchTerm);
    filterResults(searchTerm);
  };

  return (
    <>
      <form className="">
        <div className="flex flex-col md:flex-row space-y-4 justify-center items-center gap-4">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative min-w-[300px]">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              value={searchTerm}
              onChange={handleInputChange}
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="Filter Results further "
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-[#001eb3] to-black hover:bg-blue-800   font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
          <Dropdown
            options={["Any Time", "Today", "Past Week", "Past Month"]}
            title={"Date Posted"}
          />
          <Dropdown
            options={["Uk", "London", "Manchester", "Bristol"]}
            title={"Location"}
          />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
