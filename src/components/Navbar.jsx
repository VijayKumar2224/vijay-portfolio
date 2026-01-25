import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme } = useTheme();

  const menu = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-indigo-600">
          Vijay
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menu.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-600 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Social Links */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/VijayKumar2224" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://wa.me/919370225056" target="_blank" rel="noreferrer">WhatsApp</a>

          <button onClick={toggleTheme} className="px-3 py-1 border rounded">
            🌙
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU ANIMATION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-screen bg-white dark:bg-gray-900 z-50"
          >
            <div className="flex justify-between items-center px-6 py-4">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                className="text-2xl"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
              className="flex flex-col items-center mt-10 space-y-6 text-xl"
            >
              {menu.map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-indigo-600"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}

              {/* Mobile Social Links */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="flex flex-col gap-4 mt-8 text-base"
              >
                <a href="https://github.com/VijayKumar2224" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://wa.me/919370225056" target="_blank" rel="noreferrer">WhatsApp</a>
              </motion.div>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
