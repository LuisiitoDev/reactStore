import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';



const Information = () => {

    const { state, addToBuyer } = useContext(AppContext);
    const form = useRef(null);
    const history = useHistory();
    const { cart } = state;

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'zp': formData.get('zp'),
            'phone': formData.get('phone'),
        };
        addToBuyer(buyer);
        history.push('/checkout/payment');
    }

    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Contact information</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type="text" placeholder="Full Name" name="name" />
                        <input type="email" placeholder="Email" name="email" />
                        <input type="text" placeholder="Ship Adress" name="address" />
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
                        <Link to="/checkout">
                            Return
                        </Link>
                    </div>
                    <div className="Information-next">
                        <button onClick={handleSubmit} type="button">Pay</button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Order: </h3>
                {cart.map(item => (
                    <div className="Information-item" key={item.title}>
                        <div className="Information-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Information;