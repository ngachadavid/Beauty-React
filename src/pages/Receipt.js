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
      <table className="mx-auto bg-gray-50 rounded-lg p-6">
        <thead>
          <tr className="uppercase text-xs sm:text-sm text-black  p-3 border-b border-palette-light">
            <th className="font-primary font-bold px-12 py-5">Item</th>
            <th className="font-primary font-bold px-12 py-5">Quantity</th>
            <th className="font-primary font-bold px-12 py-5">Price</th>
            <th className="font-primary font-bold px-12 py-5">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index} className="text-grey border-b border-palette-light">
              <td className="font-primary font-normal px-12 py-5">{item.name}</td>
              <td className="font-primary font-normal px-12 py-5">{item.quantity}</td>
              <td className="font-primary font-normal px-12 py-5">{item.price}</td>
              <td className="font-primary font-normal px-12 py-5">{item.quantity * item.price}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="p-5 text-bold text-xl uppercase font-serif">Total:</td>
            <td className="font-primary font-semibold px-12 py-5 text-pink">{totalPrice}</td>
          </tr>
        </tbody>
      </table>
     

        <button
            className="mx-auto block mt-8 px-12 py-3 rounded-2xl text-white font-bold bg-pink-400 hover:bg-pink-800"
            // onClick={() => setShowReceipt(false)}
            onClick={handleConfirm}
        >
            Confirm 
      </button>
      
    </div>
  );
}

export default Receipt;
