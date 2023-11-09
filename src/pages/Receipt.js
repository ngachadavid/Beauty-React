import React from 'react';
import { Link } from "react-router-dom";

function Receipt({ cartItems,  formData, handleConfirm  }) {
    console.log(cartItems)

    console.log(formData)

  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return (
    <div className="min-h-100 max-w-2xl p-5 my-4 sm:my-8 mx-auto w-full shadow-lg rounded-md bg-white">
      <h1 className="text-center text-2x text-pink-400 uppercase font-bold  italic mb-3"> {formData.name} Thank you for your order!</h1>
      <p className='text-gray'> "Thank you for placing your order! Before we can process your payment, we need to confirm the details of your purchase. Please review your order carefully and confirm that everything is correct. If you need to make any changes, please do so."</p>
   
     <div className='bg-pin-50 rounded-lg p-2 mb-5'>
        <h2 className='text-center text grey font-semibold mb-3 mt-2 '>BILLING DETAILS</h2>
        <div className=' justify-around flex mb-7'>
          <p> <span className='font-bold mr-1' > Name:</span>  {formData.name}</p>
          <p> <span className='font-bold mr-1'>  Address:</span> {formData.address}</p>
          <p> <span className='font-bold mr-1'> Number:</span>  {formData.phoneNumber}</p>
        </div>
      </div>

}

export default Receipt;
