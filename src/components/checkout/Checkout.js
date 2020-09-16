import React from 'react';
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct"
import { useStateValue } from '../StateProvider';
import { getShoppingBagTotalPrice } from '../../reducer';

function Checkout() {
    const [{shoppingBag}] = useStateValue();
    
    return (
        <div>
            <h2>Checkout</h2>
            {shoppingBag?.length === 0 ? (
                <div>
                    <h3>Your Shopping Bag is empty!</h3>
                    <p>
                        You have no items in your shopping bag.<br />
                        To buy one or more items, click "Add to bag" for the item.
                    </p>
                </div>
            ) : (
                <div className="checkout">
                    <div className="checkout__left">
                        <h3>Your Shopping Bag:</h3>
                        <ul>
                            {shoppingBag.map(item => (
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    collection={item.collection}
                                    category={item.category}
                                    price={item.price}
                                    image={item.image}
                                    quantity={item.quantity}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="checkout__right">
                        <h3>Total Checkout:</h3>
                        <h4>{getShoppingBagTotalPrice(shoppingBag)}</h4>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Checkout
