// Icons
import HomeIcon from "../Icons/HomeIcon";
import AddIcon from "../Icons/AddIcon";
import LogoutIcon from "../Icons/LogoutIcon";

// React Router
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-dark p-5 rounded-lg mb-5">
      <div>
        <h1 className="text-lg">ToDoPro</h1>
      </div>
      <nav>
        <ul className="flex items-center">
          <li className="flex gap-2 text-sm items-center hover:bg-darkHover transition-all duration-200 mr-3  p-2 rounded cursor-pointer">
            <HomeIcon />
            <span>Home</span>
          </li>
          <li className="flex gap-2 text-sm items-center hover:bg-darkHover transition-all duration-200 mr-3  p-2 rounded cursor-pointer">
            <AddIcon />
            <span>Add Todo</span>
          </li>
          <li className="flex gap-2 text-sm items-center hover:bg-darkHover transition-all duration-200  p-2 rounded cursor-pointer">
            <LogoutIcon />
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
