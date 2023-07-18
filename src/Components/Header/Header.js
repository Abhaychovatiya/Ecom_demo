import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = ({ title, iconShown }) => {
    return (
        <header className='headerContainer'>
            <Link to="/">
                <h1 className='title'>{title}</h1>
            </Link>
            {iconShown ? (
                <div className="icons">
                    <Link to="/WishList">
                        <FaHeart className='icon' size={30} />
                    </Link>
                    <Link to="/cart">
                        <FaShoppingCart className='icon' size={30} />
                    </Link>
                </div>
            ) : null}

        </header>
    );
};

export default Header;
