import "./Size.css";

import { Circle, CircleCheckBig } from "lucide-react";

export const Size = () => {
  return (
    <div>
      <h3>Size</h3>
      <div className="size-container">
        <div className="size">
          <input type="radio" XS/>
          <input type="radio" />
          <input type="radio"  />
          <div className="bg-blue-500 p-4">Tesmentt</div>
          <Circle size={15}/>
          <span className="size-item"></span>
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
