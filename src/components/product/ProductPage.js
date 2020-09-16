import React, { useState, useEffect } from 'react';
import './Product.css';
import { useStateValue } from '../StateProvider';
import { getSpecificProduct } from '../../reducer';

import LocalMall from "@material-ui/icons/LocalMall";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function ProductPage(match) {
    const [{products}] = useStateValue();
    let item = [];
    useEffect(() => {
        item = getSpecificProduct(products, match.match.params.id)
    },[item])

    const [, dispatch] = useStateValue();
    const addToShoppingBag = () => {
        dispatch({
            type: 'ADD_TO_SHOPPING_BAG',
            item: {
                category: item.category,
                collection: item.collection,
                description: item.description,
                imageUrl: item.imageUrl,
                measurement: item.measurement,
                name: item.name,
                id: item.id,
                price: item.price,
                quantity: 1,
            }
        })
    };

    return (
        <div className="product">
            <img className="product__image" src={item.imageUrl} alt={item.name}></img>
            
            <div className="product__row">
                <h2>{item.name}</h2>
                <FavoriteBorderIcon/>
            </div>
            <div className="product__row">
                <p className="product__price">
                    <strong>{item.price}</strong>
                    <small> kr</small>
                </p>
                <button className="product__button" onClick={addToShoppingBag}>
                    <LocalMall style={{ fontSize: "inherit"}}/>
                    <span>Add to bag</span>
                </button>
            </div>
            
        </div>
    )
}

export default ProductPage
