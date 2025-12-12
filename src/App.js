import { Search } from "lucide-react";
import "./App.css";
import { SideBar } from "./Components/StaticPages/Navigation/LeftSideBar";
import { SearchBar } from "./Components/StaticPages/Navigation/SearchBar";

function App() {
  return (
    <div>
      <div className="Nav-section">
        <SideBar />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
