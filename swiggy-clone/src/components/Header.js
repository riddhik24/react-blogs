import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div
      className="flex justify-between shadow-lg m-2 rounded-lg"
      style={{ backgroundColor: "#FAF5DF" }}
    >
      <img src={LOGO_URL} className="w-32 ml-5" />
      <ul className="flex items-center text-lg font-medium px-2">
        <li className="px-3">Online Status: {onlineStatus ? "✅" : "🛑"}</li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li className="px-3">
          <Link to={"/about"}>About Us</Link>
        </li>
        <li className="px-3">
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li className="px-3">Cart</li>
        <li className="px-3">
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
