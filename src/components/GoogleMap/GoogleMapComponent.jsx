// GoogleMapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const GoogleMapComponent = () => {
    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            <Marker position={center} />
            {/* Other components such as markers or infowindows can be added here */}
        </GoogleMap>
        </LoadScript>
    );
}

export default GoogleMapComponent;