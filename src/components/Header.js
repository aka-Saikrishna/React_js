import { useState } from "react";
import logo from "../../public/logo.png";

const Header = () => {
  const [toggleLoginLogout, setToggleLoginLogout] = useState("Login")
  return (
    <div className="header">
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={() => {
            toggleLoginLogout === "Login" ?
            setToggleLoginLogout("Logout") : setToggleLoginLogout("Login")
          }}>{toggleLoginLogout}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
