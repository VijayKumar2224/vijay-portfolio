import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-yellow-300">Vijay Kumar</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Java Full Stack Developer
          </h2>

          <p className="text-lg text-gray-200 mb-6">
            I build scalable web applications using Java, Spring Boot,
            React, Redux, and modern web technologies.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="/Vijay_Kumar_Resume.pdf"
              download
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="w-72 h-72 bg-white/20 rounded-full mx-auto"></div>
        </div>
      </motion.div>
    </section>
  );
}
