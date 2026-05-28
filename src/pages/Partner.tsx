import { motion } from "framer-motion";
import {
  Building2,
  Church,
  Users,
  Music2,
  PhoneCall,
  Handshake,
} from "lucide-react";

const partners = [
  {
    icon: Building2,
    title: "Corporate Partners",
    desc: "Organizations supporting scalable food distribution and agricultural initiatives.",
  },
  {
    icon: Church,
    title: "Faith Communities",
    desc: "Churches and mosques collaborating to reach vulnerable families.",
  },
  {
    icon: Users,
    title: "Community Groups",
    desc: "Clubs and associations contributing local reach and coordination.",
  },
  {
    icon: Music2,
    title: "Creators & Celebrities",
    desc: "Entertainers and influencers amplifying awareness and impact.",
  },
];

function Partner() {
  return (
    <main className="relative min-h-screen bg-white pt-32 px-6 overflow-hidden">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[850px] bg-green-100 blur-3xl opacity-40 rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="uppercase tracking-[0.25em] text-green-600 text-sm font-semibold">
            Partnerships
          </span>

          <h1 className="mt-5 text-5xl md:text-6xl font-bold text-[#021D05] leading-tight">
            No single system
            <br />
            solves hunger alone.
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We collaborate with organizations, institutions, and individuals
            committed to reducing hunger and strengthening food systems.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {partners.map((p, i) => {
            const Icon = p.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="
                  group
                  bg-white
                  border border-gray-100
                  rounded-3xl
                  p-7
                  shadow-sm
                  hover:bg-[#021D05]
                  hover:text-white
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  relative
                  overflow-hidden
                "
              >

                {/* glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/0 group-hover:bg-green-500/20 blur-3xl rounded-full transition-all duration-500" />

                <div className="relative">

                  <div className="
                    w-14 h-14 rounded-2xl
                    bg-green-100
                    group-hover:bg-white/10
                    flex items-center justify-center
                    transition-all duration-500
                  ">
                    <Icon className="text-green-600 group-hover:text-[#00FF7F]" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-[#021D05] group-hover:text-white transition">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 group-hover:text-white/70 leading-relaxed transition">
                    {p.desc}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-20
            rounded-3xl
            bg-gradient-to-r
            from-[#021D05]
            to-[#0B3810]
            text-white
            p-12
            text-center
            relative
            overflow-hidden
          "
        >

          <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full" />

          <div className="relative">

            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <Handshake className="text-[#00FF7F]" size={28} />
              </div>
            </div>

            <h2 className="mt-6 text-3xl md:text-4xl font-bold">
              Let’s build impact together.
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto leading-relaxed">
              If you’re an organization, institution, or individual ready to contribute,
              we’re open to collaboration at every scale.
            </p>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">

              <div className="flex items-center gap-2 text-[#00FF7F] font-semibold">
                <PhoneCall size={18} />
                08168955738
              </div>

              <button className="px-7 py-3 bg-[#00FF7F] text-[#021D05] font-semibold rounded-full hover:scale-105 transition">
                Become a Partner
              </button>

            </div>

          </div>

        </motion.div>

      </div>
    </main>
  );
}

export default Partner;