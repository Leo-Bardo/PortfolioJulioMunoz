// src/components/ButtonComponent.js
import React from 'react';

const ButtonComponent = () => {
  const handleClick = () => {
    alert('¡Has hecho clic en el botón!');
  };

  return (
    <div>
      <button onClick={handleClick}>Haz clic aquí</button>
    </div>
  );
};

export default ButtonComponent;
