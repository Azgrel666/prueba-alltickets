import React, { useState } from 'react';

import { useFetchProperties } from "../services/useFetchProperties"; //Componente para simular fetch de API
import data from "../mocks/data.json"; //JSON local con los datos de las propiedades

const Properties = ({ activeType, selectedCity, fractionRange, priceRange, onOpenModal }) => {
  
  //Simulación de fetch a la API. En vez de una URL se le pasa un json alojado localmente.
  //Se retornan los datos del JSON, el estado de carga y el estado de error.
  const { properties, loading, error } = useFetchProperties(data);
 
  const calculateSoldPercentage = (sold, total) => {
    return (sold/total*100).toFixed(2)
  };

  const calculateMin = (prices) => {
    return Math.min(...prices.map((price) =>parseFloat(price.replace(/[$,]/g, ""))))
  };

  const calculateMax = (prices) => {
    return Math.max(...prices.map((price) =>parseFloat(price.replace(/[$,]/g, ""))))
  };


//Filtrado por tipo, ciudad, porcentage vendido y precio maximo y minimo
  const filteredProperties = properties?.length > 0 ? activeType !== null ? properties.filter(
    (property) =>
      property.type === activeType &&
      (selectedCity === '' || property.city === selectedCity) &&
      calculateSoldPercentage(property.soldFracttions, property.totalFracttions) <= fractionRange[1] &&
      calculateMin(property.prices) >= priceRange[0] &&
      calculateMax(property.prices) <= priceRange[1]
  ) : properties.filter(
    (property) =>
      (selectedCity === '' || property.city === selectedCity) &&
      calculateSoldPercentage(property.soldFracttions, property.totalFracttions) <= fractionRange[1] &&
      calculateMin(property.prices) >= priceRange[0] &&
      calculateMax(property.prices) <= priceRange[1]
  ) : [];

  return (

    <div>
      
      <ul>
        {/* En caso de error al hacer petición a la API */}
        {error && <div>Error: {error.message}</div>} 

        {/* Estado de Carga de la API */}
        {loading && <div>Cargando...</div>}

        {/* Mostrar propiedades filtradas extraidas del JSON */}
        <div className="grid grid-cols-3 gap-6 mx-14 my-10">
          {filteredProperties?.map((property) => (
            <div key={property._id} className="border-[1px] border-primary rounded-[40px] ">

              {/* Imagen de la propiedad*/}
              <img
                src={property.img}
                alt={property.address}
                className="w-full rounded-t-[40px]"
              />

              <div className="flex flex-col p-5">

              {/* Dirección de la propiedad */}
                <div className="flex justify-start gap-3 mb-2">
                  <img
                    src="public/marker-location.svg"
                    alt="location"
                    className="w-[13px] h-[17px] mt-[2px]"
                  />
                  <h3 className="text-[20px] text-primary font-bold font-karla leading-5 uppercase">
                    {property.address}
                  </h3>
                </div>

                {/* Ciudad de la propiedad */}
                <p className="text-[16px] font-raleway text-black ml-6 mb-2">
                  {property.city}
                </p>

                {/* Rango de precios de la propiedad */}
                <div className="flex justify-start gap-3 mb-2">
                  <img
                    src="public/money-sign.svg"
                    alt="money"
                    className="w-[10px] h-[18px]"
                  />

                {/* Porcentaje de fraccionamientos vendidos */}
                  <p className="text-[20px] text-primary font-bold font-karla leading-5 uppercase">
                    {calculateSoldPercentage(property.soldFracttions, property.totalFracttions)}
                    % EA
                  </p>
                </div>

                {/* Rango de precios por fraccionamiento */}
                <p className="text-[16px] font-raleway text-black ml-6 mb-2">
                  $
                  {calculateMin(property.prices)}
                  - $
                  {calculateMax(property.prices)}
                </p>

                 {/* Barra porcentual de fraccionamientos vendidos */}
                <div className="bg-white border-[1px] border-primary h-[16px] rounded-lg my-2">
                  <div
                    className="bg-[#4459A5] h-full rounded-l-lg text-white text-[10px] font-raleway flex justify-center"
                    style={{
                      width: `${
                        calculateSoldPercentage(property.soldFracttions, property.totalFracttions)
                      }%`,
                    }}
                  >
                    {calculateSoldPercentage(property.soldFracttions, property.totalFracttions)}
                    %
                  </div>
                </div>

                <p className="font-raleway text-[10px] self-center mb-3">
                  Vendido
                </p>

                <button className="self-center text-[20px] text-white bg-primary font-raleway font-medium bg- border-primary rounded-md border-[1px] w-40 p-[1px] mb-3 hover:bg-blue-900"
                onClick={() => onOpenModal(property)}>
                  Detalles
                  
                </button>
                
      

              </div>
              
            </div>
             
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Properties;