import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [toggleLoginLogout, setToggleLoginLogout] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="nav-items">
        <ul>
        <li className="status">
  Online Status: <span className="status-circle">{onlineStatus? "🟢" : "🔴"}</span>
</li>
          <li>
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to={"/about"}>
              About Us
            </Link>
          </li>
          <li>
            <Link className="link" to={"/contactUs"}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="link" to={"/grocery"}>
              Grocery
            </Link>
          </li>
          <li>Cart</li>

          <button
            className="login"
            onClick={() => {
              toggleLoginLogout === "Login"
                ? setToggleLoginLogout("Logout")
                : setToggleLoginLogout("Login");
            }}
          >
            {toggleLoginLogout}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
