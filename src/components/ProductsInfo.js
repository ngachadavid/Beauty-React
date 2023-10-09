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


    const handleMinusClick = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


    const handlePlusClick = () => {
        setQuantity(quantity + 1);
    };

  

    const handleAddToCartClick = () => {
        const timestamp = Date.now();
        const newCartItem = { ...product, quantity, timestamp };
        fetch('http://localhost:4000/cart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newCartItem)
        })
        .then(() => {
          console.log('Item added to cart:', newCartItem);
          setCartItem(newCartItem)
          setIsItemAdded(true);
          setTimeout(() => setIsItemAdded(false), 3000); 
          navigate('/order');
        })
        .catch(error => console.log(error));
        setErrorMessage('Failed to add item to cart. Please try again.');
    };
    
      
    return ( 
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 mt-12 mr-20 ml-20">
            {product &&
                <>
                    <div className=" ">
                        <img src={product.image_url} alt="beauty product"
                        className="w-3/4 h-auto rounded-2xl" />
                    </div>
    
                    <div className=" mt-5">
                        <div>
                            <h1 className="text-3xl font-bold mb-5  font-['Poppins']">{product.name}</h1>
                            <p className="text-black italic mb-4 font-bold"> ksh {product.price}</p>
                            <p className="mb-6 text-grey font-medium"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, facere illum ea sint consequuntur labore sit dolore quos nulla in?{product.description}</p>
                        </div>
                        <div className="flex justify-around ">
                            <div className=" bg-transparent rounded-2xl p-3">
                                <button className="bg-transparent rounded-lg px-3 py-1"
                                    onClick={handleMinusClick}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <span className="px-5">{quantity}</span>
                                <button className="bg-transparent rounded-lg px-3 py-1"
                                    onClick={handlePlusClick}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                            <div className="bg-pink-300 py-4 px-6 rounded-2xl shadow-xl">
                                <button onClick={handleAddToCartClick}>
                                    <span className="uppercase text-white font-semibold">add to cart</span> 
                                    <span className="ml-3 "><FontAwesomeIcon bounce icon={faCartShopping} style={{color: "#F5F5F5",}}/></span>
                                </button>
                            </div>
                        </div>
                        {isItemAdded && (
                        <div className="bg-green-500 text-white p-2 rounded-md mt-4">
                            Item successfully added to cart!
                        </div>
                        )}
                        {errorMessage && (
                        <div className="bg-red-500 text-white p-2 rounded-md mt-4">
                        {errorMessage}
                        </div>
                        )}

                        <div className="  text-bold mt-10">
                        <Link to="/products">
                            <div className="text-lg font-medium text-pink-500 hover:underline text-dbrown dark:text-dbrown">
                                continue shopping  
                            </div>   
                        </Link> 
                        </div>
                    </div>
                </>
            }
        </div>
    );
    
}
 
export default ProductsInfoPage;
