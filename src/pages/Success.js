import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Success() {
    
    return (
        <div class="fixed top-0 left-0 w-screen h-screen backdrop-filter bg-gray-50 backdrop-blur-sm">
        {/* <!-- Modal toggle --> */}
       
            {/* <!-- Main modal --> */}
            <div id="successModal" tabindex="-1" aria-hidden="true" class=" flex justify-center m-5 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  items-center w-full md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div class="relative p-4 text-center bg-white rounded-lg shadow-2xl dark:bg-gray-800 sm:p-5">
                        <button type="button" class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-red-500 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="successModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        
                       <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 zp-2 flex items-center justify-center mx-auto mb-3.5">
                       <FontAwesomeIcon icon={faCheck} beatFade size="lg" style={{color: "#3e822b",}} />
                       </div>
                        <span className="tittle mb-4 text-lg font-bold text-green-500 dark:text-white">Order Validted</span>
                        <p className="mb-4 text-lg font-normal text-grey dark:text-white">Thank you for your purchase. Your package will be delivered within 2 days of your purchase</p>
                        <Link to="/products">
                        <button data-modal-toggle="successModal" type="button" class="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-green-500 shadow hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900">
                            View Order
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success
