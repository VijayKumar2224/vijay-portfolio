import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      className="py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experience & Education
        </h2>
      </div>
    </motion.section>
  );
}
