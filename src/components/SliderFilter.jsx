import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const SliderPercentageFilter = ({ id, value, onChange }) => {
  const handleChange = (newValue) => {
    // Asegurarnos de que el valor inferior siempre sea 0
    const lowerValue = 0;
    const upperValue = newValue[1];
    onChange([lowerValue, upperValue]);
  };

  const marks = {
    0: "0%",
    25: "25%",
    50: "50%",
    75: "75%",
    100: "100%",
  };

  return (
    <Slider
      id={id}
      range
      marks={marks}
      step={5}
      defaultValue={[0, 100]}
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
  );
};

export default SliderPercentageFilter;
