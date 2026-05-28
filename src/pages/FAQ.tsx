import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How can I donate food or money?",
    a: "You can donate via online payment, bank transfer, or physical drop-off. Each method is processed securely and directed to active relief operations.",
  },
  {
    q: "Where does the donated food go?",
    a: "All donations are distributed to verified communities, rural outreach programs, and partner relief centers based on urgency and need.",
  },
  {
    q: "Can I volunteer without prior experience?",
    a: "Yes. Volunteers are trained and guided. What matters most is willingness to contribute and consistency.",
  },
  {
    q: "Is my donation tracked or transparent?",
    a: "Yes. We maintain internal tracking for distribution accountability and operational transparency.",
  },
  {
    q: "Can I donate from outside Nigeria?",
    a: "Yes. We accept international donations through supported transfer channels and partnerships.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="relative min-h-screen bg-white overflow-hidden pt-32 px-6">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-green-100 blur-3xl opacity-40 rounded-full" />

      <div className="relative max-w-4xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="uppercase tracking-[0.25em] text-green-600 text-sm font-semibold">
            FAQs
          </span>

          <h1 className="mt-5 text-5xl md:text-6xl font-bold text-[#021D05]">
            Questions,
            <br />
            answered clearly.
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Everything you need to understand how we operate, donate, and create impact.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="mt-16 space-y-4">

          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                layout
                className="
                  border border-gray-100
                  rounded-2xl
                  overflow-hidden
                  bg-white
                  shadow-sm
                "
              >

                {/* QUESTION */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="
                    w-full
                    flex items-center justify-between
                    p-6
                    text-left
                    hover:bg-gray-50
                    transition
                  "
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="text-green-600" size={18} />

                    <h3 className="font-semibold text-[#021D05]">
                      {item.q}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-600 text-sm leading-relaxed"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-20
            text-center
            p-10
            rounded-3xl
            bg-[#021D05]
            text-white
            relative
            overflow-hidden
          "
        >

          <div className="absolute top-0 right-0 w-60 h-60 bg-green-500/20 blur-3xl rounded-full" />

          <div className="relative">

            <h2 className="text-2xl md:text-3xl font-bold">
              Still have questions?
            </h2>

            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              We respond to every serious inquiry about donations, partnerships, and volunteering.
            </p>

            <button className="mt-6 px-7 py-3 bg-[#00FF7F] text-[#021D05] font-semibold rounded-full hover:scale-105 transition">
              Contact US! 
            </button>

          </div>

        </motion.div>

      </div>
    </main>
  );
}

export default FAQ;