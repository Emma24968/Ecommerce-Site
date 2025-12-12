import { SideBar } from "./LeftSideBar";
import { SearchBar } from "./SearchBar";
import './Navigation.css'

export const Navigation = () => {
  return (
    <div className="Nav-section">
      <SideBar />
      <SearchBar />
    </div>
  );
};
