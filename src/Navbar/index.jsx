/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../images/Logo.svg";
import "./navbar.css";

const Navbar = () => {
    return (
        <header className="nav">
            <img src={logo} alt="Ema-John" />
            <div className="menu">
                <a href="#">Order</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory</a>
            </div>
        </header>
    );
};

export default Navbar;
