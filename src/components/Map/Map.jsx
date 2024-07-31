import React, { useContext, useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import CustomMarker from './CustomMarker'
import UserLocationContext from '../../context/UserLocationContext.jsx'
import stationIconUrl from '../../assets/station-icon.png'
import homeChargerIconUrl from '../../assets/home-charger-icon.png'
import PropTypes from 'prop-types'
import './Map.css'

const stationIcon = new L.Icon({
  iconUrl: stationIconUrl,
  iconSize: [32, 32],
})

const homeChargerIcon = new L.Icon({
  iconUrl: homeChargerIconUrl,
  iconSize: [32, 32],
})

const Map = () => {
  const { userLocation } = useContext(UserLocationContext)
  const [stations, setStations] = useState([])
  const [homeChargers, setHomeChargers] = useState([])

  useEffect(() => {
    setStations([
      { name: 'ChargeNET Charging Station', location: [6.870938,79.865313], address: '57 Pereira Ln, Colombo 00600', phone: '0704101258' },
      { name: 'chargeNET Charging Station', location: [6.911437, 79.865062], address: '6, 7 Horton Pl, Colombo 00700', phone: 'not provided' },
      { name: 'chargeNET Charging Station', location: [6.908563,79.939312], address: 'Kotte-Bope Road, New Kandy Rd', phone: '0770555553' },
      { name: 'Electric vehicle Charging Point', location: [6.929438,79.860937], address: 'Trace Expert City,Tripoli Square, Maradana, Colombo-10 01000', phone: '0115551551' },
      { name: 'Electric Vehicle Charging Station', location: [6.870938,79.865313], address: '46 Pereira Ln, Colombo 00600', phone: 'not provided' },
      { name: 'Electric Vehicle Charging Station', location: [6.911437, 79.865062], address: '191 Alakeshwara Rd, Sri Jayawardenepura Kotte 10100', phone: '0773410003' },
      { name: 'eShift Charging Station', location: [6.911938,79.855688], address: 'Colombo 00700', phone: '0117555554' },
    ]);

    setHomeChargers([
      { name: 'Fredrick\'s Kotte', location: [6.895188, 79.911312], address: '191 Alakeshwara Rd, Sri Jayawardenepura Kotte', phone: '0773410003'},
      { name: 'Havelock city', location: [6.882437,79.866563], address: 'Havelock City', phone: '0115551551'},
    ]);
  }, [])

  return (
    <MapContainer center={userLocation} zoom={12} style={{ height: 'calc(100vh - 65px)', width: '100%' }}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {stations.map((station, index) => (
        <Marker key={index} position={station.location} icon={stationIcon}>
          <Popup>
            <b>{station.name}</b><br />
            {station.address}<br />
            {station.phone}
          </Popup>
        </Marker>
      ))}
      
      {homeChargers.map((charger, index) => (
        <CustomMarker key={index} position={charger.location} icon={homeChargerIcon}>
          <Popup>
            <b>{charger.name}</b><br />
            {charger.address}<br />
            {charger.phone}
          </Popup>
        </CustomMarker>
      ))}
    </MapContainer>
  )
}

Map.propTypes = {
  userLocation: PropTypes.arrayOf(PropTypes.number).isRequired,
  stations: PropTypes.arrayOf(PropTypes.object).isRequired,
  homeChargers: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Map;
