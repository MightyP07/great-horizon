import { motion } from "framer-motion";

const stats = [
  { label: "People Reached", value: "1.2M+" },
  { label: "Communities Supported", value: "72+" },
  { label: "Active Volunteers", value: "100+" },
  { label: "Food Drives Completed", value: "240+" },
];

const images = [
  "/img-1.jpg",
  "/img-2.jpg",
  "/img-3.jpg",
  "/img-4.jpg",
  "/img-5.jpg",
  "/img-6.jpg",
  "/img-7.jpg",
  "/img-8.jpg",
];

function Impact() {
  return (
    <main className="relative min-h-screen bg-white pt-32 px-6 overflow-hidden">

      {/* GLOW BACKDROP */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-green-100 blur-3xl opacity-40 rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#021D05] leading-tight">
            Impact is not a claim.
            <br />
            It is measurable reality.
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Every number here represents food delivered, families supported,
            and systems built to reduce hunger at scale.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="
                bg-white
                border border-gray-100
                rounded-3xl
                p-6
                text-center
                shadow-sm
                hover:shadow-xl
                transition
              "
            >
              <h2 className="text-3xl font-bold text-green-600">
                {s.value}
              </h2>
              <p className="mt-2 text-sm text-gray-600">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* STORY SECTION */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#021D05]">
              From logistics to lifelines.
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Our system is built around one principle — food must reach people
              without delay, waste, or inefficiency. Through coordinated networks
              of volunteers and partners, we ensure distribution happens where it
              matters most.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              What started as small community outreach has evolved into a structured
              distribution system reaching multiple regions consistently.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={images[0]}
              className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-green-100 rounded-2xl blur-2xl opacity-60" />
          </motion.div>

        </div>

{/* IMAGE STORY SECTION */}
<div className="mt-24">

  <h2 className="text-3xl font-bold text-[#021D05] text-center">
    Moments that define our work
  </h2>

  <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
    Every frame captures real people, real delivery, and real systems in motion.
  </p>

  {/* CINEMATIC LAYOUT GRID */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-6 gap-4">

    {/* HERO IMAGE */}
    <div className="md:col-span-4 md:row-span-2 h-[420px] relative overflow-hidden rounded-2xl group shadow-lg">
      <img
        src="/img-1.jpg"
        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </div>

    {/* SIDE TOP */}
    <div className="md:col-span-2 h-[200px] relative overflow-hidden rounded-2xl group shadow-md">
      <img src="/img-2.jpg" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
    </div>

    {/* SIDE BOTTOM */}
    <div className="md:col-span-2 h-[200px] relative overflow-hidden rounded-2xl group shadow-md">
      <img src="/img-3.jpg" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
    </div>

    {/* SMALL TILE ROW */}
    <div className="md:col-span-2 h-[180px] relative overflow-hidden rounded-2xl group shadow-sm">
      <img src="/img-4.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
    </div>

    <div className="md:col-span-2 h-[180px] relative overflow-hidden rounded-2xl group shadow-sm">
      <img src="/img-5.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
    </div>

    <div className="md:col-span-2 h-[180px] relative overflow-hidden rounded-2xl group shadow-sm">
      <img src="/img-6.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
    </div>

    {/* LAST ROW — NEW ASSETS INCLUDED */}
    <div className="md:col-span-3 h-[220px] relative overflow-hidden rounded-2xl group shadow-md">
      <img src="/img-7.jpg" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
    </div>

    <div className="md:col-span-3 h-[220px] relative overflow-hidden rounded-2xl group shadow-md">
      <img src="/img-8.jpg" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
    </div>

    {/* NEW IMAGES */}
    <div className="md:col-span-3 h-[240px] relative overflow-hidden rounded-2xl group shadow-lg">
      <img src="/img-9.jpg" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
    </div>

    <div className="md:col-span-3 h-[240px] relative overflow-hidden rounded-2xl group shadow-lg">
      <img src="/img-10.jpg" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
    </div>

  </div>
</div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-24
            bg-[#021D05]
            text-white
            rounded-3xl
            p-12
            text-center
            relative
            overflow-hidden
          "
        >

          <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full" />

          <h2 className="text-3xl md:text-4xl font-bold">
            Impact grows when systems scale.
          </h2>

          <p className="mt-5 text-white/70 max-w-2xl mx-auto">
            Be part of the network that keeps food moving, people supported,
            and communities stable.
          </p>

          <button className="mt-8 px-8 py-3 bg-[#00FF7F] text-[#021D05] font-semibold rounded-full hover:scale-105 transition">
            Support the Mission
          </button>

        </motion.div>

      </div>
    </main>
  );
}

export default Impact;