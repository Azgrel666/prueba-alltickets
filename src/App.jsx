import { useState } from "react";
import Button from "./components/Button";
import Properties from "./components/Properties"; //Componente que renderiza las Propiedades
import ModalPropertyDetails from "./components/ModalPropertyDetails"
//Componentes sliders para filtros por precio y porcentaje
import SliderPercentageFilter from "./components/SliderFilter";
import SliderPrice from "./components/SliderPrice";
import "./App.css";

function App() {
  //Estados de Botones para flitrar propiedades por tipo, ciudad, precio y porcentaje de fracciones vendidas
  const [activeType, setActiveType] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [fractionRange, setFractionRange] = useState([0, 100]);


  //Estados y Handles para abrir ventana modal y mostrar detalles de propiedad
  const [showModal, setShowModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const handleOpenModal = (property) => {
    setShowModal(true);
    setSelectedProperty(property);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProperty(null);
  };

  const cities = ["Bogotá", "Cali", "Medellin"];

  return (
    <div className=" overflow-hidden mx-60 my-10">
      <header>
        <h1 className="text-[40px] text-primary font-raleway font-bold border-accent pb-2 border-b-2 inline-block">
          Propiedades
        </h1>
        <h2 className="text-[24px] text-secondary font-karla font-semibold my-6">
          Invierte en finca raíz en cualquier lugar de Colombia!
        </h2>

        <div className="flex flex-auto gap-5 justify-start">
          <Button
            index={1}
            activeType={activeType}
            setActiveType={setActiveType}
          >
            Apartamento
          </Button>

          <Button
            index={0}
            activeType={activeType}
            setActiveType={setActiveType}
          >
            Casa
          </Button>

          <Button
            index={3}
            activeType={activeType}
            setActiveType={setActiveType}
          >
            Comercial
          </Button>

          <Button
            index={2}
            activeType={activeType}
            setActiveType={setActiveType}
          >
            Oficinas
          </Button>

          <select
            id="citySelect"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="font-raleway text-[20px] mx-5 px-2  border border-gray-300 rounded"
          >
            <option value="">Todas las Ciudades</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className=" flex flex-auto gap-10 justify-start w-1/2 m-8">
          <div>
            <label htmlFor="fractionSlider" className="mr-2 font-raleway ">
              Filtrar por porcentaje maximo de fracciones vendidas
            </label>
            <SliderPercentageFilter
              id="fractionSlider"
              value={fractionRange}
              onChange={(value) => setFractionRange(value)}
            />
          </div>

          <div>
            <label htmlFor="fractionSlider" className="mr-2 font-raleway ">
              Filtrar por Precio Minimo y Máximo de Fracción
            </label>
            <SliderPrice
              id="price-slider"
              value={priceRange}
              onChange={(value) => setPriceRange(value)}
              min={10}
              max={5000}
            />
          </div>
        </div>
      </header>

      <main>
        <Properties //El componente Properties filtra y renderiza las propiedades 
          activeType={activeType}
          selectedCity={selectedCity}
          fractionRange={fractionRange}
          priceRange={priceRange}
          onOpenModal={handleOpenModal}
        />
         {showModal && (
        <ModalPropertyDetails
          property={selectedProperty}
          onClose={handleCloseModal}
        />
      )}
      </main>
    </div>
  );
}

export default App;
