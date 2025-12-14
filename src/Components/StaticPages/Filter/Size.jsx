import "./Size.css";

import { Circle, CircleCheckBig } from "lucide-react";

export const Size = () => {
  return (
    <div>
      <h3>Size</h3>
      <div className="size-container">
        <div className="size">
          <Circle size={15}/>
          <span className="size-item">XS</span>
          <Circle size={15}/>
          <span className="size-item">S</span>
          <Circle size={15}/>
          <span className="size-item">M</span>
        </div>
        <div className="size">
          <CircleCheckBig size={15}/> <span className="size-item size-item1">L</span>
          <Circle size={15}/>
          <span className="size-item ">XL</span>
        </div>
      </div>
    </div>
  );
};
