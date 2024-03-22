import "./index.styles.scss";
import { StoreProduct } from "../store-product";
import BoardImage from "../../assets/images/board1.webp";
import { Link } from "react-router-dom";

export const StorePreview = () => {
  return (
    <section className="store-preview">
      <div className="container">
        <div className="store-preview-images">
          <StoreProduct
            title="Dauphin Mock Neck"
            subtitle="Long Sleeve"
            price="40.00"
            image={BoardImage}
          />
          <StoreProduct
            title="Dauphin Mock Neck"
            subtitle="Long Sleeve"
            price="40.00"
            image={BoardImage}
          />
          <StoreProduct
            title="Dauphin Mock Neck"
            subtitle="Long Sleeve"
            price="40.00"
            image={BoardImage}
          />
          <StoreProduct
            title="Dauphin Mock Neck"
            subtitle="Long Sleeve"
            price="40.00"
            image={BoardImage}
          />
        </div>
        <Link to="/store" className="see-more">
          See More
        </Link>
      </div>
    </section>
  );
};
