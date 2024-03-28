import "./index.styles.scss";
import { StoreProduct } from "../store-product";
import SochiTee from "../../assets/images/3-SHIRT-BACK.webp";
import SochiSweatShirt from "../../assets/images/SWEATSHIRT-BACK.webp";
import SochiHoodie from "../../assets/images/HOODIE-FRONT.webp";
import SochiTote from "../../assets/images/BLACK-TOTE.webp";
import { Link } from "react-router-dom";

export const StorePreview = () => {
  return (
    <section className="store-preview">
      <div className="container">
        <div className="store-preview-images">
          <StoreProduct
            title="SOCHI TEE"
            subtitle="SHORT SLEEVE"
            price="84.99"
            image={SochiTee}
          />
          <StoreProduct
            title="SOCHI HOODIE"
            subtitle="Hoodie"
            price="£119.99"
            image={SochiHoodie}
          />
          <StoreProduct
            title="SOCHI SWEATSHIRT"
            subtitle="Sweatshirt"
            price="£99.99"
            image={SochiSweatShirt}
          />

          <StoreProduct
            title="SOCHI TOTE BAG"
            subtitle="TOTE"
            price="£35.99"
            image={SochiTote}
          />
        </div>
        <Link to="/store" className="see-more">
          See More
        </Link>
      </div>
    </section>
  );
};
