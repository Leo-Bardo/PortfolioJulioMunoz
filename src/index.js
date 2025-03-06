import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';  // Importa desde react-dom/client para React 18+
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';  // Importa React Router

// Componente de la página principal
const Home = () => {
  const navigate = useNavigate();  // Hook para navegar a otras rutas
  
  const handleClick = () => {
    // Redirige a la página "/about" cuando se haga clic en el botón
    navigate('/about');
  };

  return (
    <div>
      <h1>¡¡¡Bienvenido... Esta página ha crasheado y ha dado paso a react!</h1>
      <button id="miBoton" onClick={handleClick}>Haz clic aquí para ir a About</button>
    </div>
  );
};

// Componente de la página About
const About = () => {
  return (
    <div>
      <h1>¡Estás en la página About!</h1>
    </div>
  );
};

// Configuración de las rutas
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />  {/* Página principal */}
      <Route path="/about" element={<About />} />  {/* Página About */}
    </Routes>
  );
};

// Renderiza la aplicación dentro de BrowserRouter para manejar las rutas
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
