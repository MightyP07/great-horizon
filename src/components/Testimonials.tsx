import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Aisha Bello",
    role: "Community Member",
    text: "The Great Horizon has brought real relief to our community. Families now have consistent access to food support we never had before.",
  },
  {
    name: "Daniel Okafor",
    role: "Volunteer",
    text: "Volunteering here changed my perspective. It’s not just about food—it’s about restoring dignity to people.",
  },
  {
    name: "Mary Johnson",
    role: "Partner NGO",
    text: "Their logistics and reach into rural areas is impressive. They genuinely operate where most organizations stop.",
  },
  {
    name: "Samuel Adeyemi",
    role: "Local Coordinator",
    text: "Working with this team showed me how structured compassion can scale impact effectively.",
  },
  {
    name: "Grace Nnaji",
    role: "Beneficiary",
    text: "For the first time in months, my children have consistent meals. That alone changed everything for us.",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="relative w-full py-16 md:py-28 bg-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-green-100/30 blur-3xl rounded-full" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >

          <span className="text-green-600 uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">
            Testimonials
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-[#021D05] mt-3 sm:mt-4 leading-tight">
            Voices from the community.
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Real experiences from volunteers, partners, and families
            impacted by our work.
          </p>

        </motion.div>

        {/* TESTIMONIAL CARD */}
        <div className="mt-10 sm:mt-14 flex items-center justify-center min-h-[180px] sm:min-h-[220px]">

          <AnimatePresence mode="wait">

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.45 }}
              className="
                bg-white
                border border-gray-100
                shadow-lg sm:shadow-xl
                rounded-2xl sm:rounded-3xl
                p-6 sm:p-8 md:p-10
                max-w-2xl w-full
              "
            >

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed italic">
                “{current.text}”
              </p>

              <div className="mt-6 sm:mt-8">
                <p className="font-semibold text-[#021D05] text-base sm:text-lg">
                  {current.name}
                </p>

                <p className="text-green-600 text-xs sm:text-sm mt-1">
                  {current.role}
                </p>
              </div>

            </motion.div>

          </AnimatePresence>

        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">

          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                transition-all duration-300 rounded-full
                h-2 sm:h-2.5
                ${i === index ? "bg-green-600 w-6 sm:w-8" : "bg-gray-300 w-2 sm:w-2.5"}
              `}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;