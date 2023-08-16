import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ options, title }) => {
  const [show, setShow] = useState(true);
  const [optionSelected, setOptionSelected] = useState("Any Time");
  const container = useRef(null);

  // CLoses Dropdown if screen clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!container.current.contains(event.target)) {
        if (!show) return;
        setShow(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [show, container]);

  // CLoses dropdown if esc key pressed
  useEffect(() => {
    const handleEscape = (event) => {
      if (!show) return;

      if (event.key === "Escape") {
        setShow(false);
      }
    };

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [show]);

  const handleClick = (option) => {
    setOptionSelected(option);
    setShow(false);
  };

  return (
    <div ref={container}>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-gradient-to-r from-[#001eb3] to-black hover:bg-blue-800   font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
        onClick={() => setShow(!show)}
      >
        {title}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {show && (
        <div
          id="dropdown"
          className="z-10 absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {options.map((option, index) => (
              <li>
                <a
                  id={index}
                  href="#"
                  className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                    optionSelected === option && `bg-gray-600 text-white`
                  }`}
                  onClick={() => handleClick(option)}
                >
                  {option}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
