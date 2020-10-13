import React, { useState, useEffect } from 'react';
import '../product/Product.css';



function ImageZoom(props) {
    const [selectedImg, setSelectedImg] = useState(props.img);
    const [alt, setAlt] = useState(props.alt);
    const [objectPosition, setObjectPosition] = useState();
    
    const mystyle = {
        backgroundPosition:objectPosition,
        backgroundImage:`url(${selectedImg})`
 
      };
    const handleMouseMove = e => {
        //e.preventDefault();
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = Math.min(((e.pageX - left) / width * 100),100)
        const y = Math.min(((e.pageY - top) / height * 100),100)
        
        setObjectPosition(`${x}% ${y}%`);
        console.log("X ", x)
        console.log("Y ", y)
        //this.setState({ backgroundPosition: `${x}% ${y}%` })
    }

    return (
        <div className="productPage">
            <figure style={{backgroundImage:`url(${selectedImg})`, backgroundPosition:objectPosition, backgroundRepeat:"no-repeat"}} onMouseMove={handleMouseMove}>
                <img className="productPage__image"  src={selectedImg} alt={alt} />    
            </figure>
        </div>
    )
}

export default ImageZoom
