import { motion } from "framer-motion";

const projects = [
  {
    title: "Cab Booking Application",
    description:
      "A full-stack cab booking system with customer & driver registration, real-time booking, coupon management, and email notifications.",
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL"],
    link: "https://github.com/VijayKumar2224",
  },
  {
    title: "MyShop – E-Commerce Application",
    description:
      "An e-commerce platform with role-based login, product management, offers, and Redux-powered state management.",
    tech: ["React", "Redux", "JavaScript"],
    link: "https://github.com/VijayKumar2224",
  },
  {
    title: "Search Engine",
    description:
      "A Java-based search engine with JavaScript frontend and MySQL to store and retrieve search history.",
    tech: ["Java", "JavaScript", "MySQL", "Apache Tomcat"],
    link: "https://github.com/VijayKumar2224",
  },
  {
    title: "Text Editor",
    description:
      "A desktop text editor application supporting file creation, editing, saving, and basic text operations.",
    tech: ["Java", "JavaFX", "File Handling"],
    link: "https://github.com/VijayKumar2224",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-24 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15 },
        },
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.08,
                rotateX: 2,
                rotateY: -2,
              }}
              transition={{ type: "spring", stiffness: 180 }}
              className="bg-white/30 dark:bg-gray-900/40 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col"
            >
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-5 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100/70 text-indigo-700 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
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
