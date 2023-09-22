import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCircle } from '@fortawesome/free-solid-svg-icons';
import profiledummy from "../images/user.jpg"

function Navbar({isLoggedIn, username, handleLogout}) {



  return (
      <nav className="bg- border-gray-200 dark:bg-gray-900 shadow-sm pt-3  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to='/'  className=" text-black font-bold text-3xl font-['Poppins'] ">
                Beauty Bliss
              </Link> 
        <div className="flex items-right gap-4 md:order-2">
            <Link  to="/order"className="block py-2 text-2xl pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" passHref >
              <FontAwesomeIcon className="text-palette-primary w-6 m-auto" icon={faShoppingCart} />
            </Link>
            <button type="button" className="flex mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-green-50 dark:focus:ring-green-50" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              {/* <FontAwesomeIcon icon={faCircle} className='text-xl rounded-full w-8 h-8'/> */}
              <img className="w-8 h-8 rounded-full" src={profiledummy} alt="user photo"/>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">{username}</span>
                
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                {isLoggedIn ? (
                  <>
                    <li>
                      <Link to="admin-table" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Signup</Link>
                    </li>
                    <li>
                      <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Login</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        {/* end of dropdown */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
             <Link to="/" class="block py-2 pl-3 pr-4 text-grey-900 bg-pink rounded md:bg-transparent md:text-pink md:p-0 md:dark:text-pink" aria-current="page">Home</Link>
            </li>
            <li>
              <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink md:p-0 dark:text-white md:dark:hover:text-pink dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/products"> Products </Link>
            </li>
            <li>
              <a href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink md:p-0 dark:text-white md:dark:hover:text-pink dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
          
            <li>
          

            </li>
          </ul>
        </div>
        </div>
      </nav>

    )
}

export default Navbar


