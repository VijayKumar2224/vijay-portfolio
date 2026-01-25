import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 z-[999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </motion.div>
  );
}
