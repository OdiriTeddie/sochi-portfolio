import Logo from "../../assets/images/logo-white.png";
import { Link } from "react-router-dom";
import "./index.styles.scss";
import { useGlobalContext } from "../../utils/context";
export const MobileHeader = () => {
  const { activeMobile, handleMobileMenu } = useGlobalContext();
  return (
    <header className={`mobile-header ${activeMobile ? "active" : ""}`}>
      <div className="header-logo">
        <Link to="/">
          <img src={Logo} className="site-logo" onClick={handleMobileMenu} />
        </Link>
      </div>
      <nav className="mobile-nav">
        <ul role="list" className="nav__menu">
          <li onClick={handleMobileMenu}>
            <Link to="/collections">Store</Link>
          </li>
          <li onClick={handleMobileMenu}>
            <Link to="/visuals">Visuals</Link>
          </li>
          <li onClick={handleMobileMenu}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
