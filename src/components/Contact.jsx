import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="mb-8 text-gray-300">
          Feel free to reach out for opportunities.
        </p>

        <div className="space-y-3">
          <p>📧 vijaychoudhary2411@gmail.com</p>
          <p>📞 9370225056</p>
          <p>📍 Pune, Maharashtra</p>
        </div>
      </div>
    </motion.section>
  );
}
