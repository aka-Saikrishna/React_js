import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";

const Header = () => {
  const [toggleLoginLogout, setToggleLoginLogout] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
            
            </li>
          <li>
          <Link to={"/about"}>About Us</Link>
            </li>
          <li>
          <Link to={"/contactUs"}>Contact Us</Link>
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
