import cashmere from "../Assets/cashmere.jpeg";
import './List.css'

export const List = () => {
  return (
    <div>
      <div>
        <img src={cashmere} alt="" />
      </div>
      <div className="description">
        <div >
          <p>Women's Tech Short Sleeve</p>
          <p>Rating:★★★★★</p>
          <p>Available:220</p>
        </div>
        <button className="btn">+</button>
      </div>
    </div>
  );
};
