import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddProduct = () => {
  
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    qty: "",
    image_url: "",
    category: "",
  });

  const [category, setCategory] = useState("");

   const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  }

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://beaty-product-shop.onrender.com/beauty_products", {
        ...product,
        category, 
      });
      console.log(response.data);
      setSuccessMsg("Product added successfully!");
      setProduct({
        name: "",
        description: "",
        price: "",
        qty: "",
        image_url: "",
        category: "",
      });
      setError(null); 
    } catch (error) {
      console.error(error);
      setError(
        "There was an error adding the product. Please try again later."
      );
      setSuccessMsg(null);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 justify-center ">
      <h2 className="text-2xl font-bold mb-2 ">Add Product</h2>
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</div>}
      {successMsg && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">{successMsg}</div>}
      <form className="w-1/2 h-1/4 relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600" htmlFor="name">
            Name
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            id="name"
            name="name"
            type="text"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            id="description"
            name="description"
            placeholder="Product Description"
            value={product.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600" htmlFor="price">
            Price
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            id="price"
            name="price"
            type="number"
            placeholder="Product Price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600"
            htmlFor="qty"
          >
            Quantity
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            id="qty"
            name="qty"
            type="number"
            placeholder="Product qty"
            value={product.qty}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600" htmlFor="category">
            Category
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            id="category"
            name="category"
            type="text"
            placeholder="Product Category"
            value={category} 
            onChange={handleChangeCategory} 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600" htmlFor="image">
            Image URL
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            id="image_url"
            name="image_url"
            // type="text"
            placeholder="Image URL"
            value={product.image_url}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-red-300 mr-4 hover:bg-red-350 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Product
          </button>
          <Link to="/admin-table" className="border border-red-300 py-2 px-4 rounded-lg">Go to admin page</Link>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
