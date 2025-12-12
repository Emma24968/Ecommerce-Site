import { Bell, CircleUserRound, MessageSquare, Search } from "lucide-react";

export const SearchBar = (props) => {
  return (
    // I added a classname using the spread method
    <div {...props}>
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
