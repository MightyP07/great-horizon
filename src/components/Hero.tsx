import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const img1 = "/img-1.jpg";
const img2 = "/img-2.jpg";
const img3 = "/img-3.jpg";

const originalSlides = [img1, img2, img3];

/* CLONE FIRST AND LAST FOR INFINITE LOOP */
const slides = [
  originalSlides[originalSlides.length - 1],
  ...originalSlides,
  originalSlides[0],
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);

  const length = originalSlides.length;

  useEffect(() => {
  originalSlides.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}, []);

  /* AUTO SLIDE */
useEffect(() => {
  const slider = setInterval(() => {
    setCurrentSlide((prev) => prev + 1);
  }, 3000);

  return () => clearInterval(slider);
}, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  /* SEAMLESS LOOP RESET */
  useEffect(() => {
    if (currentSlide === slides.length - 1) {
      setTimeout(() => {
        setEnableTransition(false);
        setCurrentSlide(1);
      }, 1000);

      setTimeout(() => {
        setEnableTransition(true);
      }, 1100);
    }

    if (currentSlide === 0) {
      setTimeout(() => {
        setEnableTransition(false);
        setCurrentSlide(length);
      }, 1000);

      setTimeout(() => {
        setEnableTransition(true);
      }, 1100);
    }
  }, [currentSlide]);

  /* KEYBOARD NAVIGATION */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      }

      if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide]);

  return (
    <section className="relative w-full h-[100svh] overflow-hidden">

      {/* SLIDER TRACK */}
      <div
        className={`
          flex h-full
          ${enableTransition ? "transition-transform duration-1000 ease-in-out" : ""}
        `}
        style={{
          width: `${slides.length * 100}vw`,
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-screen h-screen flex-shrink-0"
          >
            <img
  src={slide}
  alt="banner"
  className="w-full h-full object-cover"
  loading="eager"
  decoding="async"
  style={{ willChange: "transform" }}
/>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* HERO CONTENT */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl">

          <h1
            className="
              text-white text-5xl md:text-7xl font-bold leading-tight
              animate-[fadeSlideUp_0.8s_ease-out_forwards]
            "
          >
            Hunger ends where
            <br />
            action begins.
          </h1>

          <p
            className="
              text-white/90 text-lg md:text-xl mt-6 leading-relaxed
              opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]
            "
          >
            We’re building a world where no family is left behind.
            Every contribution turns into food, support, and dignity for those who need it most.
          </p>

          {/* CTA */}
          <div
            className="
              flex items-center justify-center gap-3 mt-7 flex-wrap
              opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]
            "
          >
            <button className="bg-[#008000] hover:bg-green-700 cursor-pointer transition text-white px-6 py-3 rounded-full font-semibold">
              Get Involved
            </button>

            <button className="border border-white cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>

        </div>
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="
          absolute left-6 top-1/2 -translate-y-1/2 z-30
          w-14 h-14 rounded-full
          border border-white/40
          bg-white/10 backdrop-blur-md
          flex items-center justify-center
          text-white
          cursor-pointer
          hover:bg-white/20 hover:scale-105
          active:scale-95
          transition
        "
      >
        <ChevronLeft size={30} />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="
          absolute right-6 top-1/2 -translate-y-1/2 z-30
          w-14 h-14 rounded-full
          border border-white/40
          bg-white/10 backdrop-blur-md
          flex items-center justify-center
          text-white
          cursor-pointer
          hover:bg-white/20 hover:scale-105
          active:scale-95
          transition
        "
      >
        <ChevronRight size={30} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">

        {originalSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index + 1)}
            className={`
              w-4 h-4 rounded-full border border-white transition-all
              ${
                currentSlide === index + 1
                  ? "bg-white scale-110"
                  : "bg-white/20 hover:bg-white/40"
              }
            `}
          />
        ))}

      </div>

    </section>
  );
}

export default Hero;