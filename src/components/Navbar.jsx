import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

        <div className="navbar__left">
            <a href="/about">About</a>
        </div>

        <a href="/" className="navbar__center">
            <img src="/main_logo.png" alt="Logo" className="navbar__logo" />
        </a>

        <div className="navbar__right">
            <a href="/collections">Collections</a>
        </div>

    </nav>
  );
}