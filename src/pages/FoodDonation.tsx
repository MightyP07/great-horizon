import { motion } from "framer-motion";
import {
  Wheat,
  Fish,
  Milk,
  CookingPot,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";

function FoodDonation() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden pt-32 px-6">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-green-100 blur-3xl opacity-40 rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <span className="uppercase tracking-[0.25em] text-green-600 text-sm font-semibold">
            Food Donation
          </span>

          <h1 className="mt-5 text-5xl md:text-6xl font-bold text-[#021D05] leading-tight">
            A shared meal
            <br />
            can change everything.
          </h1>

          <p className="mt-7 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Donate food items to support families and communities facing hunger.
            Every contribution — whether perishable or non-perishable —
            helps provide nourishment, dignity, and hope to people who need it most.
          </p>

        </motion.div>

        {/* DONATION CATEGORIES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">

          {/* GRAINS */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              group
              bg-white
              border border-gray-100
              rounded-3xl
              p-8
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

            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/0 group-hover:bg-green-500/20 blur-3xl rounded-full transition-all duration-500" />

            <div className="relative">

              <div className="
                w-14 h-14 rounded-2xl
                bg-green-100
                group-hover:bg-white/10
                flex items-center justify-center
                transition-all duration-500
              ">
                <Wheat
                  className="text-green-600 group-hover:text-[#00FF7F] transition-colors duration-500"
                  size={28}
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#021D05] group-hover:text-white transition-colors duration-500">
                Grains & Staples
              </h3>

              <p className="mt-3 text-gray-600 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-500">
                Rice, beans, garri, spaghetti, macaroni, cereals, and other staple foods.
              </p>

            </div>

          </motion.div>

          {/* PROTEINS */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              group
              bg-white
              border border-gray-100
              rounded-3xl
              p-8
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

            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/0 group-hover:bg-green-500/20 blur-3xl rounded-full transition-all duration-500" />

            <div className="relative">

              <div className="
                w-14 h-14 rounded-2xl
                bg-green-100
                group-hover:bg-white/10
                flex items-center justify-center
                transition-all duration-500
              ">
                <Fish
                  className="text-green-600 group-hover:text-[#00FF7F] transition-colors duration-500"
                  size={28}
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#021D05] group-hover:text-white transition-colors duration-500">
                Protein Supplies
              </h3>

              <p className="mt-3 text-gray-600 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-500">
                Fish, chicken, and protein-rich food items for balanced nutrition.
              </p>

            </div>

          </motion.div>

          {/* BEVERAGES */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              group
              bg-white
              border border-gray-100
              rounded-3xl
              p-8
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

            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/0 group-hover:bg-green-500/20 blur-3xl rounded-full transition-all duration-500" />

            <div className="relative">

              <div className="
                w-14 h-14 rounded-2xl
                bg-green-100
                group-hover:bg-white/10
                flex items-center justify-center
                transition-all duration-500
              ">
                <Milk
                  className="text-green-600 group-hover:text-[#00FF7F] transition-colors duration-500"
                  size={28}
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#021D05] group-hover:text-white transition-colors duration-500">
                Milk & Beverages
              </h3>

              <p className="mt-3 text-gray-600 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-500">
                Milk, beverages, and nutritious drinks for families and children.
              </p>

            </div>

          </motion.div>

          {/* COOKING ITEMS */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              group
              bg-white
              border border-gray-100
              rounded-3xl
              p-8
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

            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/0 group-hover:bg-green-500/20 blur-3xl rounded-full transition-all duration-500" />

            <div className="relative">

              <div className="
                w-14 h-14 rounded-2xl
                bg-green-100
                group-hover:bg-white/10
                flex items-center justify-center
                transition-all duration-500
              ">
                <CookingPot
                  className="text-green-600 group-hover:text-[#00FF7F] transition-colors duration-500"
                  size={28}
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#021D05] group-hover:text-white transition-colors duration-500">
                Cooking Essentials
              </h3>

              <p className="mt-3 text-gray-600 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-500">
                Palm oil, vegetable oil, salt, curry, thyme, seasoning cubes, and more.
              </p>

            </div>

          </motion.div>

        </div>

        {/* CTA */}
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

          {/* glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,127,0.18),transparent_40%)]" />

          <div className="relative">

            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                <HeartHandshake className="text-[#00FF7F]" size={30} />
              </div>
            </div>

            <h2 className="mt-6 text-3xl md:text-4xl font-bold">
              Food is more than survival.
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto leading-relaxed">
              It restores strength, dignity, stability, and hope to families facing hardship.
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
              Donate Food Supplies
              <ArrowRight size={18} />
            </button>

          </div>

        </motion.div>

      </div>
    </main>
  );
}

export default FoodDonation;