import React from "react";
import "./product.css";

const SingleProduct = ({ product }) => {
    const { name, price, img, ratings, category, ratingsCount } = product;
    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt={name} />
            </div>
            <h2>{name.length > 20 ? name.substr(0, 18) + "..." : name}</h2>
            <p>Price: ${price}</p>
            <p>Category: {category}</p>
            <p>
                Rating: {ratings} <small>({ratingsCount})</small>
            </p>
        </div>
    );
};

export default SingleProduct;
