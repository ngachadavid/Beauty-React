import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import Receipt from "./Receipt"

function ShoppingCart({ cartItems, handleQuantityChange, handleDeleteItem, handleCheckout }) {
  
console.log(cartItems);

  return (
    <div>
      <div className="text-center text-xl mt-5 ">
      <Link to="/products"><button className="border border-black text-black font-semibold rounded-2xl py-2 px-4">back to all products</button>   </Link> 
      </div>
    <div className="min-h-80 max-w-4xl p-5 my-4 sm:my-8 mx-auto w-full shadow-md rounded-md bg-white" >
      <h1 className='text-center text-3xl uppercase font-bold   mb-3'>your cart</h1>
        <table className="mx-auto">
          <thead>
            <tr className="uppercase text-xs sm:text-sm text-black border-b border-palette-light">
                <th className="font-primary font-sembold px-6 py-4">Item</th>
                <th className="font-primary font-semibold px-6 py-4">image</th>
                <th className="font-primary font-semibold px-6 py-4">Quantity</th>
                 <th className="font-primary font-semibold px-6 py-4">Delete</th>
                <th className="font-primary font-semibold px-6 py-4 hidden sm:table-cell">Price</th>
                <th className="font-primary font-semibold px-6 py-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? 
                cartItems.map((item, index) => (
                    <tr key={index} className="text-black border-b grey">
                         {/* name */}
                        <td className="font-primary font-normal px-6 py-4">{item.name}</td>
                         <td className='px-6 py-4' ><img className='h-14 w-14 rounded-md' src={item.image_url} alt="product" /></td>
                         {/* quantity */}
                        <td className="font-primary font-normal px-6 py-4">
                          <input type="number" min="1" value={item.quantity} onChange={(e) => handleQuantityChange(e.target.value, item)} />
                        </td>
                        {/* subtotal */}
                        <td className="font-primary font-normal px-6 py-4 hidden sm:table-cell">{item.price}</td>
                        <td className="font-primary font-normal px-6 py-4">{item.quantity * item.price}</td>
                        {/* delete */}
                        <td className="font-primary font-normal px-6 py-4"><button onClick={() => handleDeleteItem(item)}><FontAwesomeIcon icon={faXmark} /></button></td>

                    </tr>
                )) :
                <tr>
                    <td colSpan="5" className="text-center py-4 text-red-600 text-m font-semibold">cart is empty :( </td>
                </tr>
            }
            {cartItems.length > 0 &&
              <tr>
                <td colSpan="3"></td>
                <td className='text-bold text-xl uppercase font-serif'>total:</td>
                <td className="font-primary  px-6 py-4 font-semibold"> {cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}</td>
                <td></td>
              </tr>
            }
          </tbody>
        </table>

       { cartItems.length  > 0 && 
        <div className="flex justify-end mt-4">
          <button  onClick={handleCheckout}
          className="px-4 py-2 font-primary font-bold uppercase text-white bg-pink-400 rounded-md hover:bg-palette-light transition-colors duration-300">Checkout</button>
        </div>
       }
    </div>

      
  </div>
  )
  
}

export default ShoppingCart;


