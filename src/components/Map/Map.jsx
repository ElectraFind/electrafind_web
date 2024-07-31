import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import CustomMarker from './CustomMarker/CustomMarker';
import './Map.css';

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const stations = [
    { lat: 6.9271, lng: 79.8612, name: 'chargeNET Charging Station', address: 'Colombo', type: 'station', phone: '0111234567' },
    { lat: 6.934, lng: 79.858, name: 'Home Charger', address: 'Kotte', type: 'home', phone: '0112345678' },
    // Add more locations as needed
  ];

  const icons = {
    home: {
      url: "../../assets/location-pin-home.png",
      scaledSize: { width: 32, height: 32 }
    },
    station: {
      url: "../../assets/location-pin-station.png",
      scaledSize: { width: 32, height: 32 }
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error('Error fetching location:', error),
        { timeout: 10000 }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDTYD4DNXMdQCRcjy0-ePWn5OpM0Ggki54">
      <GoogleMap
        mapContainerClassName="map-container"
        center={currentPosition || { lat: 6.9271, lng: 79.8612 }} // Default to a location if geolocation fails
        zoom={12}
      >
        {currentPosition && (
          <CustomMarker
            position={currentPosition}
            icon={{
              url: "/assets/location-pin-home.png",
              scaledSize: { width: 32, height: 32 }
            }}
            name="Your Location"
            address=""
            phone=""
            onClick={() => setSelectedMarker(null)}
            isSelected={selectedMarker === null}
          />
        )}
        {stations.map((station, index) => (
          <CustomMarker
            key={index}
            position={{ lat: station.lat, lng: station.lng }}
            icon={icons[station.type]}
            name={station.name}
            address={station.address}
            phone={station.phone}
            onClick={() => setSelectedMarker(station)}
            isSelected={selectedMarker === station}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
