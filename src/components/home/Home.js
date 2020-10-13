import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import Product from "../product/Product";
import Loading from "../loading/Loading";
import { useStateValue } from '../StateProvider';

function Home() {
    const [{products, loading}, dispatch] = useStateValue();

    console.log("HERE LOOK AT MEEE!!!!!!!! >>> ", products);
    console.log("LOADING          !!!!!!!! >>> ", loading);
    return (
        <div className="home">
            <h1>Shop</h1>
            
            {products?.length === 0 ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <div className="products">
                    {products.map(product => (
                        <Link key={product.id} to={`/products/${product.id}`}>
                            <Product
                            id={product.id}
                            /*category={product.category}
                            collection={product.collection}
                            description={product.description}
                            id={product.id}
                            imageUrl={product.imageUrl}
                            measurement={product.measurement}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}*/
                            />
                        </Link>
                    ))}
                    {products.map(product => (
                        <Link key={product.id} to={`/products/${product.id}`}>
                            <Product
                            id={product.id}
                            /*category={product.category}
                            collection={product.collection}
                            description={product.description}
                            id={product.id}
                            imageUrl={product.imageUrl}
                            measurement={product.measurement}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}*/
                            />
                        </Link>
                    ))}
                    {products.map(product => (
                        <Link key={product.id} to={`/products/${product.id}`}>
                            <Product
                            id={product.id}
                            /*category={product.category}
                            collection={product.collection}
                            description={product.description}
                            id={product.id}
                            imageUrl={product.imageUrl}
                            measurement={product.measurement}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}*/
                            />
                        </Link>
                    ))}
                    {products.map(product => (
                        <Link key={product.id} to={`/products/${product.id}`}>
                            <Product
                            id={product.id}
                            /*category={product.category}
                            collection={product.collection}
                            description={product.description}
                            id={product.id}
                            imageUrl={product.imageUrl}
                            measurement={product.measurement}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}*/
                            />
                        </Link>
                    ))}
                    {products.map(product => (
                        <Link key={product.id} to={`/products/${product.id}`}>
                            <Product
                            id={product.id}
                            /*category={product.category}
                            collection={product.collection}
                            description={product.description}
                            id={product.id}
                            imageUrl={product.imageUrl}
                            measurement={product.measurement}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}*/
                            />
                        </Link>
                    ))}
                    {products.map(product => (
                        <Link key={product.id} to={`/products/${product.id}`}>
                            <Product
                            id={product.id}
                            /*category={product.category}
                            collection={product.collection}
                            description={product.description}
                            id={product.id}
                            imageUrl={product.imageUrl}
                            measurement={product.measurement}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}*/
                            />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home
