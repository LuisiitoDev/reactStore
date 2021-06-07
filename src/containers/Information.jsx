import React from 'react';
import { Link } from 'react-router-dom';

const Information = () => {
    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Contact information</h2>
                </div>
                <div className="Information-form">
                    <form action="">
                        <input type="text" placeholder="Full Name" name="name" />
                        <input type="email" placeholder="Email" name="email" />
                        <input type="text" placeholder="Ship Adress" name="adress" />
                        <input type="text" placeholder="apto" name="apto" />
                        <input type="text" placeholder="City" name="city" />
                        <input type="text" placeholder="Country" name="country" />
                        <input type="text" placeholder="State" name="state" />
                        <input type="text" placeholder="Zip Code" name="zp" />
                        <input type="text" placeholder="Phone" name="phone" />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        Return
                    </div>
                    <Link to="/checkout/payment">
                        <div className="Information-next">
                            Purchase
                        </div>
                    </Link>

                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Order: </h3>
                <div className="Information-item">
                    <div className="Information-element">
                        <h4>Item Name</h4>
                        <span>$10</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;