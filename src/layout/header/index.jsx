import "./index.styles.scss";
import Logo from "../../assets/images/logo-black.png";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={Logo} className="site-logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul role="list" className="nav__menu">
          <li>
            <Link to="/collections">Store</Link>
          </li>
          <li>
            <Link to="/visuals">Visuals</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
