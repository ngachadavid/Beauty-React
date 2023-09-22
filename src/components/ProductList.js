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

  
return (

<div >
    {/* <Sidebar setCategory={setCategories} /> */}
    <div className="grid grid-cols-4 gap-4 p-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card bg-white rounded-lg  p-2 relative w-full max-w-sm border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
             <div className='rounded-lg '>
               <img 
              className="object-cover p-2 rounded-t-lg"
               src={product.image_url} 
               alt="beauty products"
                />
            </div>
            <div className="px-5 pb-5">
              <Link
                to={`/product/${product.id}`}
                className="text-sm font-semibold cursor-pointer  hover:text-none text-grey"
              >
                {product.name}
              </Link>
              <div className="flex items-center justify-between">

              <Link 
              to={`/product/${product.id}`}
              className=" pricing text-l font-bold text-gray-900 dark:text-white">
                ksh {product.price}
              </Link>
             </div>

            </div>
           
          </div>
        ))}
    </div>
    </div>
    );
  };
  


export default ProductList;


