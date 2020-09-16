import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { getShoppingBagTotalItems } from '../../reducer';

import LocalMall from "@material-ui/icons/LocalMall";
import Favorite from "@material-ui/icons/Favorite";
import Person from "@material-ui/icons/Person";

function Header() {
    const [{shoppingBag}] = useStateValue();

    console.log(shoppingBag);

    return (
        <nav className="header"> 
            <div className="header__logo">
                <Link to="/" className="header__link">
                    <h1>eglein</h1>
                </Link>
                
            </div>
            <div className="header__logo">
                <Link to="/" className="header__link">
                    <h2>Shop</h2>
                </Link>

            </div>
            <div className="header__logo">

                <Link to="/inspiration" className="header__link">
                    <h2>Inspiration</h2>
                </Link>
            </div>
            <div className="header__nav" >
                
                <Link to="/wishlist" className="header__link">
                    <Favorite style={{fontSize: "default"}}/>
                </Link>
                <Link to="/login" className="header__link">
                    <Person style={{fontSize: "default"}}/>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__basket">
                        <LocalMall style={{fontSize: "default"}}/>
                        <span>
                            {getShoppingBagTotalItems(shoppingBag)}
                        </span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
