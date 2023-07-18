import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from '../../Components/CartItem/CartItem';
import './Cart.css'

const Cart = () => {
  const productData = useSelector((state) => state.ecom.productData)
  const [totalAmount, setTotalAmount] = useState("")

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price
    });
    setTotalAmount(price)
  }, [productData])

  return (
    <div>
      {
        <div>
          <div className='product-card'>
            <h2 className="title">Shopping cart</h2>
          </div>
          {productData.length > 0 &&
            <CartItem isCartResetBtn={true} isCartQtyBtn={true} productData={productData} />
          }
          <p className='custom-container product-card'>
            Total <span className='total-price'>Rs.{(Math.round(totalAmount * 100) / 100).toFixed(2)}</span>
          </p>
        </div>
      }

    </div>
  );
}

export default Cart;