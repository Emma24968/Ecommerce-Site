import { Search } from "lucide-react";
import "./App.css";
import { SideBar } from "./Components/StaticPages/LeftSideBar";
import { SearchBar } from "./Components/StaticPages/SearchBar";

function App() {
  return (
    <div>
      <div>
        <SideBar />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
