import "./index.styles.scss";
import { Footer } from "../../layout";
import AboutImg from "../../assets/images/about-img.jpg";

export default function About() {
  return (
    <section className="container about">
      <div className="about-wrapper">
        <div>
          <div>
            <h3>Sochi</h3>
            <p>
              Our skateboards are produced with premium wood and designed, in
              collaboration, by visual artists from around the world with unique
              and various backgrounds. Our apparel is designed in house, in Los
              Angeles. Produced, manufactured & detailed with quality fabrics.
              We strive for quality, aesthetic and mixing our shared passions
              for skateboarding, design, photography & cinematography. We are
              based in Los Angeles. We come from all over.
            </p>
          </div>
          <div>
            <h3>Contact</h3>
            <div>
              SUPPORT - support@sovrn.la ART & CREATIVE DIRECTION -
              alex@sovrn.la VIDEO - ryan@sovrn.la
            </div>
            <div>Instagram / Vimeo / Tumblr Archive</div>
          </div>
        </div>
        <div className="about-img">
          <img src={AboutImg} alt="" />
        </div>
      </div>
      <Footer />
    </section>
  );
}
