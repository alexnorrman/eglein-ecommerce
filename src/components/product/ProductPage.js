import React, { useState, useEffect } from 'react';
import './Product.css';
import { useStateValue } from '../StateProvider';
import { getProductById } from '../../reducer';
import ImageZoom from "../imagezoom/ImageZoom";

import LocalMall from "@material-ui/icons/LocalMall";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import Loading from "../loading/Loading";

function ProductPage(match) {
    const [{products, user, shoppingBag}, dispatch] = useStateValue();
    const [product, setProduct] = useState();
    const [id, setId] = useState(match.match.params.id);
    const [selectedImg, setSelectedImg] = useState(null);
    const [objectPosition, setObjectPosition] = useState();

    useEffect(() => {
        setProduct(getProductById(products, id)[0]);
    },[products, id])

    
    
    console.log("PRODUCTPAGE PRODUCT: ", product)
    const addToShoppingBag = () => {
        dispatch({
            type: 'ADD_TO_SHOPPING_BAG',
            item: {
                category: product.category,
                collection: product.collection,
                description: product.description,
                imageUrl: product.imageUrl,
                measurement: product.measurement,
                name: product.name,
                id: product.id,
                price: product.price,
                quantity: 1,
            }
        })
        if(!user){
            localStorage.setItem('stored_shoppng_bag', shoppingBag);
        }
    };

    const mystyle = {
        backgroundPosition:objectPosition,
        backgroundImage:`url(${selectedImg})`
 
      };
    const handleMouseMove = e => {
        //e.preventDefault();
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = Math.min(((e.pageY - top) / height * 100),100)
        
        setObjectPosition(`${x}% ${y}%`);
        console.log("X ", x)
        console.log("Y ", y)
        //this.setState({ backgroundPosition: `${x}% ${y}%` })
    }

    return (
        <div className="productPage">
            {product === undefined ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <div className="productPage__content">
                    <div className="productPage__left">
                        {/*<ImageZoom img={selectedImg === null ? (product.imageUrl[0]):(selectedImg)} alt={product.name} />*/}

                            <img className="productPage__image"  src={selectedImg === null ? (product.imageUrl[0]):(selectedImg)} alt={product.name} />    


                        
                        <div className="productPage__thumbnails">
                        {product.imageUrl.map(img => (
                            <img onClick={() => setSelectedImg(img)} className="productPage__thumbnail" src={img} alt={product.name}></img>
                        ))}
                        </div>
                    </div>
                    <div className="productPage__right">
                        <div className="productPage__row">
                            <h2>{product.name}</h2>
                            <FavoriteBorderIcon/>
                        </div>
                        <div className="productPage__row">
                            <p className="productPage__price">
                                <strong>{product.price}</strong>
                                <small> kr</small>
                            </p>
                            <button className="productPage__button" onClick={addToShoppingBag}>
                                <LocalMall style={{ fontSize: "inherit"}}/>
                                <span>Add to bag</span>
                            </button>
                        </div>
                    </div> 
                </div>
            )}
            
        </div>
    )
}

export default ProductPage
