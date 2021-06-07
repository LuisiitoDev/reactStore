import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from "react-icons/fa";
import AppContext from '../context/AppContext';


const Header = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;
    console.log("state",state);
    return (
        <div className="Header">
            <Link to="/">
                <h1 className="Header-title">Rick and Morthy Merchant</h1>
            </Link>

            <div className="Header-checkout">
                <Link to="/checkout">
                    <FaShoppingBasket />
                </Link>
                {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
            </div>
        </div>
    )
}

export default Header;
