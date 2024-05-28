import React from "react";
import { useState } from "react";

function Searchbar({ setUrl }) {
  const [searchVal, setSearchVal] = useState("");

  function handleSearch() {
    setUrl(
      `https://newsapi.org/v2/everything?q=${searchVal}&sortBy=publishedAt&language=en&apiKey=aa267afd8cb14334b67cf2670eeab6a6`
    );
  }

  function handleInput(event) {
    setSearchVal(event.target.value);
  }

  function handleEnter(event) {
    if (event.key == "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="mt-3 mb-0 md:w-full">
      <div className="relative flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l bg-sky-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] placeholder:text-black focus:border-black focus:outline-none"
          placeholder="Search"
          aria-label="Search"
          value={searchVal}
          onChange={handleInput}
          onKeyUp={handleEnter}
          aria-describedby="button-addon1"
        />

        <button
          className="relative z-[2] flex items-center rounded-r bg-sky-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          type="button"
          id="button-addon1"
          onClick={() => {
            handleSearch();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-white"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
