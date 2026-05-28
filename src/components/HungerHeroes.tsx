import { motion } from "framer-motion";
import {
  HeartHandshake,
  Truck,
  Users,
  MapPinned,
  ArrowRight,
} from "lucide-react";

const heroes = [
  {
    icon: Truck,
    title: "Field Volunteers",
    desc: "Coordinate food deliveries, logistics, and emergency outreach in underserved regions.",
  },
  {
    icon: MapPinned,
    title: "Community Partners",
    desc: "Provide local access points, regional coordination, and trusted community support.",
  },
  {
    icon: Users,
    title: "Youth Advocates",
    desc: "Mobilize awareness campaigns and inspire local participation across neighborhoods.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
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

function HungerHeroes() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#021D05]">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* TOP SECTION */}
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
                text-green-400
                uppercase
                tracking-[0.25em]
                text-sm
                font-semibold
                mb-5
              "
            >
              Hunger Heroes
            </span>

            <h2
              className="
                text-4xl
                md:text-6xl
                font-bold
                text-white
                leading-tight
              "
            >
              The people carrying
              hope into forgotten
              communities.
            </h2>

            <p
              className="
                mt-7
                text-white/75
                text-lg
                leading-relaxed
                max-w-2xl
              "
            >
              Behind every successful food delivery is a network of
              volunteers, coordinators, and local partners working tirelessly
              to ensure no family is left behind.
            </p>

            {/* CTA */}
            <button
              className="
                mt-10
                bg-green-500
                hover:bg-green-400
                text-white
                px-7
                py-4
                rounded-full
                font-semibold
                flex
                items-center
                gap-2
                transition-all
                duration-300
                hover:gap-4
                cursor-pointer
              "
            >
              Become a Hero
              <ArrowRight size={18} />
            </button>

          </motion.div>

          {/* RIGHT FEATURE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              rounded-[2rem]
              p-10
              overflow-hidden
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute
                top-0
                right-0
                w-40
                h-40
                bg-green-400/20
                blur-3xl
                rounded-full
              "
            />

            <div
              className="
                w-20
                h-20
                rounded-3xl
                bg-green-500/20
                flex
                items-center
                justify-center
                mb-8
              "
            >
              <HeartHandshake
                size={40}
                className="text-green-400"
              />
            </div>

            <h3 className="text-3xl font-bold text-white leading-snug">
              Thousands of meals.
              <br />
              One united mission.
            </h3>

            <p className="mt-6 text-white/70 leading-relaxed">
              Every volunteer hour contributes directly to food access,
              dignity restoration, and stronger local communities.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>
                <h4 className="text-4xl font-bold text-white">
                  8K+
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  Meals Delivered
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-white">
                  320+
                </h4>

                <p className="mt-2 text-sm text-white/60">
                  Active Volunteers
                </p>
              </div>

            </div>

          </motion.div>

        </div>

        {/* HERO GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">

          {heroes.map((hero, index) => {
            const Icon = hero.icon;

            return (
              <motion.div
                key={hero.title}
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="
                  group
                  bg-white/5
                  border border-white/10
                  rounded-3xl
                  p-8
                  hover:bg-white/10
                  transition-all
                  duration-500
                "
              >

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-green-500/10
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:scale-110
                    transition
                  "
                >
                  <Icon
                    size={30}
                    className="text-green-400"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {hero.title}
                </h3>

                <p className="mt-4 text-white/70 leading-relaxed">
                  {hero.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default HungerHeroes;