import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const response = await axios.post('https://beaty-product-shop.onrender.com/users', {
        username,
        password,
        email,
      });
      setMessage('Successfully signed up!');
      setMessageType('success');
      console.log(response.data)
      navigate("/login")
    } catch (error) {
      console.log(error)
      setMessage('Failed to sign up. Please try again.');
      setMessageType('error');

    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="relative flex  w-[25rem] flex-col  m-6 space-y-8 bg-white shadow-md rounded-3xl md:flex-row md:space-y-0 ">
        {/* <!-- left side --> */}
        <div className="flex flex-col justify-center  p-8 md:p-14">
          {/* <!-- the container for the span --> */}
          <div className="mb-7 text-center">
            <span className="mb-3 text-4xl font-sm font-Poppins">Sign up</span>
          </div>
          <span className="font-light text-pink-400 text-end ">
              <span className="font-light text-black">already have account ?</span>
              <Link className="ml-2 text-pink" to="/Login">Sign in</Link>
          </span>
          
          {message && (
            <div
              className={`${
                messageType === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
              } p-4 rounded-lg mb-4`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="py-3">
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
            <div className="py-3">
              <span className="mb-2 text-md font-Poppins ">Email</span>
              <input
                type="text"
                className="w-full p-2 border border-pink rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="py-3">
              <span className="mb-2 text-md font-Poppins">Enter your password</span>
              <input
                type="password"
                name="pass"
                id="pass"
                className="w-full p-2 border border-pink rounded-md placeholder:font-light placeholder:text-gray-500"
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
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
