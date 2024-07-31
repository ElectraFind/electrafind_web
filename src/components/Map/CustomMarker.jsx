import React from 'react'
import { Marker, Popup } from 'react-leaflet';
import PropTypes from 'prop-types';
import './CustomMarker.css'

const CustomMarker = ({ position, icon, name, address, phone }) => (
    <Marker position={position} icon={icon}>
        <Popup>
            <b>{name}</b><br/>
            {address}<br/>
            {phone}
        </Popup>
  </Marker>
)
CustomMarker.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    icon: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}

export default CustomMarker