import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./Collections.css";
import Navbar from "../components/Navbar";

export default function About() {
  const carItems = [
    { type: "image", src: "/collections/cars/car1.jpg", size: "item-1" },
    { type: "image", src: "/collections/cars/car2.jpg", size: "item-2" },
    { type: "image", src: "/collections/cars/car3.jpg", size: "item-3" },
    { type: "image", src: "/collections/cars/car4.jpg", size: "item-4" },

    { type: "image", src: "/collections/cars/car_events.png", size: "text-1" },

    { type: "image", src: "/collections/cars/car5.jpg", size: "item-5" },
    { type: "image", src: "/collections/cars/car6.jpg", size: "item-6" },

    { type: "text", text: "shot on film", size: "text-2" },

    { type: "image", src: "/collections/cars/car7.jpg", size: "item-7" },
    { type: "image", src: "/collections/cars/car8.jpg", size: "item-8" },

    { type: "image", src: "/collections/cars/car9.jpg", size: "item-9" },
    { type: "image", src: "/collections/cars/car10.jpg", size: "item-10" },
    { type: "image", src: "/collections/cars/car11.jpg", size: "item-11" },

    { type: "text", text: "shot on single reflex lens mirrorless camera", size: "text-3"},

    { type: "image", src: "/collections/cars/car12.jpg", size: "item-12" },
  ];

    const cityItems = [
    { type: "image", src: "/collections/cities/city1.jpg", size: "city-item-1" },
    { type: "image", src: "/collections/cities/city2.jpg", size: "city-item-2" },
    { type: "image", src: "/collections/cities/city3.jpg", size: "city-item-3" },
    { type: "image", src: "/collections/cities/city4.jpg", size: "city-item-4" },

    
    { type: "image", src: "/collections/cities/city_walks.png", size: "city-text-1" },

    { type: "image", src: "/collections/cities/city5.jpg", size: "city-item-5" },
    { type: "image", src: "/collections/cities/city6.jpg", size: "city-item-6" },

    { type: "text", text: "shot on film", size: "city-text-2" },

    { type: "image", src: "/collections/cities/city7.jpg", size: "city-item-7" },
    { type: "image", src: "/collections/cities/city8.jpg", size: "city-item-8" },

    { type: "image", src: "/collections/cities/city9.jpg", size: "city-item-9" },
    { type: "image", src: "/collections/cities/city10.jpg", size: "city-item-10" },
    { type: "image", src: "/collections/cities/city11.jpg", size: "city-item-11" },

    {
      type: "text",
      text: "shot on single reflex lens mirrorless camera",
      size: "city-text-3",
    },

    { type: "image", src: "/collections/cities/city12.jpg", size: "city-item-12" },
    { type: "image", src: "/collections/cities/city13.jpg", size: "city-item-13" },
    { type: "image", src: "/collections/cities/city14.jpg", size: "city-item-14" },
    { type: "image", src: "/collections/cities/city15.jpg", size: "city-item-15" },
  ];

    const culinaryItems = [
    { type: "image", src: "/collections/culinary/culinary1.jpg", size: "culinary-item-1" },
    { type: "image", src: "/collections/culinary/culinary2.jpg", size: "culinary-item-2" },
    { type: "image", src: "/collections/culinary/culinary3.jpg", size: "culinary-item-3" },
    { type: "image", src: "/collections/culinary/culinary4.jpg", size: "culinary-item-4" },

    { type: "text", text: "culinary imaging", size: "culinary-text-1" },

    { type: "image", src: "/collections/culinary/culinary5.jpg", size: "culinary-item-5" },
    { type: "image", src: "/collections/culinary/culinary6.jpg", size: "culinary-item-6" },

    { type: "image", src: "/collections/culinary/culinary7.jpg", size: "culinary-item-7" },
    { type: "image", src: "/collections/culinary/culinary8.jpg", size: "culinary-item-8" },

    { type: "image", src: "/collections/culinary/culinary9.jpg", size: "culinary-item-9" },
    { type: "image", src: "/collections/culinary/culinary10.jpg", size: "culinary-item-10" },
    { type: "image", src: "/collections/culinary/culinary11.jpg", size: "culinary-item-11" },
    { type: "image", src: "/collections/culinary/culinary12.jpg", size: "culinary-item-12" },
  ];

    const photoshotItems = [
    { type: "image", src: "/collections/photoshot/ph1.jpg", size: "photoshot-item-1" },
    { type: "image", src: "/collections/photoshot/ph2.jpg", size: "photoshot-item-2" },
    { type: "image", src: "/collections/photoshot/ph3.jpg", size: "photoshot-item-3" },
    { type: "image", src: "/collections/photoshot/ph4.jpg", size: "photoshot-item-4" },

    { type: "text", text: "photoshot samples", size: "photoshot-text-1" },
  ];


  return (
    
    <section className="collections-page">

      <Navbar />

      <div className="collections__container">
        {carItems.map((item, index) =>
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

      <div className="collections__container2">
        {cityItems.map((item, index) =>
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

      <div className="collections__container3">
        {culinaryItems.map((item, index) =>
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

      <div className="collections__container4">
        {photoshotItems.map((item, index) =>
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