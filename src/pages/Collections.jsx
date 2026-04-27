import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./Collections.css";

export default function About() {
  const items = [
    { type: "image", src: "/collections/cars/car1.jpg", size: "item-1" },
    { type: "image", src: "/collections/cars/car2.jpg", size: "item-2" },
    { type: "image", src: "/collections/cars/car3.jpg", size: "item-3" },
    { type: "image", src: "/collections/cars/car4.jpg", size: "item-4" },

    { type: "text", text: "car events", size: "text-1" },

    { type: "image", src: "/collections/cars/car5.jpg", size: "item-5" },
    { type: "image", src: "/collections/cars/car6.jpg", size: "item-6" },

    { type: "text", text: "shot on film", size: "text-2" },

    { type: "image", src: "/collections/cars/car7.jpg", size: "item-7" },
    { type: "image", src: "/collections/cars/car8.jpg", size: "item-8" },

    { type: "image", src: "/collections/cars/car9.jpg", size: "item-9" },
    { type: "image", src: "/collections/cars/car10.jpg", size: "item-10" },
    { type: "image", src: "/collections/cars/car11.jpg", size: "item-11" },

    {
      type: "text",
      text: "shot on single reflex lens mirrorless",
      size: "text-3",
    },

    { type: "image", src: "/collections/cars/car12.jpg", size: "item-12" },
  ];

  return (
    <section className="collections-page">
      <Link to="/" className="collections__logo-link">
        <img src="/aboutme_logo.png" alt="Home" className="collections__logo" />
      </Link>

      <div className="collections__container">
        {items.map((item, index) =>
          item.type === "image" ? (
            <div
              key={index}
              className={`collections__item ${item.size}`}
            >
              <img src={item.src} alt="" />
            </div>
          ) : (
            <div
              key={index}
              className={`collections__text-card ${item.size}`}
            >
              {item.text}
            </div>
          )
        )}
      </div>

      <Footer />
    </section>
  );
}