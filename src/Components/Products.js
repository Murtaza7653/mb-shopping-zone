import React, { useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard';
import Loader from './Loader';
import { cartContext } from './Context';

export default function Products() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setProduct([]);
            const loadProducts = async () => {
                const link = "https://fakestoreapi.com/products";
                await fetch(link)
                    .then((response) => response.json())
                    .then((data) => {
                        setProduct(data);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            }
            loadProducts();
    }, [])

    const globalState = useContext(cartContext)
    const dispatch  = globalState.dispatch
    // console.log(globalState);

    return (

        <div className="container my-3">
            <div className="text-center">
                {loading && <Loader />}
            </div>
            <div className="row">
                {
                    product.map((item) => {
                        item.quantity = 1;
                        return <div className="col-md-4" key={item.id}>
                            <ProductCard id={item.id} image={item.image} title={item.title} desc={item.description} category={item.category} price={item.price} dispatch={dispatch} item={item} quantity={item.quantity} />
                            </div>
                    })
                }
            </div>
        </div>


    )

}