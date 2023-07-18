import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './ProductDetail.css';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishList } from '../../redux/ProductSlice';

const ProductDetail = () => {

    const dispatch = useDispatch()

    const [details, setDetails] = useState({})
    const [baseQty, setBaseQty] = useState(1)

    const location = useLocation()
    useEffect(() => {
        setDetails(location.state.item)
    }, [])

    return (
        <>
            <div className="container">
                <div className="image-container">
                    <img className="image" src={details.image} alt="" />
                </div>
                <div className="details-container">
                    <div>
                        <h2 className="title">{details.title}</h2>
                        <div className="price-container">
                            <div className="current-price">Rs.{details.price}</div>
                        </div>
                        <div className="category-container">
                            <div className="category">{details.category}</div>
                        </div>
                        <div className="description-container">
                            <div className="description">{details.description}</div>
                        </div>
                        <div className='btn-container'>
                            <button className="add-to-cart-button" onClick={() => dispatch(addToCart({
                                _id: details._id,
                                title: details.title,
                                image: details.image,
                                price: details.price,
                                quantity: baseQty,
                                description: details.description
                            })) && alert(`${details.title} is added`)}>Add to Cart</button>
                            <button className="add-to-cart-button" onClick={() => dispatch(addToWishList({
                                _id: details._id,
                                title: details.title,
                                image: details.image,
                                price: details.price,
                                quantity: baseQty,
                                description: details.description
                            })) && alert(`${details.title} is added into WishList`)}>Add to Whishlist</button>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProductDetail

