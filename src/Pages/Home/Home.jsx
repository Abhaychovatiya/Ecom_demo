import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductItem from '../../Components/ProductItem/ProductItem';
import ProgressBar from '../../Components/Loader/Loader';
import { productsData } from '../../api/Api'

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProductData = async () => {
    setLoading(true)
    let res = await productsData()
      .then((res) => {
        setProductList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      })
  }

  useEffect(() => {
    getProductData()
  }, [])

  return (
    <div>
      {
        loading ? <ProgressBar />
          : (
            productList.map((item, index) => {
              return (
                <div key={`procard=${index}`}>
                  <ProductItem product={item} />
                </div>
              )
            })

          )
      }

    </div>
  )
}

export default Home;
