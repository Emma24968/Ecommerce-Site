import { SideBar } from "./LeftSideBar";
import { SearchBar } from "../../Header/SearchBar";
import './Navigation.css'

export const Navigation = () => {
  return (
    <div className="Nav-section">
      <SideBar className='sidebar-section'/>
      <SearchBar className='searchbar-section'/>
      
    </div>
  );
};
