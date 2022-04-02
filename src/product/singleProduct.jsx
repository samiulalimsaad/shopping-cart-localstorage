import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { addToDB } from "../utilities/fakedb";
import "./product.css";
const SingleProduct = ({ product }) => {
    const { name, price, img, ratings, category, ratingsCount } = product;
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-img">
                    <img src={img} alt={name} />
                </div>
                <div className="product-details">
                    <h2>
                        {name.length > 20 ? name.substr(0, 18) + "..." : name}
                    </h2>
                    <p>Price: ${price}</p>
                    <div className="category">
                        <p>Category: {category}</p>
                        <p>
                            Rating: {ratings} <small>({ratingsCount})</small>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <button className="cart-btn" onClick={() => addToDB(product)}>
                    Add to Cart{" "}
                    <span>
                        <FaCartPlus />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default SingleProduct;
