import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const Map = ({ data }) => {

    const mapsStyles = {
        height: '50vh',
        width: '100%'
    };

    const defaultCenter = {
        lat: data.latitude,
        lng: data.longitude
    };

    return (
        <LoadScript googleMapsApiKey='AIzaSyD6sjnZp7XVVTCaQH0tjMWNkF0q1DE26LU'>
            <GoogleMap
                mapContainerStyle={mapsStyles}
                zoom={9}
                center={defaultCenter}>
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    )
}

export default Map
