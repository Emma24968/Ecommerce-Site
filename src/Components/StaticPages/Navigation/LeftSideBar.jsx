import { Codesandbox, TrendingUp, MessageSquare, Users, Settings, Info, LogOut } from "lucide-react";
// import './Navigation.css'

export const SideBar = (props) => {
  return (
            // I added a classname using the spread method

    <div {...props} className="sidebar">
      <p>
        <Codesandbox />
      </p>
      <p>
        <TrendingUp />
      </p>
      <p>
        <MessageSquare />
      </p>
      <p>
        <Users />
      </p>
      <p>
        <Settings />
      </p>
      <p>
        <Info />
      </p>
      <p><LogOut /></p>
    </div>
  );
};
