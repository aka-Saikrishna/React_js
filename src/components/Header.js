import logo from "../../public/logo.png";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
export default Header;
