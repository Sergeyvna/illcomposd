import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./About.css";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <section className="about-page">

      <Navbar />

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