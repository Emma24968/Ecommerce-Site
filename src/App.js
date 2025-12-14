import { Search } from "lucide-react";
import "./App.css";
import { Navigation } from "./Components/StaticPages/Navigation/Navigation";
import { Filter } from "./Components/StaticPages/Filter/Filter";
import { SearchBar } from "./Components/Header/SearchBar";
import { Product } from "./Components/Main/Product";

function App() {
  return (
    <div>
      <SearchBar />
      <div className="main-cont">
        <aside className="sidebar">
          <Navigation />
        </aside>
        <div className="main">
          <Filter />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default App;
