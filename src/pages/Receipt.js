import React from 'react';
import { Link } from "react-router-dom";

function Receipt({ cartItems,  formData, handleConfirm  }) {
    console.log(cartItems)

    console.log(formData)

  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);



