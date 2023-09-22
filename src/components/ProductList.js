import React from 'react';

import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

const ProductList = ({ category, products, setProducts }) => {

    useEffect(() => {
      fetch('https://beaty-product-shop.onrender.com/beauty_products')
        .then((response) => response.json())
        .then((data) => {
           console.log(data) 
           setProducts(data)
          })
        .catch((error) => console.log(error));
    }, []);

  console.log(products)

  const filteredProducts = category
  ? products.filter((product) => product.category === category)
  : products;

  if (filteredProducts.length === 0) {
    return <div className="text-2xl ml-12 text-red-700">No product of this category</div>;
  }

  
