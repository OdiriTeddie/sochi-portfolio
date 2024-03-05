import "./index.styles.scss";
import BoardImage from "../../assets/images/board1.webp";

export const StorePreview = () => {
  return (
    <section className="store-preview container">
      <div className="store-preview-images">
        <img src={BoardImage} />
        <img src={BoardImage} />
        <img src={BoardImage} />
        <img src={BoardImage} />
      </div>
    </section>
  );
};
