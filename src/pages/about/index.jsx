/* eslint-disable react/no-unescaped-entities */
import "./index.styles.scss";
import { Footer } from "../../layout";
import { Link } from "react-router-dom";
// import AboutImg from "../../assets/images/about-img.jpg";

export default function About() {
  return (
    <section className="container about">
      <div className="about__content">
        <div className="about__details">
          <h3 className="about__title">
            <span>Sochi - "Soh-chee"</span> <span>Meaning - God Only</span>
            <span>Origin - Igbo, Nigeria</span>
          </h3>
          <p>
            Sochi has dedicated the past 15 years to serving as a youth pastor,
            pioneering and leading various youth projects & ministries in
            Nigeria, Aberdeen, Scotland, and currently in Hampshire, England. He
            holds a Bachelor’s Degree in Religion & Philosophy from the
            University of Benin, Nigeria, and a Master's degree in Theology from
            the University of Aberdeen, Scotland. <br />
          </p>
          <p>
            {" "}
            Sochi is deeply passionate about empowering young people and guiding
            them through important life decisions. He is currently pioneering a
            youth ministry called CAS in the South of England. In his free time,
            he is focused on developing his fashion label, Silent Noise,
            mastering the acoustic guitar, and cherishing moments with loved
            ones.
          </p>
        </div>
        <div className="about__contact">
          <h3>Contact</h3>

          <p>Sochi@gmail.com</p>

          <div className="about__socials">
            <Link to="#">Instagram</Link> / <Link to="#">Twitter</Link> /{" "}
            <Link to="#">Youtube</Link>
          </div>
        </div>

        {/* <div className="about-img">
          <img src={AboutImg} alt="" />
        </div> */}
      </div>
      <Footer />
    </section>
  );
}
