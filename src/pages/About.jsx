import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./About.css";

export default function About() {
  return (
    <section className="about-page">

      <Link to="/" className="about__logo-link">
        <img src="/aboutme_logo.png" alt="Home" className="about__logo" />
      </Link>
      <div className="about__container">


        <div className="about__text">
          <p>
            This is where you talk about yourself, your work, your style,
            and what you do. Keep it clean and readable. Test
          </p>
        </div>


        <div className="about__image">
          <img src="/aboutme_image.png" alt="About visual" />
        </div>

      </div>


      <Footer />

    </section>
  );
}