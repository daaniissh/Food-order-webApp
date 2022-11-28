import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header({ srch, setsrch, lightmode, darkmode, mode, options }) {
  const toggleBar = () => {
    let collapse = document.querySelector("#navbar-collapse");
    collapse.classList.toggle("hidden");
    collapse.classList.toggle("flex");
  };

  return (
    <div className="header-2">
      <nav className="bg-black/50 dark:bg-gray-800/70 py-2 md:py-4 fixed w-full z-[999]">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <a href="3" className="font-bold text-xl text-red-600/90">
              MELON
            </a>
            <button
              className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              onClick={toggleBar}
              id="navbar-toggle"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <span className="p-2 lg:px-4 mb-4 md:mx-2 text-black rounded bg-indigo-600">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-white dark:text-black"
              >
                Filter a Dish
              </label>
              <select
                className="rounded-lg dark:text-white font-semibold outline-none dark:bg-gray-700 sm:w-[50px] w-full"
                onChange={(e) => setsrch(e.target.value)}
                defaultValue={srch}
              >
                {options.map((option, idx) => (
                  <option
                    className="  text-yellow-600 font-bold mb-5"
                    key={idx}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </span>
            <a href="3" className="header-a">
              Home
            </a>
            <a href="4" className="header-a">
              About
            </a>
            <a href="5" className="header-a">
              Features
            </a>
            <a href="7" className="header-a">
              Pricing
            </a>
            <a href="7" className="header-a">
              Contact
            </a>
            <FontAwesomeIcon
              onClick={darkmode}
              className={
                mode
                  ? "hidden absolute top-9 md:top-6 text-2xl right-4z-[9999] text-yellow-500 cursor-pointer"
                  : "absolute bottom-[10px] md:top-6 md:bottom-0 text-2xl right-4  z-[9999] text-yellow-500 cursor-pointer"
              }
              icon={faSun}
            />
            <FontAwesomeIcon
              onClick={lightmode}
              className={
                mode
                  ? " absolute bottom-[10px] md:top-6 md:bottom-0 text-2xl right-4 z-[9999] text-yellow-500 cursor-pointer"
                  : "hidden absolute  text-2xl right-4 z-[9999] text-yellow-500 cursor-pointer"
              }
              icon={faMoon}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
