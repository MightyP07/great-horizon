import { useState } from "react";
import { motion } from "framer-motion";

type FormState = {
  name: string;
  email: string;
  address: string;
  amount: string;
  currency: string;
};

type ToastState = {
  show: boolean;
  message: string;
  type: "success" | "error";
};

function Donate() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    address: "",
    amount: "",
    currency: "NGN",
  });

  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (
    message: string,
    type: "success" | "error" = "success"
  ) => {
    setToast({
      show: true,
      message,
      type,
    });

    setTimeout(() => {
      setToast({
        show: false,
        message: "",
        type: "success",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(
        "https://formspree.io/f/xwvjarlr",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        showToast(
          "Donation sent successfully 🙌",
          "success"
        );

        setForm({
          name: "",
          email: "",
          address: "",
          amount: "",
          currency: "NGN",
        });
      } else {
        showToast(
          "Something went wrong. Try again.",
          "error"
        );
      }
    } catch (err) {
      console.error(err);

      showToast(
        "Network error. Check connection.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-28 bg-[#008000] overflow-hidden">
      {/* SOFT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <span className="uppercase tracking-[0.25em] text-sm text-white/80">
            Support The Mission
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
            Your donation becomes real meals on tables.
          </h2>

          <p className="mt-7 text-white/80 text-lg leading-relaxed max-w-md">
            Every contribution directly supports food distribution,
            logistics, and emergency outreach for vulnerable families.
          </p>

          <div className="mt-10 space-y-2 text-sm text-white/70">
            <p>✔ Secure processing</p>
            <p>✔ Transparent impact tracking</p>
            <p>✔ Direct community delivery</p>
          </div>
        </motion.div>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-[#021D05] mb-6">
            Make a Donation
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="
                w-full
                p-3
                rounded-xl
                border border-gray-200
                focus:border-green-500
                outline-none
                transition
              "
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="
                w-full
                p-3
                rounded-xl
                border border-gray-200
                focus:border-green-500
                outline-none
                transition
              "
            />

            <input
              name="address"
              type="text"
              placeholder="Physical Address"
              value={form.address}
              onChange={handleChange}
              required
              className="
                w-full
                p-3
                rounded-xl
                border border-gray-200
                focus:border-green-500
                outline-none
                transition
              "
            />

            <div className="grid grid-cols-3 gap-3">
              <input
                name="amount"
                type="number"
                min="1"
                placeholder="Amount"
                value={form.amount}
                onChange={handleChange}
                required
                className="
                  col-span-2
                  p-3
                  rounded-xl
                  border border-gray-200
                  focus:border-green-500
                  outline-none
                  transition
                "
              />

              <select
                name="currency"
                value={form.currency}
                onChange={handleChange}
                className="
                  p-3
                  rounded-xl
                  border border-gray-200
                  bg-white
                  focus:border-green-500
                  outline-none
                "
              >
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                py-3
                rounded-xl
                bg-[#008000]
                text-white
                font-semibold
                hover:bg-green-700
                hover:scale-[1.02]
                active:scale-95
                transition-all
                duration-300
                disabled:opacity-50
                cursor-pointer
              "
            >
              {loading
                ? "Submitting..."
                : "Submit Donation"}
            </button>
          </form>
        </motion.div>
      </div>

      {/* TOAST */}
      {toast.show && (
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          className={`fixed bottom-6 right-6 px-5 py-3 rounded-xl shadow-xl text-white font-medium ${
            toast.type === "success"
              ? "bg-green-600"
              : "bg-red-600"
          }`}
        >
          {toast.message}
        </motion.div>
      )}
    </section>
  );
}

export default Donate;