import BoardImage from "../../assets/images/board1.webp";

export default function Store() {
  return (
    <section className="container">
      <h2>Store</h2>
      <div className="store-preview-images">
        <img src={BoardImage} />
        <img src={BoardImage} />
        <img src={BoardImage} />
        <img src={BoardImage} />
      </div>
    </section>
  );
}
