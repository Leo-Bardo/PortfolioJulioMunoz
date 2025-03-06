// src/App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes';  // Importa el archivo de rutas

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppRoutes />  {/* Renderiza las rutas aquí */}
  </BrowserRouter>
);