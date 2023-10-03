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
 
   const
}