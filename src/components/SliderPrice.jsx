import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceSliderFilter = ({ id, value, onChange, min, max }) => {
  const handleChange = (newValue) => {
    onChange(newValue);
  };

  return (
    <div className="flex flex-col items-center">
      <Slider
        id={id}
        range
        min={min}
        max={max}
        step={1}
        defaultValue={[min, max]}
        value={value}
        onChange={handleChange}
        handleStyle={{
          backgroundColor: "#181F39",
          borderColor: "#181F39",
          height: 16,
          width: 16,
          marginTop: -6,
        }}
        trackStyle={{
          backgroundColor: "#181F39",
          height: 4,
        }}
      />
      <div className="flex justify-between w-full mt-2">
        <span className="text-sm">${value[0]}</span>
        <span className="text-sm">${value[1]}</span>
      </div>
    </div>
  );
};

export default PriceSliderFilter;