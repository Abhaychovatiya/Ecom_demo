import React from 'react'
import { useSelector } from 'react-redux';
import { CartItem } from '../../Components/CartItem/CartItem';

const WishList = () => {
  const wishListData = useSelector((state) => state.ecom.wishListData)
  return (
    <div>
      {
        <div>
          <div className='product-card'>
            <h2 className="title">WishList</h2>
          </div>
          {wishListData.length > 0 &&
            <CartItem isAddToCartBtn isWishList productData={wishListData} />
          }
          <p className='custom-container product-card'>
            Total Items<span>{wishListData.length}</span>
          </p>
        </div>
      }
    </div>
  );
}

export default WishList