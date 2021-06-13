import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = address => {
    const API_KEY = "YOUR API KEY";
    const [map, setMap] = useState({});
    const API = `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${address}`;

    useEffect(async () => {
        const response = await axios.get(API);
        setMap(response.data.data[0]);
    }, []);

    return map;

};

export default useGoogleAddress;
