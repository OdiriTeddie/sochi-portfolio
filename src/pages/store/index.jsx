import BoardImage from "../../assets/images/board1.webp";
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
    </section>
  );
}
