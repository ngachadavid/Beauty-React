import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import 'flowbite/dist/flowbite.min.css';
import 'flowbite/dist/flowbite.min.js';


function AdminTable() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingProduct, setEditingProduct] = useState(null);

// GET/products
  useEffect(() => {
    axios.get('https://beaty-product-shop.onrender.com/beauty_products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


// delete logic
  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?,You cant go back once you do this")) {
      axios
        .delete(`https://beaty-product-shop.onrender.com/beauty_products/${productId}`)
        .then(() => {
          setProducts(products.filter((p) => p.id !== productId));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };


// Search logic
  const filteredProducts = products.filter((product) =>
  product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
);


// edit logic
const handleEdit = (product) => {
  setEditingProduct(product);
};


//save the edited price
const handleSave = () => {
  axios
    .put(`https://beaty-product-shop.onrender.com/beauty_products/${editingProduct.id}`, editingProduct)
    .then(() => {
      setEditingProduct(null);
      setProducts(products.map(p => p.id === editingProduct.id ? editingProduct : p));
    })
    .catch((error) => {
      console.log(error);
    });
};


return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg mr-20 ml-20 p-5">
        {/* Search */}
        <div className='flex  justify-start '>
            <div class="pb-4 bg-white dark:bg-gray-900 mr-9 mb-10">
                <label for="table-search" className="sr-only ">Search</label>
                <div class="relative mt-1 mx-auto">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text"
                          id="table-search"
                          class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search for items"
                          value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                          />
                </div>
                </div>
               <Link to="/add-product" type="button" class="">
               <p className='px-8 bg-pink text-white font-semibold py-2 rounded-lg'>Add product</p>
                </Link>
               
          </div>
        <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          {/* Product */}
         <div class="flex items-center space-x-3 w-full md:w-auto">
          {/* Filter */}
         {/* filter dropdown */}
                <div id="filterDropdown" class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                  <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose category</h6>
                        <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                <li class="flex items-center">
                                <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"></label>
                              </li>
                        </ul>
                </div>
        </div>
        </div>
        <table className=" ml-20 mr-20 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        <span class="sr-only">
                        Image
                        </span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Product description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                    <th scope="col" className="px-6 py-3">
                    </th>
                </tr>
            </thead>
            <tbody>
                {filteredProducts.map((product) => (
                <tr key={product.id}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {/* image  */}
                    <td class="w-32 p-4">
                    <img src={product.image_url} alt={product.name}/>
                    </td>
                    {/* product name */}
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {product.name}
                    </th>
                    {/* description */}
                    <td className=" px-6 py-4">
                        {product.description}
                    </td>
                    {/* category */}
                    <td className="px-6 py-4">
                        {product.category}
                    </td>
                    {/* price */}
                    <td className="px-6 py-4">
                    {editingProduct && editingProduct.id === product.id ? (
                   <input
                   type="text"
                   value={editingProduct.price}
                   onChange={(e) =>
                     setEditingProduct({ ...editingProduct, price: e.target.value })
                   }
                     />
                    ) : (
                      product.price
                    )}
                    </td>
                    <td>
                    {editingProduct && editingProduct.id === product.id ? (
                      <button onClick={() => handleSave(product)}>
                        <FontAwesomeIcon icon={faCheck} style={{color: "#6EAE61",}} />
                      </button>
                    ) : (
                      <button>
                      </button>
                    )}
                    <button onClick={() => handleSave(product)}>
                    </button>
                  </td>
                   <td className="flex items-center px-6 py-4 space-x-3">
                        {/* edit */}
                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleEdit(product)}>
                        <FontAwesomeIcon icon={faPenToSquare} style={{"--fa-primary-color": "#6691DB", "--fa-secondary-color": "#3B60A0",}} />
                        </button>
                        {/* delete */}
                        <button className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        onClick={() => handleDelete(product.id)}
                        >
                            <FontAwesomeIcon icon={faTrash} style={{color: "#ED4C07",}} />
                        </button>
                    </td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
    )
}
export default AdminTable





