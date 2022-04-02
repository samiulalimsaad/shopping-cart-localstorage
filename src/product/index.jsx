import React, { useEffect, useState } from "react";
import { useProducts } from "../hooks/products";
import Summary from "../summary";
import "./product.css";
import SingleProduct from "./singleProduct";

const Product = () => {
    const [products] = useProducts([]);
    console.log(products);

    const [carts, setCarts] = useState([]);
    useEffect(() => {
        const storedCarts = JSON.parse(localStorage.getItem("ema-john")) || {};
        const saveCarts = [];
        if (storedCarts) {
            for (const id in storedCarts) {
                const temp = products.find((pp) => pp.id === id);
                if (temp) {
                    temp.quantity = +storedCarts[id];
                    saveCarts.push(temp);
                }
            }
        }
        setCarts(saveCarts);
    }, [products]);

    return (
        <div className="main">
            <div className="card-container">
                {products.map((product) => (
                    <SingleProduct key={product.id} product={product} />
                ))}
            </div>
            <Summary carts={carts} />
        </div>
    );
};

export default Product;
