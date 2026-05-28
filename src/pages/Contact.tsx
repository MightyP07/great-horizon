import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  HeartHandshake,
} from "lucide-react";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(form);
};

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
            Contact Us
          </span>

          <h1 className="mt-5 text-5xl md:text-6xl font-bold text-[#021D05] leading-tight">
            Let’s talk about
            <br />
            impact.
          </h1>

          <p className="mt-7 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you want to donate, volunteer, or partner with us,
            we’re always open to conversations that move people forward.
          </p>

        </motion.div>

        {/* GRID */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10">

          {/* INFO SIDE */}
          <div className="space-y-6">

            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition bg-white"
            >
              <div className="flex items-center gap-3">
                <MapPin className="text-green-600" />
                <h3 className="font-semibold text-[#021D05]">Location</h3>
              </div>
              <p className="mt-2 text-gray-600 text-sm">
                Kwara State, Ilorin, Nigeria
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition bg-white"
            >
              <div className="flex items-center gap-3">
                <Phone className="text-green-600" />
                <h3 className="font-semibold text-[#021D05]">Phone</h3>
              </div>
              <p className="mt-2 text-gray-600 text-sm">
                +234 816 895 5738
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition bg-white"
            >
              <div className="flex items-center gap-3">
                <Mail className="text-green-600" />
                <h3 className="font-semibold text-[#021D05]">Email</h3>
              </div>
              <p className="mt-2 text-gray-600 text-sm">
                thegreathorizon@gmail.com
              </p>
            </motion.div>

            {/* IMPACT CARD */}
            <div className="p-8 rounded-3xl bg-[#021D05] text-white relative overflow-hidden">

              <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/20 blur-3xl rounded-full" />

              <div className="relative">

                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <HeartHandshake className="text-[#00FF7F]" />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  Every message matters.
                </h3>

                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  We read every message and respond to all meaningful inquiries
                  about donations, partnerships, and volunteering.
                </p>

              </div>

            </div>

          </div>

          {/* FORM SIDE */}
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

            <div>
              <label className="text-sm text-gray-600">Name</label>
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
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full mt-2 p-3 rounded-xl border border-gray-200 outline-none focus:border-green-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                flex
                items-center
                justify-center
                gap-2
                py-3
                rounded-xl
                bg-[#00FF7F]
                text-[#021D05]
                font-semibold
                hover:scale-[1.02]
                transition
              "
            >
              Send Message
              <Send size={18} />
            </button>

          </motion.form>

        </div>

      </div>
    </main>
  );
}

export default Contact;