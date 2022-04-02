import React, { useEffect, useState } from "react";
import { FaArrowRight, FaTrashRestoreAlt } from "react-icons/fa";
import { getProducts } from "../utilities/fakedb";
import "./summary.css";

const Summary = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        async function fetchData() {
            setState(await getProducts());
        }
        fetchData();
    }, []);

    const total = 10;
    const shipping = parseInt(
        state?.map((p) => p.price * p.quantity).reduce((p, c) => p + c, 0)
    );
    const tax = parseFloat((shipping * 0.1).toFixed(2));
    const grandTotal = shipping + tax;

    return (
        <div className="summary-container">
            <h2>Order Summary</h2>
            <div className="order-details">
                <p>Selected Items: {state?.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: ${grandTotal}</h3>

                <div>
                    <button className="cart-clear" onClick={getProducts}>
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
