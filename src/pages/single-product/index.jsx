import { useParams } from "react-router-dom";
import "./index.scss";
import BoardImage from "../../assets/images/board1.webp";
import BoardImage2 from "../../assets/images/board2.webp";
import BoardImage3 from "../../assets/images/board3.webp";
import { useState } from "react";

export default function SingleProduct() {
  const { productName } = useParams();
  const [activeImage, setActiveImage] = useState(0);

  const imagesArray = [BoardImage, BoardImage2, BoardImage3, BoardImage2];

  const handleDisplayImage = (index) => {
    setActiveImage(index);
  };

  return (
    <section className="product">
      <div className="container">
        <div className="product__slide">
          <div>
            <img src={imagesArray[activeImage]} alt="product" />
          </div>
          <div className="product__images">
            {imagesArray.map((image, index) => {
              return (
                <img
                  src={image}
                  alt={index}
                  key={index}
                  onClick={() => handleDisplayImage(index)}
                />
              );
            })}
          </div>
        </div>
        <div className="product__content">
          <div>
            <h2>LOGO 11 TEE</h2>
            <p>SHORT SLEEVE </p>
            <p>$35.00</p>
          </div>
          <div>
            <p>S - XL</p>
            <p>Designed in Los Angeles, CA</p> <p>Unisex</p>{" "}
            <p>
              60% combed ringspun cotton / 40% polyester sueded jersey / 4.3 oz
            </p>
          </div>
          <div>
            <p>Ships Worldwide</p>
            <p>FREE DOMESTIC SHIPPING</p>
          </div>
          <form className="product__form">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Place Order</button>
          </form>
        </div>
      </div>
    </section>
  );
}
