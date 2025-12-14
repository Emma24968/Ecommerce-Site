import cashmere from "../Assets/cashmere.jpeg";
import fleece from "../Assets/fleece joggers.webp";
import sleeve from "../Assets/Women's slim fit pants.jpeg";
import "./List.css";

const List = () => {
  return (
    <div className="list-wrapper">
      <div className="product-card">
        <img className="product-image" src={cashmere} alt="" />

        <div className="product-info">
          <div>
            <p className="info-title">Women's Tech Short Sleeve</p>
          </div>
          <div className="description">
            <div >
              <p>Rating: <span className="star">★★★★★</span> </p>
              <p>Available: 220</p>
            </div>
            <button className="btn">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
