import React from 'react';
import './Product.css';
import { useStateValue } from '../StateProvider';

import LocalMall from "@material-ui/icons/LocalMall";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Product({id, name, description, collection, category, price, image}) {
    const [, dispatch] = useStateValue();

    const addToShoppingBag = () => {
        dispatch({
            type: 'ADD_TO_SHOPPING_BAG',
            item: {
                id: id,
                name: name,
                description: description,
                collection: collection,
                category: category,
                price: price,
                image: image,
                quantity: 1,
            }
        })
    };

    return (
        <div className="product">
            <img className="product__image" src={image} alt={name}></img>
            
            <div className="product__row">
                <h2>{name}</h2>
                <FavoriteBorderIcon/>
            </div>
            <div className="product__row">
                <p className="product__price">
                    <strong>{price}</strong>
                    <small> kr</small>
                </p>

            </div>
            
        </div>
    )
}

export default Product
