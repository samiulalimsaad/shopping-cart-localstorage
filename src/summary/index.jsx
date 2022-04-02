import React from "react";
import { FaArrowRight, FaTrashRestoreAlt } from "react-icons/fa";
import "./summary.css";

const Summary = () => {
    return (
        <div className="summary-container">
            <h2>Order Summary</h2>
            <div className="order-details">
                <p>Selected Items: 10</p>
                <p>Total Price: $10</p>
                <p>Total Shipping Charge: $10</p>
                <p>Tax: $10</p>
                <h3>Grand Total: $10</h3>

                <div>
                    <button className="cart-clear">
                        Clear Cart{" "}
                        <span>
                            <FaTrashRestoreAlt />
                        </span>
                    </button>
                    <button className="review-order">
                        Review Order{" "}
                        <span>
                            <FaArrowRight />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Summary;
