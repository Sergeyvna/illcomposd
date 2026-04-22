import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY); // test
      setShow(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${show ? "navbar--visible" : ""}`}>
      <img src="/logo.png" alt="Logo" className="navbar__logo" />
      <div className="navbar__links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  );
}