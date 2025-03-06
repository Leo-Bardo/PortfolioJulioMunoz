import React from 'react';

const App = () => {
    const handleClick = () => {
        alert('Botón clickeado');
    };

    return (
        <div>
            <h1>Mi App</h1>
            <Button text="Haz clic" onClick={handleClick} className="btn-primary" />
        </div>
    );
};

export default App;