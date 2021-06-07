import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";

const Checkout = () => {
    return (
        <div className="Checkout">
            <div className="Checkout-content">
                <h3>Lista de Pedidos: </h3>
                <div className="Checkout-item">
                    <div className="Checkout-element">
                        <h4>Item Name: </h4>
                        <span>$10</span>
                    </div>
                    <FaTrashAlt />
                </div>
            </div>
            <div className="Checkout-sidebar">
                <h3>Total Price: $10</h3>
                <Link to="checkout/information">
                    <button type="button">Cotinue order</button>
                </Link>

            </div>
        </div>
    )
}

export default Checkout;