import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  Users,
  ArrowUpRight,
} from "lucide-react";

const leaders = [
  {
    icon: ShieldCheck,
    role: "Executive Director",
    title: "Operations & Strategy",
    description:
      "Oversees organizational growth, strategic partnerships, and long-term food security initiatives.",
  },
  {
    icon: Truck,
    role: "Logistics Lead",
    title: "Distribution Systems",
    description:
      "Coordinates transportation, warehousing, and rapid delivery systems across multiple regions.",
  },
  {
    icon: Users,
    role: "Community Lead",
    title: "Outreach & Volunteers",
    description:
      "Builds volunteer networks and strengthens relationships with underserved communities.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
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

function Leadership() {
  return (
    <section className="relative py-28 px-6 bg-white overflow-hidden">

      {/* BACKGROUND DECOR */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-green-100/40 blur-3xl rounded-full" />

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
          Leadership Team
        </motion.span>

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-8
          "
        >
          <div>
            <h2
              className="
                text-4xl
                md:text-6xl
                font-bold
                leading-tight
                text-[#021D05]
                max-w-3xl
              "
            >
              The people driving
              real impact behind
              the scenes.
            </h2>

            <p
              className="
                mt-6
                text-gray-600
                text-lg
                leading-relaxed
                max-w-2xl
              "
            >
              Our leadership combines operational discipline,
              humanitarian coordination, and community-centered
              execution to ensure every initiative creates measurable impact.
            </p>
          </div>

          {/* SIDE STATS */}
          <div className="
            bg-[#021D05]
            text-white
            rounded-3xl
            p-6
            min-w-[220px]
            shadow-xl
          ">
            <p className="text-sm text-white/70 uppercase tracking-widest">
              Active Reach
            </p>

            <h3 className="text-5xl font-bold mt-3">
              25+
            </h3>

            <p className="mt-2 text-white/80 text-sm">
              Communities supported through coordinated food distribution.
            </p>
          </div>
        </motion.div>

        {/* LEADERS GRID */}
        <div className="grid md:grid-cols-3 gap-7 mt-20">

          {leaders.map((leader, index) => {
            const Icon = leader.icon;

            return (
              <motion.div
                key={leader.role}
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="
                  relative
                  group
                  bg-[#F8FAF8]
                  rounded-3xl
                  p-8
                  border border-gray-200
                  overflow-hidden
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "
              >

                {/* TOP ICON */}
                <div
                  className="
                    w-16 h-16 rounded-2xl
                    bg-green-100
                    flex items-center justify-center
                    mb-7
                    group-hover:scale-110
                    transition
                  "
                >
                  <Icon size={30} className="text-[#008000]" />
                </div>

                {/* ROLE */}
                <h3 className="text-2xl font-bold text-[#021D05]">
                  {leader.role}
                </h3>

                {/* TITLE */}
                <p className="mt-2 text-[#008000] font-medium">
                  {leader.title}
                </p>

                {/* DESC */}
                <p className="mt-5 text-gray-600 leading-relaxed">
                  {leader.description}
                </p>

                {/* HOVER BUTTON */}
                <div
                  className="
                    mt-8
                    flex items-center gap-2
                    text-sm
                    font-semibold
                    text-[#021D05]
                    opacity-0
                    translate-y-3
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-300
                  "
                >
                  Learn More
                  <ArrowUpRight size={18} />
                </div>

                {/* HOVER GLOW */}
                <div
                  className="
                    absolute
                    -bottom-16
                    -right-16
                    w-40
                    h-40
                    bg-green-200/20
                    rounded-full
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                />

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Leadership;