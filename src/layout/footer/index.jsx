import "./index.styles.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <form className="subscribe-form">
          <label htmlFor="email">Subscribe to our mailing list</label>
          <input type="text" />

          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
        <div className="footer-details">
          <ul className="footer-menu" role="list">
            <li> PRIVACY POLICY</li>
            <li> TERMS OF USE</li>
          </ul>

          <h4>©2024 SOCHI.</h4>
        </div>
      </div>
    </footer>
  );
};
