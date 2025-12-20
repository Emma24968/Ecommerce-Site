import { Bell, CircleUserRound, MessageSquare, Search } from "lucide-react";
import './SearchBar.css'
import myLogo from '../Main/Assets/logo.png';
export const SearchBar = (props) => {
  return (
    // I added a classname using the spread method
    <div className="searchbar-section"{...props}>
      <div></div>
      <img src={myLogo} width={'50px'} alt="" />
      <div className="search-box">
        <div className="search-container">
          <input type="text" placeholder="search something" />
          <p id="line">|</p>
          <Search />
        </div>
      </div>
      <div className="user">
        <p>
          <Bell />
        </p>
        <p>
          <MessageSquare />
        </p>
        <p>
          <CircleUserRound />
        </p>
      </div>
    </div>
  );
};
