import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>


      <nav className="bg-white w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-lg fixed ">
        <div className="container flex flex-wrap items-center justify-around mx-auto">
          <a href="/" className="flex items-center">

            <span className="self-center text-4xl text-deepTaupe font-normal whitespace-nowrap dark:text-white">Ninestars</span>
          </a>
          <div className="flex md:order-2">
            <button type="button" className="text-white bg-halloweenOrange hover:bg-halloweenOrange focus:ring-4 focus:outline-none focus:ring-halloweenOrange font-normal rounded-3xl text-lg px-6 py-2.5 text-center mr-3 md:mr-0 dark:halloweenOrange dark:hover:bg-halloweenOrange dark:focus:ring-halloweenOrange">Get started</button>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-normal md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <NavLink className={"block py-2 pl-3 pr-4 text-halloweenOrange rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"} to="/">Home </NavLink>
              <NavLink className={"block py-2 pl-3 pr-4 text-deepTaupe rounded hover:text-halloweenOrange md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>About Us</NavLink>
              <NavLink className={"block py-2 pl-3 pr-4 text-deepTaupe rounded hover:text-halloweenOrange md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Services</NavLink>
              <NavLink className={"block py-2 pl-3 pr-4 text-deepTaupe rounded hover:text-halloweenOrange md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Portfolio</NavLink>
              <NavLink className={"block py-2 pl-3 pr-4 text-deepTaupe rounded hover:text-halloweenOrange md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Team</NavLink>
              <NavLink className={"block py-2 pl-3 pr-4 text-deepTaupe rounded hover:text-halloweenOrange md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Contact</NavLink>
            </ul>
          </div>
        </div>
      </nav>




    </div>
  )
}

export default Navbar