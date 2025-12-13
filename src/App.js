import { Search } from "lucide-react";
import "./App.css";
import { Navigation } from "./Components/StaticPages/Navigation/Navigation";
import { Filter } from "./Components/StaticPages/Filter/Filter";
import { SearchBar } from "./Components/Header/SearchBar";

function App() {
  return (
    <div>
      <SearchBar />
<div>
<Navigation />

<Filter />
</div>
    </div>
  );
}

export default App;
