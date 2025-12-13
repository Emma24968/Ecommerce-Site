import "./Category.css";
export const Category = () => {
  return (
    <div>
      <h3>Category</h3>
      <div className="list-container">
        <div className="list">
          <button>All Items</button>
          <button>On Sale</button>
        </div>
        <div className="list">
          <button>Featured</button>
          <button>Best Seller</button>
        </div>
        <div className="list">
          <button>New Items</button>
          <button>On Sale</button>
        </div>
      </div>
    </div>
  );
};
