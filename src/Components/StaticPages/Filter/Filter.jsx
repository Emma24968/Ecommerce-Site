import { Category } from "./Category";
import "./Filter.css";
import { Header } from "./Header";
import Range, { PriceRange } from "./Range";
import { Rating } from "./Rating";
import { Size } from "./Size";

export const Filter = () => {
  return (
    <div>
      <Header />
      <hr />
      <Category />
      <hr />

      <Size />
      <hr />

      <PriceRange />
      <hr />

      <Rating />
    </div>
  );
};
