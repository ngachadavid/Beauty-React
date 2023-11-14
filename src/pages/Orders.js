import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ShoppingCart from './ShoppingCart';
import BillingInfo from './BillingInfo';
import Receipt from './Receipt';

const Orders = () => {

  const [cartItems, setCartItems] = useState([]);
  const [stage, setStage] = useState("cart"); 
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: ''
  });

  const navigate = useNavigate();


    
useEffect(() => {
    if (cartItems.length === 0) {
      axios.get('https://api.jsonbin.io/v3/b/645017f19d312622a3559b2a')
        .then(response => {
          console.log(response.data.record.cart)
          setCartItems(response.data.record.cart)
        })
        .catch(error => console.log(error))
    }
  }, []);
  
  console.log(cartItems)

  // remove item from cart
  const handleDeleteItem = (item) => {
    axios.delete(`http://localhost:4000/cart/${item.id}`)
      .then(response => {
        setCartItems(prevState => prevState.filter(cartItem => cartItem.id !== item.id));
      })
      .catch(error => {
        console.log(error);
      });
  }


  
  // edit quantity in cart
  const handleQuantityChange = (value, item) => {
    axios.patch(`http://localhost:4000/${item.id}`, { quantity: value })
      .then(response => {
        setCartItems(prevState => {
          const index = prevState.findIndex(cartItem => cartItem.id === item.id);
          prevState[index].quantity = parseInt(value);
          return [...prevState];
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  
  
  const handleCheckout = () => {
    // Clear the cart and set the stage to "billing"
    // setCartItems([]);
    setStage("billing");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Submit the form data to the server and navigate to the receipt
    const response = await axios.post('https://beaty-product-shop.onrender.com/customers', formData);
    const { name, address } = response.data;
    // setFormData({ name: '', address: '', phoneNumber: '' });
    setStage("receipt");
  };



  const handleConfirm = () => {
    setCartItems(prevState => {
      return [];
    });
    navigate("/success");
    console.log(cartItems)
  };
  

console.log(formData, cartItems)

  return (
    <div className='bg-gray-100 pt-5 pb-20'>
      {stage === "cart" && (
        <ShoppingCart 
          cartItems={cartItems} 
          handleDeleteItem={handleDeleteItem}
          handleQuantityChange={handleQuantityChange}
          handleCheckout={handleCheckout}
        />
      )}
      {stage === "billing" && (
        <BillingInfo
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
          formData={formData}
        />
      )}
      {stage === "receipt" && (
        <Receipt 
          cartItems={cartItems}
          formData={formData}
          handleConfirm ={handleConfirm }
        />
      )}
    </div>
  );
}

export default Orders;
