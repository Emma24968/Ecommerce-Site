import { Circle, CircleCheckBig, Star } from "lucide-react";
import "./Rating.css";

export const Rating = () => {
  return (
    <div>
      <h3>Rating</h3>
      <div className="rating-container">
        <div className="rating">
          <div className="rating-item">
            {" "}
            <CircleCheckBig size={15}/> <span>5★</span>
          </div>
          <div className="rating-item">
            {" "}
            <Circle size={15}/> <span>4★</span>
          </div>
          <div className="rating-item">
            <Circle size={15}/> <span>3★</span>
          </div>
        </div>
        <div className="rating">
          <div className="rating-item">
            <Circle size={15}/> <span>2★</span>
          </div>
          <div className="rating-item">
            <Circle size={15}/> <span>1★</span>
          </div>
        </div>
      </div>
    </div>
  );
};
