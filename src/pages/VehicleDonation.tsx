import { motion } from "framer-motion";
import {
  Truck,
  Bus,
  MapPinned,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";

function VehicleDonation() {
  return (
    <main className="relative min-h-screen bg-white text-black overflow-hidden pt-32 px-6">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-100 blur-3xl rounded-full opacity-40" />

      <div className="relative max-w-6xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <span className="uppercase tracking-[0.25em] text-green-600 text-sm font-semibold">
            Vehicle Donation
          </span>

          <h1 className="mt-5 text-5xl md:text-6xl font-bold text-[#021D05] leading-tight">
            Help us move
            <br />
            hope further.
          </h1>

          <p className="mt-7 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Vehicles help us collect donated food items directly from donors
            and distribute them efficiently to underserved communities.
            Every donated vehicle expands our reach and strengthens our ability
            to fight hunger at scale.
          </p>

        </motion.div>

        {/* FEATURE CARDS */}
        <div className="grid md:grid-cols-3 gap-7 mt-20">

          {/* PICKUP */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              group
              bg-white
              border border-gray-100
              rounded-3xl
              p-8
              shadow-sm
              hover:shadow-2xl
              transition-all
              duration-500
            "
          >
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
              <Truck className="text-green-600" size={28} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-[#021D05]">
              Food Pickup
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed text-sm">
              We mobilize directly to donors to collect food supplies from
              different locations quickly and efficiently.
            </p>

          </motion.div>

          {/* DISTRIBUTION */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              group
              bg-[#021D05]
              text-white
              rounded-3xl
              p-8
              shadow-xl
              relative
              overflow-hidden
            "
          >

            {/* glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/20 blur-3xl rounded-full" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                <MapPinned className="text-[#00FF7F]" size={28} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Rural Distribution
              </h3>

              <p className="mt-3 text-white/70 leading-relaxed text-sm">
                More vehicles allow us to distribute food faster to remote and
                underserved communities where support is urgently needed.
              </p>
            </div>

          </motion.div>

          {/* DONATE */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              group
              bg-white
              border border-gray-100
              rounded-3xl
              p-8
              shadow-sm
              hover:shadow-2xl
              transition-all
              duration-500
            "
          >
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
              <Bus className="text-green-600" size={28} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-[#021D05]">
              Donate a Vehicle
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed text-sm">
              If you have a spare car, van, or bus, your donation can directly
              support food collection and outreach operations.
            </p>

          </motion.div>

        </div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-24
            rounded-[2rem]
            bg-gradient-to-r
            from-[#021D05]
            to-[#0B3810]
            p-10 md:p-14
            text-center
            text-white
            relative
            overflow-hidden
          "
        >

          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,127,0.18),transparent_40%)]" />

          <div className="relative">

            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                <HeartHandshake className="text-[#00FF7F]" size={30} />
              </div>
            </div>

            <h2 className="mt-6 text-3xl md:text-4xl font-bold">
              Your vehicle can carry more than cargo.
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto leading-relaxed">
              It can carry food, support, dignity, and hope to people who need
              it most.
            </p>

            <button
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                px-7
                py-3
                rounded-full
                bg-[#00FF7F]
                text-[#021D05]
                font-semibold
                hover:scale-105
                transition
                cursor-pointer
              "
            >
              Donate a Vehicle
              <ArrowRight size={18} />
            </button>

          </div>

        </motion.div>

      </div>
    </main>
  );
}

export default VehicleDonation;