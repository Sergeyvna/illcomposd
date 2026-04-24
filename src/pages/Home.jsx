import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutCollections from "../components/AboutCollections";
import "./Home.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="home-bg">
        <Hero />
        <AboutCollections />
        <Footer />
      </main>
    </>
  );
}