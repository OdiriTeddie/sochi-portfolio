import HeroImage from "../../assets/images/hero-img.webp";
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
