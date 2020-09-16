import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import Product from "../product/Product";
import { useStateValue } from '../StateProvider';

function Home() {
    const [{products}, dispatch] = useStateValue();

    console.log("HERE LOOK AT MEEE!!!!!!!! >>> ", products);
    return (
        <div>
            <h1 style={{textAlign:"center", padding:"20px"}}>Home</h1>
            
            {products?.length === 0 ? (
                <div>
                    <h3>Can't find any products!</h3>
                </div>
            ) : (
                <div className="products">
                    {products.map(item => (
                        <Link key={item.id} item={item} to={`/products/${item.id}`}>
                            <Product
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                description={item.description}
                                collection={item.collection}
                                category={item.category}
                                price={item.price}
                                image={item.imageUrl[0]}
                                quantity={item.quantity}
                            />
                        </Link>
                    ))}
                </div>
            )}
                {/*<Product 
                    id="111111"
                    title="Talrik"
                    description="Talrik av riktigt fin kvalité"                   
                    collection="Istapp"
                    category={["Talrik"]}
                    price="299"
                    image="http://www.fagerstakeramik.se/wp-content/uploads/2014/03/stengods-tallrik.jpg"
                />
                <Product 
                    id="222222"
                    title="Kopp"
                    description="Kopp av riktigt fin kvalité"
                    collection="Istapp"
                    category={["Kopp"]}
                    price="199"
                    image="http://www.fagerstakeramik.se/wp-content/uploads/2015/03/mugg-m-fat-vit-stengods.jpg"
                />
                
                    <Product 
                        id="333333"
                        title="Skål"
                        description="Skål av riktigt fin kvalité"
                        collection="Istapp"
                        category={["Talrik", "Skål"]}
                        price="499"
                        image="http://www.fagerstakeramik.se/wp-content/uploads/2015/03/djup-tallrik-vit-stengods21.jpg"
                />
            </div>*/}
        </div>
    )
}

export default Home
