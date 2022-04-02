import React, { useEffect, useState } from "react";
import "./product.css";
import SingleProduct from "./singleProduct";

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    console.log(products);

    return (
        <div className="card-container">
            {products.map((product) => (
                <SingleProduct key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Product;
