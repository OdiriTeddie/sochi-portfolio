import HeroImage from "../../assets/images/hero-img.jpg";
import "./index.styles.scss";

export const Hero = () => {
  return (
    <section>
      <div>
        <img src={HeroImage} alt="sochi" className="hero-img" />
      </div>
    </section>
  );
};
