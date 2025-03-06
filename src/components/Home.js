// src/components/MyComponent.js
import React from 'react';

const MyComponent = () => {
  // Función que se ejecuta cuando se hace clic en el botón
  const handleClick = () => {
    alert('¡Botón presionado!');
  };

  return (
    <div>
      <h1>Bienvenido a mi Componente</h1>
      <button onClick={handleClick}>Haz clic aquí</button> {/* Botón con evento onClick */}
    </div>
  );
};

export default MyComponent;
