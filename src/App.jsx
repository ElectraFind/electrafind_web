import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import Map from './components/Pages/Map';
// import ServiceStations from './components/Pages/ServiceStations';
// import AboutPage from './components/Pages/AboutPage';
import RegistrationPage from './components/Pages/RegistrationPage';
import AdminLoginPage from './components/Pages/AdminLoginPage';
// import AdminPanel from './components/Pages/AdminPanel';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<Map />} />
        {/* <Route path="/servicestations" element={<ServiceStations />} /> */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        {/* <Route path="/admin-panel" element={<AdminPanel />} /> */}
      </Routes>
    </Router>
  )
}

export default App