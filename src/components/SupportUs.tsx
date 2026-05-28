import { motion, type Variants } from "framer-motion";
import {
  Heart,
  HandHelping,
  Users,
  HandHeart,
  ArrowUpRight,
} from "lucide-react";

const supportItems = [
  {
    icon: Heart,
    title: "Give a Donation",
    desc: "Your support helps provide food, relief resources, and stability to vulnerable families.",
    action: "Donate Now",
  },
  {
    icon: HandHelping,
    title: "Volunteer Now",
    desc: "Join outreach teams and contribute directly to real community impact on the ground.",
    action: "Join the Mission",
  },
  {
    icon: Users,
    title: "Partner With Us",
    desc: "Collaborate with us to expand distribution systems and reach more communities.",
    action: "Become a Partner",
  },
  {
    icon: HandHeart,
    title: "Pray for Us",
    desc: "Your prayers strengthen our vision, our volunteers, and every family we serve.",
    action: "Stand With Us",
  },
];

const cardVariant : Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

function SupportUs() {
  return (
    <section className="relative w-full py-16 md:py-28 px-4 sm:px-6 bg-[#F8FAF8] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-green-100/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-18"
        >

          <span className="inline-block text-[#008000] uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
            Support The Mission
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-[#021D05] leading-tight max-w-4xl mx-auto">
            Every contribution creates a ripple of impact.
          </h2>

          <p className="text-gray-600 mt-5 md:mt-7 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-2 sm:px-0">
            Whether through donations, volunteering, partnerships,
            or prayer, your support helps deliver hope, dignity,
            and nourishment to families who need it most.
          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">

          {supportItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="
                  relative group overflow-hidden
                  rounded-2xl sm:rounded-[2rem]
                  border border-gray-200
                  bg-white
                  p-5 sm:p-6 md:p-8
                  transition-all duration-500
                  hover:-translate-y-2 md:hover:-translate-y-3
                  hover:shadow-2xl
                  hover:border-green-500/20
                "
              >

                {/* GLOW */}
                <div className="
                  absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32
                  bg-green-100 rounded-full blur-3xl
                  opacity-0 group-hover:opacity-100 transition duration-500
                " />

                {/* ICON */}
                <div className="
                  relative w-14 sm:w-16 h-14 sm:h-16
                  rounded-2xl bg-green-100
                  flex items-center justify-center
                  transition-all duration-500
                  group-hover:bg-[#008000]
                  group-hover:scale-105 sm:group-hover:scale-110
                ">
                  <Icon
                    className="text-[#008000] group-hover:text-white transition-colors duration-500"
                    size={26}
                  />
                </div>

                {/* TITLE */}
                <h3 className="relative mt-5 sm:mt-7 text-xl sm:text-2xl font-bold text-[#021D05]">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative text-gray-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>

                {/* ACTION */}
                <div className="
                  relative mt-6 sm:mt-8 flex items-center gap-2
                  text-[#008000] font-semibold
                  transition-all duration-300
                  group-hover:gap-3 sm:group-hover:gap-4
                ">
                  {item.action}

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </div>

                {/* BOTTOM LINE */}
                <div className="
                  absolute bottom-0 left-0 h-1 w-0 bg-[#008000]
                  transition-all duration-500 group-hover:w-full
                " />

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default SupportUs;