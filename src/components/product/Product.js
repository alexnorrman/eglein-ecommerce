import React from 'react';
import './Product.css';
import { useStateValue } from '../StateProvider';
import { getProductById } from '../../reducer';

import LocalMall from "@material-ui/icons/LocalMall";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { light } from '@material-ui/core/styles/createPalette';

function Product({id}) {
    const [{products}, dispatch] = useStateValue();
    const product = getProductById(products,id)[0]
    return (
        <div className="product">
            <img className="product__image" src={product.imageUrl[0]} alt={product.name}></img>
            <h4>{product.collection}</h4>
            <h2>{product.name}</h2>
            <p className="product__price">
                {product.price} kr
            </p>
        </div>
    )
}

export default Product
