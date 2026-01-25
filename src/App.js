import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
            <Contact />
          <Cursor />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
