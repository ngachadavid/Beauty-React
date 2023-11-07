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
        
