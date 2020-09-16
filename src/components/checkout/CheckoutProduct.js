import React from 'react';
import './Checkout.css';
import { useStateValue } from '../StateProvider';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Close from '@material-ui/icons/Close';

function CheckoutProduct({id, title, description, collection, category, price, image, quantity}) {
    const [, dispatch] = useStateValue();

    const removeFromShoppingBag = () => {
        dispatch({
            type: 'REMOVE_FROM_SHOPPING_BAG',
            item: {
                id: id,
            }
        })
    };
    
    return (
        <li>
            <div className="checkoutProduct">
                <img className="checkoutProduct__image" src={image} alt={title}></img >
                <div className="checkoutProduct__info">
                    <h5>{collection}</h5>
                    <h2>{title}</h2>
                    
                    <p>
                        {description}
                    </p>
                    <p>
                        Article no: {id}
                    </p>
                    
                    <p className="checkoutProduct__price">
                        <strong>{price}</strong>
                        <small> kr</small>
                    </p>
                    <p className="checkoutProduct__price">
                        <strong>{quantity}</strong>
                        <small> st</small>
                    </p>
                </div>
                <FavoriteBorderIcon/>
                <Close className="checkoutProduct__button" onClick={removeFromShoppingBag}/>
            
            
        </div>
        </li>
        
    )
}

export default CheckoutProduct
