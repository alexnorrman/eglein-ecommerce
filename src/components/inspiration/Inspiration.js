import React from 'react';
import './Inspiration.css';
import { useStateValue } from '../StateProvider';
import Gallery from "react-photo-gallery";
import { inspirationPhotos } from "./inspirationPhotos";


function Inspiration() {

    return (
        <div className="inspiration">
            <h1>Inspiration</h1>
            <Gallery margin={16} photos={inspirationPhotos} direction={"column"} />
        </div>
    )
}

export default Inspiration
