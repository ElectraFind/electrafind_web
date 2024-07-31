import React, { createContext, useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const UserLocationContext = createContext()

export const UserLocationProvider = ({ children }) => {
    const [userLocation, setUserLocation] = useState([6.9271, 79.8612])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserLocation([position.coords.latitude, position.coords.longitude])
            },
            (error) => console.error('Error getting user location:', error)
        )
    }, [])

    return (
        <UserLocationContext.Provider value={{ userLocation }}>
            {children}
        </UserLocationContext.Provider>
    )
}

UserLocationProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default UserLocationContext