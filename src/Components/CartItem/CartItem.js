import { useDispatch, useSelector } from "react-redux";
import { FaWindowClose } from 'react-icons/fa';
import { addToCart, decrementQantity, deleteFromCart, deleteFromWishList, incrementQuantity, resetCart } from "../../redux/ProductSlice";
import './CartItem.css'

export const CartItem = ({ productData, isCartResetBtn, isCartQtyBtn, isAddToCartBtn, isWishList }) => {
    const dispatch = useDispatch()
    return (
        <>
            <div className="product-card">
                <div>
                    {
                        productData.map((item, key) => {
                            return <div key={item._id} className="container">
                                <div className="flex-container">
                                    <div onClick={() => isWishList ? dispatch(deleteFromWishList(item._id)) : dispatch(deleteFromCart(item._id))} className="product-title product-title:hover">
                                        <FaWindowClose className='icon' size={30} />
                                    </div>
                                    <img src={item.image} className="product-image" alt="" />
                                </div>
                                <h2 className="item-title">{item.title}</h2>
                                {isCartQtyBtn &&
                                    <div className="item-info">
                                        <p className="item-info-p">Quantity</p>
                                        <div className="item-quantity">
                                            <button
                                                onClick={() =>
                                                    dispatch(
                                                        decrementQantity({
                                                            _id: item._id,
                                                            title: item.title,
                                                            image: item.image,
                                                            price: item.price,
                                                            quantity: 1,
                                                            description: item.description,
                                                        })
                                                    )
                                                }
                                                className='item-quantity button item-quantity button:hover  item-quantity button:active'
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => dispatch(incrementQuantity({
                                                _id: item._id,
                                                title: item.title,
                                                image: item.image,
                                                price: item.price,
                                                quantity: 1,
                                                description: item.description

                                            }))} className='item-quantity button item-quantity button:hover  item-quantity button:active'>+</button>
                                        </div>
                                    </div>
                                }
                                <div style={{flexDirection:"row"}}>
                                <p className="item-price">Rs.{item.price}</p>
                                </div>
                                {isAddToCartBtn &&
                                    <button onClick={() => {
                                        dispatch(addToCart({
                                            _id: item._id,
                                            title: item.title,
                                            image: item.image,
                                            price: item.price,
                                            quantity: 1,
                                            description: item.description
                                        })) && dispatch(deleteFromWishList(item._id)) && alert(`${item.title} is added into cart`)
                                    }}
                                        className='add-to-cart-button'>Add To Cart</button>
                                }
                            </div>
                        })
                    }
                    {isCartResetBtn &&
                        <button onClick={() => dispatch(resetCart())} className='reset-utton'>Reset Cart</button>
                    }
                </div>
            </div>
        </>
    )
}


