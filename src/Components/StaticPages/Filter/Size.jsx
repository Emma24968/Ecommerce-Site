import "./Size.css";

import { Circle, CircleCheckBig } from "lucide-react";

export const Size = () => {
  return (
    <div>
      <h3>Size</h3>
      <div className="size-container">
        <div className="size">
          <Circle />
          <span className="size-item">XS</span>
          <Circle />
          <span className="size-item">S</span>
          <Circle />
          <span className="size-item">M</span>
        </div>
        <div className="size">
          <CircleCheckBig /> <span className="size-item size-item1">L</span>
          <Circle />
          <span className="size-item ">XL</span>
        </div>
      </div>
    </div>
  );
};
