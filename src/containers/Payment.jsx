import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';

const Payment = () => {

    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;
    const history = useHistory();
    const clientId = "YOUR CLIENT ID"
    const paypalOptions = {
        clientId,
        intent: 'capture',
        currency: 'USD'
    };

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handlePaymentSuccess = data => {
        
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            };

            addNewOrder(newOrder);
            history.push('/checkout/success');
        }
    };

    const handleSumTotal = () => {
        const reducer = (accumlator, currentValue) => accumlator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    };

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Order overview</h3>
                {cart.map(item => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>$ {' '} {item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal()}
                        onPaymentStart={() => console.log('start payment')}
                        onPaymentSuccess={data => handlePaymentSuccess(data)}
                        onPaymentError={error => console.log(error)}
                        onPaymentCancel={data => console.log(data)}
                    />
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Payment;