import React, { useState } from 'react';
import './Contador.css';

export const Contador = () => {
  const [contador, setContador] = useState(0);

  const handleIncrement = () => {
    setContador(contador + 1);
  };


  const handleDecrement = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  

  return (
    <div className="Contador">
      <h3>CONTADOR:</h3>
        <h1>{contador}</h1>
      <button onClick={handleIncrement}> + </button>
      <button onClick={handleDecrement}> -- </button>
    </div>
  );
};