import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  CreditCard,
  Landmark,
  Globe2,
  HeartHandshake,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";

type DonationMethod = {
  title: string;
  bank: string;
  accountName: string;
  accountNumber: string;
};

function MoneyDonation() {
  const [selectedMethod, setSelectedMethod] =
    useState<DonationMethod | null>(null);

  const [copied, setCopied] = useState(false);

  const donationMethods: Record<string, DonationMethod> = {
    local: {
      title: "Local Bank Transfer",
      bank: "Zenith Bank",
      accountName: "Great Horizon AgriBusiness Services",
      accountNumber: "1229613859",
    },

    foreign: {
      title: "Foreign Transfer",
      bank: "USD Domiciliary Account",
      accountName: "The Great Horizon Foundation",
      accountNumber: "1234567890",
    },

    online: {
      title: "Online Donation",
      bank: "Secure Payment Gateway",
      accountName: "The Great Horizon Foundation",
      accountNumber: "Donate Online",
    },
  };

  return (
    <main className="relative min-h-screen bg-white overflow-hidden pt-32 px-6">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-100 blur-3xl opacity-40 rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="uppercase tracking-[0.25em] text-green-600 text-sm font-semibold">
            Money Donation
          </span>

          <h1 className="mt-5 text-5xl md:text-6xl font-bold text-[#021D05] leading-tight">
            Every donation
            <br />
            becomes impact.
          </h1>

          <p className="mt-7 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Your financial support helps us provide food, strengthen logistics,
            expand outreach operations, and support families facing hunger.
            Whether it’s a one-time gift or a monthly contribution,
            every donation moves hope forward.
          </p>
        </motion.div>

        {/* DONATION METHODS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-20">
          {/* LOCAL TRANSFER */}
          <motion.div
            onClick={() => setSelectedMethod(donationMethods.local)}
            whileHover={{ y: -8 }}
            className="
              bg-[#021D05]
              text-white
              rounded-3xl
              p-8
              shadow-xl
              relative
              overflow-hidden
              cursor-pointer
            "
          >
            {/* GLOW */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/20 blur-3xl rounded-full" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                <Landmark
                  className="text-[#00FF7F]"
                  size={28}
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Local Bank Transfer
              </h3>

              <p className="mt-3 text-white/70 leading-relaxed text-sm">
                Make direct deposits or transfers through verified local
                banking channels.
              </p>
            </div>
          </motion.div>

          {/* FOREIGN TRANSFER */}
          <motion.div
            onClick={() => setSelectedMethod(donationMethods.foreign)}
            whileHover={{ y: -8 }}
            className="
              bg-white
              border border-gray-100
              rounded-3xl
              p-8
              shadow-sm
              hover:shadow-2xl
              transition-all
              duration-500
              cursor-pointer
            "
          >
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
              <Globe2
                className="text-green-600"
                size={28}
              />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-[#021D05]">
              Foreign Transfer
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed text-sm">
              International supporters can contribute through global transfer
              systems.
            </p>
          </motion.div>

          {/* ONLINE DONATION */}
          <motion.div
            onClick={() => setSelectedMethod(donationMethods.online)}
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
              overflow-hidden
              relative
              cursor-pointer
            "
          >
            {/* HOVER GLOW */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/0 group-hover:bg-green-500/20 blur-3xl rounded-full transition-all duration-500" />

            <div className="relative">
              <div
                className="
                  w-14 h-14 rounded-2xl
                  bg-green-100
                  group-hover:bg-white/10
                  backdrop-blur-md
                  flex items-center justify-center
                  transition-all duration-500
                "
              >
                <CreditCard
                  className="text-green-600 group-hover:text-[#00FF7F] transition-colors duration-500"
                  size={28}
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#021D05] group-hover:text-white transition-colors duration-500">
                Online Donation
              </h3>

              <p className="mt-3 text-gray-600 group-hover:text-white/70 leading-relaxed text-sm transition-colors duration-500">
                Support securely through fast and convenient online payments.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA SECTION */}
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
          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,127,0.18),transparent_40%)]" />

          <div className="relative">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                <HeartHandshake
                  className="text-[#00FF7F]"
                  size={30}
                />
              </div>
            </div>

            <h2 className="mt-6 text-3xl md:text-4xl font-bold">
              Small acts become life-changing support.
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto leading-relaxed">
              Every contribution helps provide food, dignity, and hope to
              communities facing hunger and hardship.
            </p>

            <button
              onClick={() => setSelectedMethod(donationMethods.online)}
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
              Make a Donation
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* DONATION MODAL */}
      <AnimatePresence>
        {selectedMethod && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedMethod(null);
                setCopied(false);
              }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            />

            {/* MODAL */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 40,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                fixed
                inset-0
                z-[9999]
                flex
                items-center
                justify-center
                p-5
              "
            >
              <div
                className="
                  relative
                  w-full
                  max-w-xl
                  rounded-[2rem]
                  bg-white
                  overflow-hidden
                  shadow-[0_25px_100px_rgba(0,0,0,0.25)]
                "
              >
                {/* GLOW */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-300/40 blur-3xl rounded-full" />

                <div className="relative p-8 md:p-10">
                  {/* ICON */}
                  <div
                    className="
                      w-16 h-16
                      rounded-2xl
                      bg-green-100
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Landmark
                      className="text-green-600"
                      size={30}
                    />
                  </div>

                  {/* TITLE */}
                  <h2 className="mt-6 text-3xl md:text-4xl font-bold text-[#021D05]">
                    {selectedMethod.title}
                  </h2>

                  <p className="mt-3 text-gray-500">
                    Complete your donation using the account information below.
                  </p>

                  {/* DETAILS */}
                  <div className="mt-10 space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        Bank
                      </p>

                      <p className="mt-1 text-xl font-semibold text-[#021D05]">
                        {selectedMethod.bank}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        Account Name
                      </p>

                      <p className="mt-1 text-xl font-semibold text-[#021D05]">
                        {selectedMethod.accountName}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        Account Number
                      </p>

                      <p
                        className="
                          mt-2
                          text-3xl
                          md:text-4xl
                          font-bold
                          tracking-wider
                          text-green-600
                        "
                      >
                        {selectedMethod.accountNumber}
                      </p>
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-10 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          selectedMethod.accountNumber
                        );

                        setCopied(true);

                        setTimeout(() => {
                          setCopied(false);
                        }, 2000);
                      }}
                      className="
                        flex-1
                        py-3
                        rounded-full
                        bg-green-600
                        text-white
                        font-semibold
                        flex
                        items-center
                        justify-center
                        gap-2
                        hover:scale-[1.02]
                        transition
                      "
                    >
                      {copied ? (
                        <>
                          <Check size={18} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={18} />
                          Copy Account Number
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => {
                        setSelectedMethod(null);
                        setCopied(false);
                      }}
                      className="
                        px-8
                        py-3
                        rounded-full
                        border
                        border-gray-200
                        font-medium
                        hover:bg-gray-50
                        transition
                        text-[#008000]
                      "
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

export default MoneyDonation;