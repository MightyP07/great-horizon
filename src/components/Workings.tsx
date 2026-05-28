import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Beneficiaries", value: 1250000, suffix: "+" },
  { label: "Partnerships", value: 72, suffix: "" },
  { label: "Volunteers", value: 100, suffix: "+" },
  { label: "Donations Delivered", value: 240, suffix: "+" },
];

function useCounter(target, startTrigger, duration = 900) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;

    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        start = target;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [target, startTrigger, duration]);

  return count;
}

function StatCard({ label, value, suffix, start }: any) {
  const count = useCounter(value, start);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="
        group
        text-center
        p-5 sm:p-6 md:p-8
        rounded-2xl sm:rounded-3xl
        bg-white
        border border-gray-100
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1 sm:hover:-translate-y-2
        transition-all duration-500
      "
    >
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#008000] leading-tight">
        {count.toLocaleString()}
        {suffix}
      </h2>

      <p className="text-gray-600 mt-2 sm:mt-3 font-medium tracking-wide text-sm sm:text-base">
        {label}
      </p>

      <div className="mt-3 sm:mt-4 mx-auto w-0 group-hover:w-12 sm:group-hover:w-16 h-[2px] bg-green-500 transition-all duration-500" />
    </motion.div>
  );
}

function Workings() {
  const [start, setStart] = useState(false);

  return (
    <section className="relative w-full py-16 md:py-28 bg-gray-50 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-green-100/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          onViewportEnter={() => setStart(true)}
          className="text-center mb-12 md:mb-16"
        >

          <span className="text-green-600 uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">
            Our Impact
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-[#021D05] mt-3 sm:mt-4 leading-tight">
            Numbers that reflect real-world change.
          </h2>

          <p className="text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            Every figure represents lives supported, communities reached,
            and systems strengthened through coordinated action.
          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

          {stats.map((item, i) => (
            <StatCard
              key={i}
              label={item.label}
              value={item.value}
              suffix={item.suffix}
              start={start}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Workings;