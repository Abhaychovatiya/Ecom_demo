import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import WishList from './Pages/WishList/WishList';

const App = () => {
    return (
        <Router>
            <div>
                <Header title="Products" iconShown />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productDetail/:productId" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/WishList" element={<WishList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
