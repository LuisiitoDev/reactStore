import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';


const Success = () => {

    const { state } = useContext(AppContext);
    const { buyer } = state;
    const location = useGoogleAddress(buyer[0].address);


    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer[0].name}, thank you for your purchase`}</h2>
                <span>Your order will get in three days to your ship adress</span>
                <div className="Success-map">
                    <Map data={location}/>
                </div>
            </div>
        </div>
    )
}

export default Success;