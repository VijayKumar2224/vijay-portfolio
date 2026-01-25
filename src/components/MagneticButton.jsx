import { motion, useMotionValue, useTransform } from "framer-motion";

export default function MagneticButton({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveX = useTransform(x, [-50, 50], [-15, 15]);
  const moveY = useTransform(y, [-50, 50], [-15, 15]);

  return (
    <motion.button
      style={{ x: moveX, y: moveY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold"
    >
      {children}
    </motion.button>
  );
}
