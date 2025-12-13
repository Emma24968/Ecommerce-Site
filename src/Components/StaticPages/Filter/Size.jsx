import { Circle } from "lucide-react";

export const Size = () => {
  return (
    <div>
      <h3>Size</h3>
      <div className="size-container">
        <div className="size">
          <Circle />
          <span>XS</span>
          <Circle />
          <span>S</span>
          <Circle />
          <span>M</span>
        </div>
        <div className="size">
          <Circle />
          <span>L</span>
          <Circle />
          <span>XL</span>
        </div>
      </div>
    </div>
  );
};
