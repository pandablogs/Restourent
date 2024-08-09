import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity, removeFromCart } from '../../Redux/Slices/cartSlice';
import './component.scss'; // Add a new stylesheet for animations
import { toast } from 'react-toastify';


const AddToCart = ({ slide, iconColor, tailwindCSS }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  const itemInCart = cartItems.find(item => item.id === slide.id);
  const [removing, setRemoving] = useState(false);

  const handleAddToCart = () => {
    if (!itemInCart) {
      dispatch(addToCart(slide));
      toast.success('Add to Cart Successfully !', {
        position: "bottom-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(slide.id));
    toast.success('Item Quantity incresce !', {
      position: "bottom-right",
      autoClose: 1400,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleDecrement = () => {
    if (itemInCart.quantity > 1) {
      dispatch(decrementQuantity(slide.id));
      toast.error('Item Quantity Decresce !', {
        position: "bottom-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setRemoving(true);
      setTimeout(() => {
        dispatch(removeFromCart(slide.id));
        setRemoving(false);
      }, 200);
      toast.error('Item Remove Successfully !', {
        position: "bottom-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className={`cart-item`}>
      {itemInCart ? (
        <div className="flex items-center space-x-2">
          <button onClick={handleDecrement} className={`w-8 h-8 p-1  rounded-full ${tailwindCSS} text-white ${removing ? 'fade' : 'fade-out'} `} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={iconColor} aria-hidden="true" className="of si">
              <path d="M5 10a.75.75 0 000 1.5h10a.75.75 0 000-1.5H5z"></path>
            </svg>
          </button>
          <span className={`${removing ? 'fade' : 'fade-out'} `}  >{itemInCart.quantity}</span>
          <button onClick={handleIncrement} className={`w-8 h-8 p-1 rounded-full ${tailwindCSS} text-white`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={iconColor} aria-hidden="true" className="of si">
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
            </svg>
          </button>
        </div>
      ) : (
        <button onClick={handleAddToCart} className={`w-8 h-8 p-1  rounded-full ${tailwindCSS} text-white`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={iconColor} aria-hidden="true" className="of si">
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default AddToCart;
