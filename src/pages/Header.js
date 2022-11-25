import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Header({srch,setsrch,lightmode,darkmode,mode,options}) {
 
 
  
const toggleBar = () => {
   let collapse = document.querySelector("#navbar-collapse");
    collapse.classList.toggle("hidden");
    collapse.classList.toggle("flex");
  };
  
  return (
<div className="header-2">
  <nav className="bg-black/50 dark:bg-white/100 py-2 md:py-4 fixed w-full z-[999]">
    <div className="container px-4 mx-auto md:flex md:items-center">
      <div className="flex justify-between items-center">
        <a href="" className="font-bold text-xl text-red-600/100">
          MELON
        </a>
        <button
          className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
          onClick={toggleBar}
          id="navbar-toggle"
        >
          <FontAwesomeIcon icon={faBars}/>
        </button>
      </div>
      <div
        className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
        id="navbar-collapse"
      >
        <span
          
          className="p-2 lg:px-4 mb-4 md:mx-2 text-black rounded bg-indigo-600"
        >
           <label for="first_name" class="block mb-2 text-sm font-medium text-white dark:text-black">Filter a Dish</label>
        <select className="rounded-lg dark:text-white font-semibold outline-none dark:bg-gray-700 sm:w-[30px] w-full"
        onChange={(e) => setsrch(e.target.value)}
        defaultValue={srch}
      >
        {options.map((option, idx) => (
          <option className="  text-yellow-600 font-bold mb-5" key={idx}>{option}</option>
        ))}
      </select>
        </span>
        <button
            
          className="p-2 lg:px-4 md:mx-2  active:bg-yellow-700 text-white rounded   "
        >
          Home
        </button>
        <a
          href="#"
          className="p-2 lg:px-4 md:mx-2 gap-10 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
        >
          Features
        </a>
        <a
          href="#"
          className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
        >
          Pricing
        </a>
        <a
          href="#"
          className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
        >
          Contact
        </a>
        <FontAwesomeIcon
        onClick={darkmode}
        className={
          mode
            ? "hidden absolute  top-6 text-2xl right-4z-[9999] text-yellow-500 cursor-pointer"
            : "absolute top-6 text-2xl right-4  z-[9999] text-yellow-500 cursor-pointer"
        }
        icon={faSun}
      />
      <FontAwesomeIcon
        onClick={lightmode}
        className={
          mode
            ? " absolute top-6 text-2xl right-4 z-[9999] text-yellow-500 cursor-pointer"
            : "hidden absolute top-6 text-2xl right-4 z-[9999] text-yellow-500 cursor-pointer"
        }
        icon={faMoon}
      />
      </div>
    </div>
  </nav>
</div>

  )
}

export default Header