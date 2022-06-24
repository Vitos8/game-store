import React from "react";
import Logo from "../../assets/game-covers/logo.png";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import "./Header.scss";

const Header = () => {
    return (
    <div className="header">
        <img src={Logo} alt="" className="header__logo" />
        <Link to='/' className="header__logo-row">
            <div className="header__title">Game Store</div>
        </Link>
        <Cart/>
    </div>
    );
};

export default Header;