import { motion } from "framer-motion";
import { Target, Eye, HeartHandshake } from "lucide-react";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

function Mission() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#F8FAF8]">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-200/20 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* TOP LABEL */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            inline-block
            text-[#008000]
            text-sm
            font-semibold
            tracking-[0.2em]
            uppercase
            mb-5
          "
        >
          Our Purpose
        </motion.span>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            text-4xl
            md:text-6xl
            font-bold
            leading-tight
            text-[#021D05]
            max-w-4xl
          "
        >
          Building systems that turn compassion into real-world action.
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="
            mt-7
            text-gray-600
            text-lg
            leading-relaxed
            max-w-3xl
          "
        >
          Hunger is not caused by scarcity alone. It is caused by broken
          systems, poor distribution, and lack of coordinated support.
          We exist to bridge that gap through technology, partnerships,
          and direct community action.
        </motion.p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {/* MISSION */}
          <motion.div
            custom={0}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              bg-white
              rounded-3xl
              p-8
              border border-gray-200
              shadow-sm
              hover:shadow-xl
              transition-all
              duration-300
              group
            "
          >
            <div className="
              w-14 h-14 rounded-2xl
              bg-green-100
              flex items-center justify-center
              mb-6
              group-hover:scale-110
              transition
            ">
              <Target className="text-[#008000]" size={28} />
            </div>

            <h3 className="text-2xl font-bold text-[#021D05]">
              Mission
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Deliver food support efficiently, reduce waste, and connect
              vulnerable families to reliable community-driven assistance.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            custom={1}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              bg-[#021D05]
              rounded-3xl
              p-8
              text-white
              shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <div className="
              w-14 h-14 rounded-2xl
              bg-white/10
              flex items-center justify-center
              mb-6
            ">
              <Eye className="text-green-400" size={28} />
            </div>

            <h3 className="text-2xl font-bold">
              Vision
            </h3>

            <p className="mt-4 text-white/80 leading-relaxed">
              A future where no family experiences hunger because food,
              support, and logistics flow seamlessly to those who need them.
            </p>
          </motion.div>

          {/* VALUES */}
          <motion.div
            custom={2}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              bg-white
              rounded-3xl
              p-8
              border border-gray-200
              shadow-sm
              hover:shadow-xl
              transition-all
              duration-300
              group
            "
          >
            <div className="
              w-14 h-14 rounded-2xl
              bg-green-100
              flex items-center justify-center
              mb-6
              group-hover:rotate-6
              transition
            ">
              <HeartHandshake className="text-[#008000]" size={28} />
            </div>

            <h3 className="text-2xl font-bold text-[#021D05]">
              Core Values
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Compassion, transparency, collaboration, and accountability
              guide every action we take across communities and partnerships.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Mission;