import { motion, type Variants } from "framer-motion";
import {
  Download,
  FileText,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";

const resources = [
  {
    icon: Download,
    title: "Logo Pack",
    desc: "Official logos, transparent assets, and brand variations for digital and print use.",
  },
  {
    icon: FileText,
    title: "Media Guidelines",
    desc: "Typography, spacing, color usage, and communication standards for partners and press.",
  },
  {
    icon: BadgeCheck,
    title: "Organization Overview",
    desc: "Downloadable PDF covering mission, programs, leadership, and operational impact.",
  },
];

const cardVariant : Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

function PressKit() {
  return (
    <section className="relative py-28 px-6 bg-[#F8FAF8] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/40 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* TOP AREA */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <span
              className="
                inline-block
                text-[#008000]
                uppercase
                tracking-[0.25em]
                text-sm
                font-semibold
                mb-5
              "
            >
              Media & Resources
            </span>

            <h2
              className="
                text-4xl
                md:text-6xl
                font-bold
                leading-tight
                text-[#021D05]
              "
            >
              Everything press
              partners need,
              all in one place.
            </h2>

            <p
              className="
                mt-7
                text-gray-600
                text-lg
                leading-relaxed
                max-w-2xl
              "
            >
              Access official media resources, downloadable brand assets,
              organizational information, and communication guidelines
              designed for journalists, sponsors, and partners.
            </p>

          </motion.div>

          {/* RIGHT FEATURE PANEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative
              bg-[#021D05]
              rounded-[2rem]
              p-10
              overflow-hidden
              shadow-2xl
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute
                -top-10
                -right-10
                w-40
                h-40
                bg-green-400/20
                rounded-full
                blur-3xl
              "
            />

            <p className="text-green-400 uppercase tracking-[0.2em] text-sm font-semibold">
              Media Ready
            </p>

            <h3 className="text-4xl font-bold text-white mt-5 leading-tight">
              Professional assets.
              <br />
              Clear communication.
            </h3>

            <p className="mt-6 text-white/70 leading-relaxed">
              Maintain consistent messaging and branding across
              campaigns, publications, partnerships, and public outreach.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>
                <h4 className="text-4xl font-bold text-white">
                  15+
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  Downloadable Assets
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-white">
                  24/7
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  Resource Access
                </p>
              </div>

            </div>

          </motion.div>

        </div>

        {/* RESOURCE GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">

          {resources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <motion.div
                key={resource.title}
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="
                  group
                  bg-white
                  rounded-3xl
                  p-8
                  border border-gray-200
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-green-100
                    flex
                    items-center
                    justify-center
                    mb-7
                    group-hover:scale-110
                    transition
                  "
                >
                  <Icon
                    size={30}
                    className="text-[#008000]"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-[#021D05]">
                  {resource.title}
                </h3>

                {/* DESC */}
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {resource.desc}
                </p>

                {/* ACTION */}
                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    text-[#008000]
                    font-semibold
                    opacity-0
                    translate-y-3
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-300
                  "
                >
                  Access Resource
                  <ArrowUpRight size={18} />
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default PressKit;