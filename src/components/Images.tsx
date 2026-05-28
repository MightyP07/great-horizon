const images = [
  "/img-1.jpg",
  "/img-2.jpg",
  "/img-3.jpg",
  "/img-4.jpg",
  "/img-5.jpg",
  "/img-6.jpg",
  "/img-7.jpg",
];

function Images() {
  return (
    <section className="relative w-full py-16 md:py-28 bg-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,128,0,0.08),transparent_60%)]" />

      {/* EDGE FADES */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

      {/* TITLE */}
      <div className="text-center mb-10 md:mb-14 relative z-20 px-4">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-[#021D05]">
          Moments in motion
        </h2>

        <p className="mt-4 sm:mt-5 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Every frame reflects real communities, real work, and real change happening on the ground.
        </p>
      </div>

      {/* SCROLL WRAPPER */}
      <div className="relative">

        {/* TRACK */}
        <div
          className="
            flex w-max gap-4 sm:gap-6
            will-change-transform
            animate-scroll
            hover:[animation-play-state:paused]
          "
        >

          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="
                group relative
                h-32 sm:h-40 md:h-44
                w-56 sm:w-64 md:w-72
                flex-shrink-0
                rounded-xl sm:rounded-2xl
                overflow-hidden
                shadow-md
                transition-transform duration-500
                hover:scale-[1.03] sm:hover:scale-105
                hover:-translate-y-1 sm:hover:-translate-y-2
              "
            >

              {/* IMAGE */}
              <img
                src={img}
                alt="gallery"
                loading="lazy"
                className="
                  h-full w-full object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />

              {/* BORDER GLOW */}
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-xl sm:rounded-2xl" />

            </div>
          ))}

        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }

          .animate-scroll {
            animation: scroll 22s linear infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-scroll {
              animation: none;
            }
          }
        `}
      </style>

    </section>
  );
}

export default Images;