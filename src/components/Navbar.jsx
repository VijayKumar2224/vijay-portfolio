import { useState } from "react";
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

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/VijayKumar2224"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600"
          >
            LinkedIn
          </a>

          <button
            onClick={toggleTheme}
            className="px-3 py-1 border rounded"
          >
            🌙
          </button>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <ul className="flex flex-col text-center py-4 space-y-4">
            {menu.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}

            <a
              href="https://github.com/VijayKumar2224"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}
