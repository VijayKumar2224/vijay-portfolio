import { motion } from "framer-motion";

const projects = [
  {
    title: "Cab Booking Application",
    description:
      "Full-stack cab booking system with real-time booking and email notifications.",
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL"],
  },
  {
    title: "MyShop – E-Commerce App",
    description:
      "E-commerce application with product management and offers.",
    tech: ["React", "Redux", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                {p.title}
              </h3>
              <p className="mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
