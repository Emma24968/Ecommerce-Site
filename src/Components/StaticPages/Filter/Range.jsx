import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

export const PriceRange = () => {
  const [price, setPrice] = useState([0, 1000]);

}