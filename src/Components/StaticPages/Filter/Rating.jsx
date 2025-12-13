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
            <CircleCheckBig size={20}/> <span>5</span>
            <Star size={20}/>
          </div>
          <div className="rating-item">
            {" "}
            <Circle size={20}/> <span>4</span>
            <Star size={20}/>
          </div>
          <div className="rating-item">
            <Circle size={20}/> <span>3</span>
            <Star size={20}/>
          </div>
        </div>
        <div className="rating">
          <div className="rating-item">
            <Circle size={20}/> <span>2</span>
            <Star size={20}/>
          </div>
          <div className="rating-item">
            <Circle size={20}/> <span>1</span>
            <Star className="gold-star" size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
};
