import { Link } from "react-router-dom";
import "./index.scss";
// import BoardImage from "../../assets/images/board1.webp";

export const StoreProduct = ({ title, subtitle, price, image }) => {
  return (
    <article className="store-product">
      <Link to={`/collections/12`}>
        <img src={image} />
      </Link>
      <div className="store-product__details">
        <Link to="#" className="store-product__content">
          <h4 className="store-product__title"> {title} </h4>
          <p className="store-product__subtitle"> {subtitle} </p>
        </Link>
        <p>£{price} </p>
      </div>
    </article>
  );
};
