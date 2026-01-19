import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-20 bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experience & Education
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* EXPERIENCE CARD */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Internship Experience
            </h3>

            <p className="text-lg font-bold">
              Orion Instruments
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Trainee Intern | June 2023 – Dec 2023
            </p>

            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Worked on multiple digital and technical projects</li>
              <li>Assisted in the assembly and testing of gauges</li>
              <li>Developed frontend components for a gauge web application</li>
              <li>Collaborated with team members to improve UI functionality</li>
            </ul>
          </div>

          {/* EDUCATION CARD */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Education
            </h3>

            <p className="text-lg font-bold">
              B.Tech – MIT World Peace University
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Pune, Maharashtra
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              CGPA: <span className="font-semibold">8.89</span>
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              Specialization in Computer Engineering with strong
              fundamentals in Data Structures, OOPs, and Web Development.
            </p>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
