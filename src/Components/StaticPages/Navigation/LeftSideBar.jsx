import { Codesandbox, TrendingUp, MessageSquare, Users, Settings, Info, LogOut } from "lucide-react";
// import './Navigation.css'

export const SideBar = (props) => {
  return (
            // I added a classname using the spread method

    <div {...props} className="sidebar">
      <p>
        <Codesandbox />
      </p>
      <h1>jdshk</h1>
      <h1 className="text-3xl font-bold text-blue-600">
  Tailwind is working
</h1>

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
