import React from 'react'
import { Link } from 'react-router-dom'


function login({handleSubmit,username,password, setPassword, setUsername}) {


  return (
  <div className="flex items-center  justify-center min-h-screen bg-gray-100">
    <div className="relative flex w-[25rem]  flex-col m-6 space-y-8 bg-white shadow-xl rounded-3xl md:flex-row md:space-y-0 ">
      {/* <!-- left side --> */}
      <div className="flex flex-col justify-center p-8 md:p-14">
        {/* <!-- the container for the span --> */}
        <div className="mb-7 text-center">
          <span className="mb-3 text-xl text-center font-bold font-Poppins">Welcome Admin</span>
         
        </div>
        <span className="font-light text-end italic text-pink   ">
            <span className="font-light text-black">No Account ?</span>
            <Link className="ml-2 text-pink" to="/Signup">Sign up</Link>
          </span>

        <form onSubmit={handleSubmit}>
            <div className="py-4">
              <span className="mb-2 text-md font-Poppins ">Username</span>
              <input
                type="text"
                className="w-full p-2 border border-pink rounded-md placeholder:font-light placeholder:text-gray-500"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          
            <div className="py-4">
              <span className="mb-2 text-md font-Poppins">Enter your password</span>
              <input
                type="password"
                name="pass"
                id="pass"
                className="w-full rounded-md p-2 border border-pink  placeholder:font-light placeholder:text-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
              </div>
              <span className="font-light text-sm text-pink font-Poppins">Forgot password</span>
            </div>
            <button
              type="submit"
              className="w-full bg-red-300 py-2 text-white p-1 rounded-lg mb-3 font-semibold"
             >
              Login 
            </button>
          </form>
      </div>
    </div>
  </div>
  )
}

export default login
