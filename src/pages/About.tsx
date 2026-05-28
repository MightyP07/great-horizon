import { useEffect } from "react";
import Hero from "../components/Hero";
// import Impact from "../components/Impact";
import Leadership from "../components/Leadership";
import HungerHeroes from "../components/HungerHeroes";
import Mission from "../components/Mission";
import PressKit from "../components/PressKit";
import Footer from "../components/Footer";

function About() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      if (!el) return;

      // delay ensures DOM is painted
      requestAnimationFrame(() => {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <main className="bg-white text-black">
      <div id="hero"><Hero /></div>
      {/* <div id="impact"><Impact /></div> */}
      <div id="leadership"><Leadership /></div>
      <div id="heroes"><HungerHeroes /></div>
      <div id="mission"><Mission /></div>
      <div id="press-kit"><PressKit /></div>
      <div id="footer"><Footer /></div>
    </main>
  );
}

export default About