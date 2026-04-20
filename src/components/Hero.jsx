// Hero.jsx
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>

      <div className="hero__left">
        <h1 className="hero__title">illcomposd</h1>
        <p className="hero__text">
          Professional pukster
        </p>
      </div>

      <div className="hero__right">
        <video className="hero__video" src="/video1.mp4" autoPlay muted loop playsInline />
        <video className="hero__video" src="/video2.mp4" autoPlay muted loop playsInline />
        <video className="hero__video" src="/video3.mp4" autoPlay muted loop playsInline />
      </div>
    </section>
  );
}