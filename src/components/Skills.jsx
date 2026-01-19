import { motion } from "framer-motion";

const skills = [
  { name: "Java", level: 80 },
  { name: "DSA", level: 80 },
  { name: "Spring Boot", level: 80 },
  { name: "HTML", level: 80 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 60 },
  { name: "Redux", level: 80 },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="bg-indigo-600 h-3 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
