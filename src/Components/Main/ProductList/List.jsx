import cashmere from "../Assets/cashmere.jpeg";
import fleece from "../Assets/fleece joggers.webp";
import sleeve from "../Assets/tech sleeve.jpeg";
import "./List.css";

const List = () => {
  return (
    <div>
      <div>
        <div>
          <img src={cashmere} alt="" />
        </div>
        <div className="description">
          <div>
            <p>Women's Tech Short Sleeve</p>
            <p>Rating: ★★★★★</p>
            <p>Available: 220</p>
          </div>
          <button className="btn">+</button>
        </div>
      </div>

      <div>
        <div>
          <img src={fleece} alt="" width={200} />
        </div>
        <div className="description">
          <div>
            <p>Women's Tech Short Sleeve</p>
            <p>Rating: ★★★★★</p>
            <p>Available: 220</p>
          </div>
          <button className="btn">+</button>
        </div>
      </div>

      <div>
        <div>
          <img src={sleeve} alt="" />
        </div>
        <div className="description">
          <div>
            <p>Women's Tech Short Sleeve</p>
            <p>Rating: ★★★★★</p>
            <p>Available: 220</p>
          </div>
          <button className="btn">+</button>
        </div>
      </div>
    </div>
  );
};

export default List;
