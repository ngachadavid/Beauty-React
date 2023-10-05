import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


const ProductsInfoPage = () => {

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); 
    const [cartItem, setCartItem] = useState(0);
    const [isItemAdded, setIsItemAdded] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate()
  
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://beaty-product-shop.onrender.com/beauty_products/${id}`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            setProduct(data)
          })
          .catch(error => console.log(error))
      }, [id]);


    const 