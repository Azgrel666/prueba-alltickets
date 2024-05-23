import React from 'react';

const ModalPropertyDetails = ({ property, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg border-[1px] p-6 max-w-lg font-raleway">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Detalles de la propiedad</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            > Cerrar
            </button>
          </div>
          <div>
            <img
              src={property.img}
              alt="Imagen de la propiedad"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="mb-2">
              <span className="font-bold">Ciudad:</span> {property.city}
            </div>
            <div className="mb-2">
              <span className="font-bold">Tipo: </span> 
 {property.type === 0
  ? 'Casa'
  : property.type === 1
  ? 'Apartamento'
  : property.type === 2
  ? 'Oficina'
  : property.type === 3
  ? 'Comercial'
  : 'Tipo desconocido'}
              
            </div>
            <div className="mb-2">
              <span className="font-bold">Teléfono:</span> {property.phone}
            </div>
            <div className="mb-2">
              <span className="font-bold">Dirección:</span> {property.address}
            </div>
            <div className="mb-2">
              <span className="font-bold">Fracciones totales:</span>{' '}
              {property.totalFracttions}
            </div>
            <div className="mb-2">
              <span className="font-bold">Fracciones vendidas:</span>{' '}
              {property.soldFracttions}
            </div>
            <div className="mb-2">
              <span className="font-bold">Rentabilidad:</span>{' '}
              {property.profitability}%
            </div>
            <div>
              <span className="font-bold">Precios:</span>
              <ul className="list-disc list-inside">
                {property.prices.map((price, index) => (
                  <li key={index}>{price}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPropertyDetails;