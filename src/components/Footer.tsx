import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative w-full bg-[#021D05] text-white pt-20 pb-8 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-semibold text-[#00FF7F] mb-5 tracking-[0.2em] uppercase">
            Contact
          </h3>

          <div className="space-y-5 text-sm">

            <div>
              <p className="font-semibold text-white">Location</p>
              <p className="text-white/60 mt-1 leading-relaxed">
                Kwara State, Ilorin, Nigeria
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">Phone</p>
              <p className="text-white/60 mt-1">
                +234 816 895 5738
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">Email</p>
              <p className="text-white/60 mt-1">
                thegreathorizon@gmail.com
              </p>
            </div>

          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-sm font-semibold text-[#00FF7F] mb-5 tracking-[0.2em] uppercase">
            Explore
          </h3>

          <ul className="space-y-3 text-white/60 text-sm">

            {[
              "About Us",
              "Donations",
              "Volunteer",
              "Impact",
              "Press Kit",
              "FAQs",
            ].map((item) => (
              <li
                key={item}
                className="
                  cursor-pointer
                  hover:text-white
                  transition
                  hover:translate-x-1
                "
              >
                {item}
              </li>
            ))}

          </ul>
        </motion.div>

        {/* ENGAGEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-sm font-semibold text-[#00FF7F] mb-5 tracking-[0.2em] uppercase">
            Engage
          </h3>

          <ul className="space-y-3 text-white/60 text-sm">

            {[
              "Resources",
              "Blog",
              "Internships",
              "Partnerships",
            ].map((item) => (
              <li
                key={item}
                className="
                  cursor-pointer
                  hover:text-white
                  transition
                  hover:translate-x-1
                "
              >
                {item}
              </li>
            ))}

          </ul>
        </motion.div>

        {/* LEGAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-sm font-semibold text-[#00FF7F] mb-5 tracking-[0.2em] uppercase">
            Legal
          </h3>

          <ul className="space-y-3 text-white/60 text-sm">

            {[
              "Privacy Policy",
              "Terms of Use",
              "Cookie Policy",
              "Sitemap",
            ].map((item) => (
              <li
                key={item}
                className="
                  cursor-pointer
                  hover:text-white
                  transition
                  hover:translate-x-1
                "
              >
                {item}
              </li>
            ))}

          </ul>
        </motion.div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative mt-16 border-t border-white/10 pt-6 text-center">

        <p className="text-xs text-white/50 tracking-wide">
          © {new Date().getFullYear()} The Great Horizon. Built with purpose.
        </p>

      </div>

    </footer>
  );
}

export default Footer;