import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              I am a passionate Java Full Stack Developer with hands-on
              experience in real-world projects.
            </p>
            <p>
              I enjoy learning by implementing concepts from scratch.
            </p>
            <p>
              Currently a fresher, actively seeking opportunities.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 shadow rounded-xl p-6">
            <ul className="space-y-3">
              <li>🎓 B.Tech – MIT WPU (CGPA: 8.89)</li>
              <li>💻 Java • Spring Boot • React • Redux</li>
              <li>🚀 Full Stack Development</li>
              <li>📍 Pune, Maharashtra</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
