import "./index.styles.scss";
import Sochi1 from "../../assets/images/sochi1.jpg";
import Sochi3 from "../../assets/images/sochi3.jpg";
import Sochi5 from "../../assets/images/sochi5.jpg";
import Sochi2 from "../../assets/images/about-img.jpg";

export default function Visuals() {
  return (
    <section className="container visuals">
      <h2>Visuals</h2>
      <div className="visual-wrapper">
        <img src={Sochi1} alt="" />
        <img src={Sochi3} alt="" />
        <img src={Sochi5} alt="" />
        <img src={Sochi2} alt="" />
      </div>
    </section>
  );
}
