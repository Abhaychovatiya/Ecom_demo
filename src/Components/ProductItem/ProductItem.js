import React, { useState } from 'react';
import './ProductItem.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishList } from '../../redux/ProductSlice';

const ProductItem = ({ product }) => {
  const { _id, title, price, image } = product;
  const [baseQty, setBaseQty] = useState(1)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDetails = () => {
    navigate(`/productDetail/${_id}`, {
      state: {
        item: product
      }
    })
  }

  const handleAddToWishList = (e) => {
    e.stopPropagation(); 
    dispatch(
      addToWishList({
        _id: product._id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: baseQty,
        description: product.description
      })
    );
    alert(`${product.title} is added into WishList`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    dispatch(
      addToCart({
        _id: product._id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: baseQty,
        description: product.description
      })
    );
    alert(`${product.title} is added into cart`);
  };


  return (
    <div className="product-card" onClick={handleDetails}>
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">Rs.{price}</p>
        <div className='cart-btn-container'>
          <button className="add-to-cart"
            onClick={handleAddToWishList}>Add to WishList</button>

          <button className="add-to-cart"
            onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
