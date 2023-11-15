import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import Receipt from "./Receipt"

function ShoppingCart({ cartItems, handleQuantityChange, handleDeleteItem, handleCheckout }) {
  
console.log(cartItems);

  return (



 { <div className="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full" >
 <table className="mx-auto">
  {/* heading */}
   <thead>
   <tr className="uppercase text-xs sm:text-sm text-black border-b border-palette-light">
    <th className="font-primary font-normal px-6 py-4">Item</th>
         <th className="font-primary font-normal px-6 py-4">Quantity</th>
         <th className="font-primary font-normal px-6 py-4 hidden sm:table-cell">Price</th>
         <th className="font-primary font-normal px-6 py-4">Remove</th>
     </tr>
   </thead>
   <tbody className="divide-y divide-palette-lighter">
    <tr>
       <td>
         {/* product */}
         <img
         src= ""
         alt= ""
         className=''
         />
         <>hi</>
       </td>
       {/* quantity */}
       <td>
         <>hi</>
       </td>
       {/* price */}
      <td>
        <>hi</>
       </td>

       {/* delete */}
       <td>
        <>hi</>
       </td>
     </tr>
   </tbody>
 </table>
 </div>
  }

  export default ShoppingCart;