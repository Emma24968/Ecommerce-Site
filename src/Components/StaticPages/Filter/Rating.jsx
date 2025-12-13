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
            <CircleCheckBig /> <span>5</span>
            <Star />
          </div>
          <div className="rating-item">
            {" "}
            <Circle /> <span>4</span>
            <Star />
          </div>
          <div className="rating-item">
            <Circle /> <span>3</span>
            <Star />
          </div>
        </div>
        <div className="rating">
          <div className="rating-item">
            <Circle /> <span>2</span>
            <Star />
          </div>
          <div className="rating-item">
            <Circle /> <span>1</span>
            <Star className="gold-star"/>
          </div>
        </div>
      </div>
    </div>
  );
};
