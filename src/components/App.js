import '../App.css'
import LandingPage from '../pages/LandingPage'
import Navbar from './Navbar';
import ProductPage from "../pages/ProductPage"
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductsInfoPage from './ProductsInfo';
import ShoppingCart  from '../pages/ShoppingCart'
import Slideshow from '../components/Slideshow';
import BillingInfo from '../pages/BillingInfo';
import Receipt from '../pages/Receipt';
import Orders from '../pages/Orders';
import About from '../pages/About';
import Payment from './Payment';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup'
import 'flowbite/dist/flowbite.min.css';
import 'flowbite/dist/flowbite.min.js';
import axios from 'axios';
import React, { useState } from 'react';
// for the admin panel
import AdminTable from '../admin/AdminTable';
import AddProduct from '../admin/AddProduct';
import Success from '../pages/Success.js';

function App() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // navigate("/admin-table");
  
      try {
        const response = await axios.post('https://beaty-product-shop.onrender.com/login', {
          username,
          password,
        });
        console.log(response.data);
        const { name, email } = response.data;
        console.log(`Welcome, ${name}! Your email is ${email}.`);
        setIsLoggedIn(true)
        navigate("/admin-table");
      } catch (error) {
        console.log(error);
      }
    };

    const handleLogout = async () => {
        try {
            await axios.delete('https://beaty-product-shop.onrender.com/logout');
            setIsLoggedIn(false);
            navigate('/login');    
        } catch (error) {
            console.log(error);
        }
    };