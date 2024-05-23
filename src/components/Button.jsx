import React, { useState, useCallback } from 'react';

const Button = ({ children, index, activeType, setActiveType }) => {
  const [isActive, setIsActive] = useState(false);

  const handleFilter = useCallback(() => {
    
    if (activeType === null) {
      // Si ningún botón está activado, activa el botón que se hizo clic
      setIsActive(true);
      setActiveType(index);
    } else if (activeType === index) {
      // Si el botón al que se hizo clic es el mismo que está activado, desactívalo
      setIsActive(false);
      setActiveType(null);
    } else {
      // Si hay un botón activado diferente, desactiva el anterior y activa el nuevo
      setActiveType(index);
    }
  }, [activeType, index, setActiveType]);

  return (
    <button
      className={`text-[20px] text-primary font-raleway font-medium border-primary rounded-md border-[1px] w-40 p-[3px] hover:text-white hover:bg-primary ${
        activeType === index ? 'bg-primary text-white' : ''
      }`}
      onClick={handleFilter}
    >
      {children}
      
    </button>
  );
};

export default Button;