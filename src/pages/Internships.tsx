import { motion } from "framer-motion";
import { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function Internships() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    school: "",
    field: "",
    why: "",
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
            Internship Program
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-[#021D05] leading-tight">
            We don’t assign tasks.
            <br />
            We build capability.
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Apply to join a structured internship where you work on real operations
            in logistics, outreach, and impact systems.
          </p>
        </motion.div>

        {/* LAYOUT */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <div className="space-y-6">

            {[{
              icon: GraduationCap,
              title: "Who this is for",
              text: "Students ready to move beyond theory into real operational environments.",
            }, {
              icon: BookOpen,
              title: "What you’ll gain",
              text: "Hands-on exposure to logistics systems, field coordination, and impact design.",
            }].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="p-7 rounded-3xl border border-gray-100 shadow-sm bg-white"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-green-600" />
                    <h3 className="font-semibold text-[#021D05]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}

            <motion.div
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl bg-[#021D05] text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-60 h-60 bg-green-500/20 blur-3xl rounded-full" />

              <div className="relative">

                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Briefcase className="text-[#00FF7F]" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  Real responsibility, not simulation.
                </h3>

                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  Interns contribute directly to live operations and community systems.
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
              space-y-6
            "
          >

            <h2 className="text-xl font-semibold text-[#021D05]">
              Internship Application
            </h2>

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full p-3 rounded-xl border border-gray-200 outline-none focus:border-green-500 transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-600">Email Address</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full p-3 rounded-xl border border-gray-200 outline-none focus:border-green-500 transition"
              />
            </div>

            {/* SCHOOL */}
            <div>
              <label className="text-sm text-gray-600">School / Institution</label>
              <input
                name="school"
                value={form.school}
                onChange={handleChange}
                className="mt-2 w-full p-3 rounded-xl border border-gray-200 outline-none focus:border-green-500 transition"
              />
            </div>

            {/* FIELD */}
            <div>
              <label className="text-sm text-gray-600">Field of Study</label>
              <input
                name="field"
                value={form.field}
                onChange={handleChange}
                className="mt-2 w-full p-3 rounded-xl border border-gray-200 outline-none focus:border-green-500 transition"
              />
            </div>

            {/* WHY */}
            <div>
              <label className="text-sm text-gray-600">
                Why do you want this internship?
              </label>
              <textarea
                name="why"
                value={form.why}
                onChange={handleChange}
                rows={4}
                className="mt-2 w-full p-3 rounded-xl border border-gray-200 outline-none focus:border-green-500 resize-none transition"
              />
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="
                w-full
                flex items-center justify-center gap-2
                py-3
                rounded-xl
                bg-[#00FF7F]
                text-[#021D05]
                font-semibold
                transition
              "
            >
              Submit Application
              <ArrowRight size={18} />
            </motion.button>

          </motion.form>

        </div>

      </div>
    </main>
  );
}

export default Internships;