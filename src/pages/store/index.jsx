import SochiTee from "../../assets/images/3-SHIRT-BACK.webp";
import SochiSweatShirt from "../../assets/images/SWEATSHIRT-BACK.webp";
import SochiHoodie from "../../assets/images/HOODIE-FRONT.webp";
import SochiHoodieKids from "../../assets/images/HOODIE-BACK-KIDS.webp";
import SochiSweatShirtKids from "../../assets/images/SWEATSHIRT-BACK-KIDS.webp";
import SochiTeeKids from "../../assets/images/SHIRT-BACK-KIDS.webp";
import SochiTote from "../../assets/images/BLACK-TOTE.webp";

import { StoreProduct } from "../../components";
import "./index.scss";

export default function Store() {
  return (
    <section className="container">
      <div className="store-header">
        <h2>Store</h2>
        <p>Free Domestic Shipping</p>
      </div>
      <div className="store-list">
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
          title="SOCHI HOODIE - KIDS"
          subtitle="Hoodie"
          price="£89.99"
          image={SochiHoodieKids}
        />
        <StoreProduct
          title="SOCHI SWEATSHIRT - KIDS"
          subtitle="Sweatshirt"
          price="£79.99"
          image={SochiSweatShirtKids}
        />
        <StoreProduct
          title="SOCHI TEE - KIDS"
          subtitle="Short Sleeve"
          price="£69.99"
          image={SochiTeeKids}
        />
        <StoreProduct
          title="SOCHI TOTE BAG"
          subtitle="TOTE"
          price="£35.99"
          image={SochiTote}
        />
      </div>
    </section>
  );
}
