import { motion } from "framer-motion";
import { useState } from "react";
import {
  Users,
  HeartHandshake,
  ClipboardCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function Volunteer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    area: "",
    motivation: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <main className="relative min-h-screen bg-white pt-32 px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-green-100 blur-3xl opacity-40 rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="uppercase tracking-[0.25em] text-green-600 text-sm font-semibold flex items-center justify-center gap-2">
            <Sparkles size={14} />
            Volunteer Program
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-[#021D05] leading-tight">
            People like you
            <br />
            keep this mission alive.
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Join our volunteer network and help us distribute food, organize outreach,
            and support communities in need.
          </p>
        </motion.div>

        {/* LAYOUT */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <div className="space-y-6">

            <motion.div
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl border border-gray-100 shadow-sm bg-white"
            >
              <div className="flex items-center gap-3">
                <Users className="text-green-600" />
                <h3 className="font-semibold text-[#021D05]">
                  Who can volunteer?
                </h3>
              </div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Anyone with willingness to contribute. No formal experience required.
                Training and guidance are provided.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl border border-gray-100 shadow-sm bg-white"
            >
              <div className="flex items-center gap-3">
                <ClipboardCheck className="text-green-600" />
                <h3 className="font-semibold text-[#021D05]">
                  What you’ll do
                </h3>
              </div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Food distribution, logistics support, community coordination,
                awareness campaigns, and field assistance.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl bg-[#021D05] text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-60 h-60 bg-green-500/20 blur-3xl rounded-full" />

              <div className="relative">

                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <HeartHandshake className="text-[#00FF7F]" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  Impact is not abstract here.
                </h3>

                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  Every volunteer directly contributes to food reaching real people,
                  in real communities, in real time.
                </p>

              </div>
            </motion.div>

          </div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              bg-white
              border border-gray-100
              shadow-xl
              rounded-3xl
              p-8
              space-y-5
            "
          >

            <h2 className="text-xl font-semibold text-[#021D05]">
              Join the mission
            </h2>

            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-xl border border-gray-200 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-xl border border-gray-200 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Preferred Area
              </label>
              <input
                name="area"
                value={form.area}
                onChange={handleChange}
                placeholder="Logistics, Outreach, Food Distribution..."
                className="w-full mt-2 p-3 rounded-xl border border-gray-200 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Why do you want to volunteer?
              </label>
              <textarea
                name="motivation"
                value={form.motivation}
                onChange={handleChange}
                rows={4}
                className="w-full mt-2 p-3 rounded-xl border border-gray-200 outline-none focus:border-green-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                flex items-center justify-center gap-2
                py-3
                rounded-xl
                bg-[#00FF7F]
                text-[#021D05]
                font-semibold
                hover:scale-[1.02]
                transition
              "
            >
              Apply as Volunteer
              <ArrowRight size={18} />
            </button>

          </motion.form>

        </div>

      </div>
    </main>
  );
}

export default Volunteer;