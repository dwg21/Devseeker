import React from "react";
import { useState } from "react";

const PageNavigation = ({ selectedPage, setSelectedPage }) => {
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5]);

  // Function to increase pageNumbers by 5
  const changePageNumbers = (direction) => {
    setSelectedPage(pageNumbers[4] + 1);
    let updatedPageNumbers = pageNumbers;
    for (let i = 0; i < pageNumbers.length; i++) {
      if (direction === "next") {
        updatedPageNumbers[i] += 5;
      } else if (updatedPageNumbers[4] >= 6) {
        updatedPageNumbers[i] -= 5;
      }
    }
    console.log(updatedPageNumbers);
    setPageNumbers(updatedPageNumbers);
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="list-style-none flex font-bold text-lg">
        <li>
          <a
            className="relative block rounded bg-transparent px-3 py-1.5  text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            href="#"
            onClick={() => changePageNumbers("previous")}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((page, index) => (
          <li>
            <a
              className={`relative block rounded bg-transparent px-3 py-1.5  text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
                selectedPage === page && `bg-neutral-400 `
              }`}
              href="#"
              onClick={() => setSelectedPage(page)}
            >
              {page}
            </a>
          </li>
        ))}

        <li>
          <a
            className="relative block rounded bg-transparent px-3 py-1.5  text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            href="#"
            onClick={() => changePageNumbers("next")}
          >
            >
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
