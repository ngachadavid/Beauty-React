import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BillingInfo({ handleChange, handleSubmit, formData }) {

 return (
  <div className="min-h-80 bg-white max-w-md p-10 my-4 sm:my-8 mx-auto w-full shadow-md rounded-md ">
      <h1 className="text-center text-xl uppercase font-bold underline italic mb-2">Billing Information</h1>
      <form onSubmit={handleSubmit}>
        <div className=" grid-cols-1 md:grid-  gap-4">
          <div>
            <label htmlFor="name" className=" text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-gray-300 mb-3 rounded-md shadow-sm focus:border-palette-light focus:ring focus:ring-palette-light focus:ring-opacity-50 w-full"
            />
          </div>
          <div>
            <label htmlFor="address" className=" text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              autoComplete="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border-gray-300 mb-3 rounded-md shadow-sm focus:border-palette-light focus:ring focus:ring-palette-light focus:ring-opacity-50 w-full"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              autoComplete="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="border-gray-300 rounded-md shadow-sm focus:border-palette-light focus:ring focus:ring-palette-light focus:ring-opacity-50 w-full"
            />
          </div>
        </div>
        <div className="mt-7">
          <button
            type="submit"
            className="w-full py-2 px-3 border border-transparent rounded-md shadow-sm text-black bg-pink-400 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-palette-light focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BillingInfo;
