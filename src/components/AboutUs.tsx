import { motion } from "framer-motion";
import img4 from "/img-4.jpg";
import img5 from "/img-5.jpg";

function AboutUs() {
  return (
    <section className="relative w-full py-28 bg-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-100/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT - TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >

          <span className="text-green-600 font-semibold tracking-[0.25em] uppercase text-sm">
            6+ Years of Impact
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#021D05] mt-4 leading-tight">
            Little by little,
            change becomes
            unstoppable.
          </h2>

          <p className="text-gray-600 mt-7 text-lg leading-relaxed">
            We envision communities that don’t just receive aid,
            but actively participate in building sustainable food systems.
          </p>

          <p className="text-gray-600 mt-5 text-lg leading-relaxed">
            At The Great Horizon, we redistribute surplus food,
            reduce waste, and bridge logistics gaps that keep
            millions in hunger despite global abundance.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex gap-5 flex-wrap">

            <button
              className="
                px-7 py-3
                bg-green-600
                text-white
                rounded-full
                font-semibold
                hover:bg-green-700
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
              "
            >
              Learn More
            </button>

            <button
              className="
                px-7 py-3
                border border-green-600
                text-green-700
                rounded-full
                font-semibold
                hover:bg-green-50
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
              "
            >
              Contact Us
            </button>

          </div>

        </motion.div>

        {/* RIGHT - IMAGE STACK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full h-[420px] lg:h-[520px]"
        >

          {/* BACK IMAGE */}
          <img
            src={img5}
            alt="community"
            className="
              absolute
              top-0 left-10
              w-[80%] h-[85%]
              object-cover
              rounded-3xl
              shadow-xl
              rotate-[-2deg]
              transition-transform
              duration-500
              hover:rotate-0
            "
          />

          {/* FRONT IMAGE */}
          <img
            src={img4}
            alt="food distribution"
            className="
              absolute
              bottom-0 right-10
              w-[80%] h-[85%]
              object-cover
              rounded-3xl
              shadow-2xl
              border-4 border-white
              rotate-[2deg]
              transition-transform
              duration-500
              hover:rotate-0
            "
          />

        </motion.div>

      </div>
    </section>
  );
}

export default AboutUs;