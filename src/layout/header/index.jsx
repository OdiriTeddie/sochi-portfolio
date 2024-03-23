import "./index.styles.scss";
import Logo from "../../assets/images/logo-white.png";
import { IoMenuSharp } from "react-icons/io5";

import { Link } from "react-router-dom";
import { useGlobalContext } from "../../utils/context";
export const Header = () => {
  const { activeMobile, handleMobileMenu } = useGlobalContext();
  return (
    <div>
      <header className={`header ${activeMobile ? "active" : ""}`}>
        <IoMenuSharp className="mobile-menu" onClick={handleMobileMenu} />
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
    </div>
  );
};
