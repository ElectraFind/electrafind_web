import React from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import './CustomMarker.css';

const CustomMarker = ({ position, icon, name, address, phone, onClick, isSelected }) => {
    return (
        <>
        <Marker
            position={position}
            icon={icon}
            onClick={onClick}
        />
        {isSelected && (
            <InfoWindow
            position={position}
            onCloseClick={onClick}
            >
            <div className="info-window-content">
                <h2>{name}</h2>
                <p>{address}</p>
                <p>{phone}</p>
            </div>
            </InfoWindow>
        )}
        </>
    );
};

export default CustomMarker;