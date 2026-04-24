// Hero.jsx
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero__left">
        <img 
            src="/logo.png" 
            alt="illcomposd" 
            className="hero__logo" 
        />
      </div>

      <div className="hero__right">
        <video className="hero__video" src="/video1.mp4" autoPlay muted loop playsInline />
        <video className="hero__video" src="/video2.mp4" autoPlay muted loop playsInline />
        <video className="hero__video" src="/video3.mp4" autoPlay muted loop playsInline />
      </div>
    </section>
  );
}