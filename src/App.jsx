import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
// import Map from './components/Pages/Map/Map';
// import ServiceStations from './components/Pages/ServiceStations/ServiceStations';
// import AboutPage from './components/Pages/AboutPage/AboutPage';
// import RegistrationPage from './components/Pages/RegistrationPage/RegistrationPage';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/map" element={<Map />} />
        <Route path="/service" element={<ServiceStations />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegistrationPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App