import { Link } from "react-router-dom";
import "./AboutCollections.css";

export default function AboutCollections() {
  return (
    <section className="about-collections">
      <div className="about-collections__container">

        <a href="/collections" className="about-collections__item">
          <img src="/collections.png" alt="Collections" />
        </a>

        <a href="/about" className="about-collections__item">
          <img src="/aboutme.png" alt="About Me" />
        </a>

      </div>
    </section>
  );
}