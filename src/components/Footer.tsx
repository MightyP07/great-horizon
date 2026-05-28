import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative w-full bg-[#021D05] text-white pt-14 sm:pt-16 md:pt-20 pb-10 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[450px] md:w-[600px] h-[320px] sm:h-[450px] md:h-[600px] bg-green-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* MOBILE: 2-COLUMN STACK */}
        <div className="grid grid-cols-2 gap-8 sm:hidden text-left">

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xs font-semibold text-[#00FF7F] mb-4 tracking-[0.2em] uppercase">
              Contact
            </h3>

            <div className="space-y-3 text-xs">
              <p className="font-semibold">Location</p>
              <p className="text-white/60">Ilorin, Nigeria</p>

              <p className="font-semibold mt-3">Phone</p>
              <p className="text-white/60">+234 816 895 5738</p>

              <p className="font-semibold mt-3">Email</p>
              <p className="text-white/60 break-words">
                thegreathorizon@gmail.com
              </p>
            </div>
          </motion.div>

          {/* LINKS GROUP (Explore + Engage) */}
          <div className="space-y-8">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-xs font-semibold text-[#00FF7F] mb-4 tracking-[0.2em] uppercase">
                Explore
              </h3>

              <ul className="space-y-2 text-white/60 text-xs">
                {["About Us", "Donations", "Volunteer", "Impact", "FAQs"].map(
                  (item) => (
                    <li key={item} className="hover:text-white transition">
                      {item}
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xs font-semibold text-[#00FF7F] mb-4 tracking-[0.2em] uppercase">
                Engage
              </h3>

              <ul className="space-y-2 text-white/60 text-xs">
                {["Blog", "Internships", "Partners"].map((item) => (
                  <li key={item} className="hover:text-white transition">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

        </div>

        {/* DESKTOP: ORIGINAL 4-COLUMN GRID */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-center sm:text-left">

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-semibold text-[#00FF7F] mb-4 tracking-[0.2em] uppercase">
              Contact
            </h3>

            <div className="space-y-4 text-sm">
              <p className="font-semibold">Location</p>
              <p className="text-white/60">Ilorin, Nigeria</p>

              <p className="font-semibold">Phone</p>
              <p className="text-white/60">+234 816 895 5738</p>

              <p className="font-semibold">Email</p>
              <p className="text-white/60 break-words">
                thegreathorizon@gmail.com
              </p>
            </div>
          </motion.div>

          {/* EXPLORE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-sm font-semibold text-[#00FF7F] mb-4 tracking-[0.2em] uppercase">
              Explore
            </h3>

            <ul className="space-y-2 text-white/60 text-sm">
              {["About Us", "Donations", "Volunteer", "Impact", "FAQs"].map(
                (item) => (
                  <li key={item} className="hover:text-white transition">
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* ENGAGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm font-semibold text-[#00FF7F] mb-4 tracking-[0.2em] uppercase">
              Engage
            </h3>

            <ul className="space-y-2 text-white/60 text-sm">
              {["Resources", "Blog", "Internships", "Partnerships"].map(
                (item) => (
                  <li key={item} className="hover:text-white transition">
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* LEGAL */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-sm font-semibold text-[#00FF7F] mb-4 tracking-[0.2em] uppercase">
              Legal
            </h3>

            <ul className="space-y-2 text-white/60 text-sm">
              {["Privacy Policy", "Terms of Use", "Cookie Policy", "Sitemap"].map(
                (item) => (
                  <li key={item} className="hover:text-white transition">
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative mt-12 md:mt-16 border-t border-white/10 pt-6 text-center px-4">
        <p className="text-[10px] sm:text-xs text-white/50 tracking-wide">
          © {new Date().getFullYear()} The Great Horizon. Built with purpose.
        </p>
      </div>

    </footer>
  );
}

export default Footer;