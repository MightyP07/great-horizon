import { motion, type Variants } from "framer-motion";

import Hero from "../components/Hero";
import SupportUs from "../components/SupportUs";
import AboutUs from "../components/AboutUs";
import Workings from "../components/Workings";
import OurWork from "../components/OurWork";
import Donate from "../components/Donation";
import Images from "../components/Images";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const sectionVariant : Variants = {
  hidden: { opacity: 0, y: 120 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

function Home() {
  return (
    <main className="bg-white text-black z[10]">
      {/* SECTIONS */}

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div variants={sectionVariant}><Hero /></motion.div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div variants={sectionVariant}><SupportUs /></motion.div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div variants={sectionVariant}><AboutUs /></motion.div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div variants={sectionVariant}><Workings /></motion.div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div variants={sectionVariant}><Donate /></motion.div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div variants={sectionVariant}><OurWork /></motion.div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div variants={sectionVariant}><Testimonials /></motion.div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div variants={sectionVariant}><Images /></motion.div>
      </motion.div>

      <Footer />
    </main>
  );
}

export default Home;