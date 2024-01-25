import React, { useState } from "react";

const Searchtable = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);

  const navItems = [
    "Vetting Negotiation",
    "Vetted Negotiation(6968)",
    "Post Approval Queue(6)",
    "Closed(41860)",
    "Notifications(4)",
    "Analytics"
  ];

  const scrollIntems = [
    "Revisite (2025)",
    "Vetting (135)",
    "Review Prcing (1441)",
    "Waiting on Response (131)",
    "Bid Request (10)",
    "Rejected (1147)",
    "Vendor Contract (15)"
  ];

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  return (
    <>
      <div className="md:relative top-[6rem] left-[13rem] mt-3  sm:rounded-lg border-2 p-2 m-3 ">
        <nav className="bg-white overflow-x-auto md:h-[55%] h-[40%] w-full flex items-center hover:text-black space-x-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`text-[#B2B2B2] ${
                activeNavItem === index ? "underline-offset-4" : ""
              } hover:text-black whitespace-nowrap flex-shrink-0`}
              onMouseEnter={() => setActiveNavItem(index)}
              onMouseLeave={() => setActiveNavItem(null)}
              onClick={() => handleNavItemClick(index)}
            >
              {item}
            </a>
          ))}

          <button className="flex whitespace-nowrap items-center gap-2 bg-[#00A89E] p-3 rounded-xl text-white">
            Fliter
            <span>
              <svg
                className="w-[24px] h-[24px] text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.8"
                  d="m2.133 2.6 5.856 6.9L8 14l4 3 .011-7.5 5.856-6.9a1 1 0 0 0-.804-1.6H2.937a1 1 0 0 0-.804 1.6Z"
                />
              </svg>
            </span>
          </button>
        </nav>

        <div className="flex items-center justify-between overflow-x-auto  flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
          <div>
            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              className="inline-flex items-center  whitespace-nowrap text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <span className="sr-only whitespace-nowrap">Action button</span>
              Action
              <svg
                className="w-2.5 h-2.5 ms-2.5"
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
          </div>
          <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <label className="relative inline-flex items-center w-full cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Enable notifications
              </span>
            </label>
          </div>
          <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <label className="relative inline-flex items-center w-full cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Enable notifications
              </span>
            </label>
          </div>
          <div>
            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <span className="sr-only">Action button</span>
              Filters
              <svg
                className="w-2.5 h-2.5 ms-2.5"
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
          </div>
          <div className="p-3">
            <svg
              className="w-[26px] h-[26px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17 9a1 1 0 0 0-1 1 6.994 6.994 0 0 1-11.89 5H7a1 1 0 0 0 0-2H2.236a1 1 0 0 0-.585.07c-.019.007-.037.011-.055.018-.018.007-.028.006-.04.014-.028.015-.044.042-.069.06A.984.984 0 0 0 1 14v5a1 1 0 1 0 2 0v-2.32A8.977 8.977 0 0 0 18 10a1 1 0 0 0-1-1ZM2 10a6.994 6.994 0 0 1 11.89-5H11a1 1 0 0 0 0 2h4.768a.992.992 0 0 0 .581-.07c.019-.007.037-.011.055-.018.018-.007.027-.006.04-.014.028-.015.044-.042.07-.06A.985.985 0 0 0 17 6V1a1 1 0 1 0-2 0v2.32A8.977 8.977 0 0 0 0 10a1 1 0 1 0 2 0Z" />
            </svg>
          </div>
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 mx-auto text-center bg-[#00A89E] rounded-lg w-10 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white mx-auto text-center dark:text-gray-400"
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
              type="text"
              id="table-search-users"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-72 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
          <div>
            <button className="flex items-center gap-2 p-3">
              Download
              <div>
                <svg
                  class="w-[26px] h-[26px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 19"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.8"
                    d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 items-center overflow-x-auto justify-between  ">
          {/* Add your buttons here */}
          {scrollIntems.map((item,index)=>(
            <button
            key={index}
            className="buttonStyle whitespace-nowrap text-black bg-gray-200 rounded-lg"
            onClick={() => {}}
          >
            {item}
          </button>
          ))}


        </div>
      </div>
    </>
  );
};

export default Searchtable;
