import cashmere from "../Assets/cashmere.jpeg";
import fleece from "../Assets/men champions pant.jpeg";
import sleeve from "../Assets/Women's slim fit pants.jpeg";
import pants from "../Assets/cashmere.jpeg";
import "./List.css";

const List = () => {
  return (
    <div className="list-wrapper">
      <div className="product-card">
        <img className="product-image" src={fleece} alt="" />

        <div className="product-info">
          <div>
            <h6 className="info-title">Women's Tech Short Sleeve</h6>
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
      <div className="product-card">
        <img className="product-image" src={pants} alt="" />

        <div className="product-info">
          <div>
            <h6 className="info-title">Women's Tech Short Sleeve</h6>
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
      <div className="product-card">
        <img className="product-image" src={sleeve} alt="" />

        <div className="product-info">
          <div>
            <h6 className="info-title">Women's Tech Short Sleeve</h6>
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
      <div className="product-card">
        <img className="product-image" src={cashmere} alt="" />

        <div className="product-info">
          <div>
            <h6 className="info-title">Women's Tech Short Sleeve</h6>
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
