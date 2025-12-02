import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <img src={LOGO_URL} />
      <ul>
        <li>Online Status: {onlineStatus ? "✅" : "🛑"}</li>
        <li>
          <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contact
          </Link>
        </li>
        <li>Cart</li>
        <button
          className="login-btn"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
