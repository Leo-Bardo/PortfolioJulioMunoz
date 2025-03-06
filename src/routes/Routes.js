import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import App from '../components/App';
import Button from '../components/Button';
import ButtonComponent from '../components/ButtonComponent'; // Tu nuevo componente de botón


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />  {/* Página principal */}
      <Route path="/about" element={<About />} />  {/* Página About */}
      <Route path="/app" element={<App />} />  {/* Página About */}
      <Route path="/buttonS" element={<Button />} />  {/* Página About */}
      <Route path="/button" element={<ButtonComponent />} />


    </Routes>
  );
};

export default AppRoutes;