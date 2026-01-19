import { motion } from "framer-motion";

const projects = [
  {
    title: "Cab Booking Application",
    description:
      "A full-stack cab booking system with real-time booking, coupon management, and email notifications.",
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL"],
    link: "https://github.com/VijayKumar2224",
  },
  {
    title: "MyShop – E-Commerce Application",
    description:
      "E-commerce web app with product management, offers, and role-based login.",
    tech: ["React", "Redux", "JavaScript"],
    link: "https://github.com/VijayKumar2224",
  },
  {
    title: "Search Engine",
    description:
      "A Java-based search engine using JavaScript frontend and MySQL to store search history.",
    tech: ["Java", "JavaScript", "MySQL", "Apache Tomcat"],
    link: "https://github.com/VijayKumar2224",
  },
  {
    title: "Text Editor",
    description:
      "A Java-based text editor supporting file creation, editing, and saving.",
    tech: ["Java", "JavaFX", "File Handling"],
    link: "https://github.com/VijayKumar2224",
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col"
            >
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-block text-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
