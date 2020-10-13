import React from 'react';
import './Inspiration.css';
import { useStateValue } from '../StateProvider';
import Gallery from "react-photo-gallery";
import { inspirationPhotos } from "./inspirationPhotos";


function Inspiration() {

    return (
        <div className="inspiration">
            <h1 style={{textAlign:"center", padding:"20px"}}>Inspiration</h1>
            <div className="inspiration__gallery">
                <Gallery margin={16} photos={inspirationPhotos} direction={"column"} />
            </div>
            
        </div>
    )
}

export default Inspiration
