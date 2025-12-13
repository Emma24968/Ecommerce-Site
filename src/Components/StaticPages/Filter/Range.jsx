import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

export const PriceRange = () => {
  const [price, setPrice] = useState([0, 1000]);
  return (
    <div>
      <h3>Price Range</h3>
      <div>
        <span>${price[0]}</span>
        <span>${price[1]}</span>
      </div>
    </div>
  );
};
