import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            Hi, I’m{" "}
            <span className="text-yellow-300">Vijay Kumar</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold mb-5"
          >
            Java Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-gray-200 mb-8 max-w-xl"
          >
            I build scalable, high-performance web applications using
            Java, Spring Boot, React, Redux, and modern frontend
            technologies with clean UI and smooth animations.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            <a href="/Vijay_Kumar_Resume.pdf" download>
              <MagneticButton>
                Download Resume
              </MagneticButton>
            </a>

            <a href="#projects">
              <MagneticButton>
                View Projects
              </MagneticButton>
            </a>
          </motion.div>
        </div>

        {/* RIGHT CONTENT (GLASS AVATAR) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="hidden md:flex justify-center"
        >
          <div className="w-80 h-80 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl flex items-center justify-center text-6xl font-bold">
            VK
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
