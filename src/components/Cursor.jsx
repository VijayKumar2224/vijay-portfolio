import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    });
  }, []);

  return (
    <div
      className="fixed w-6 h-6 rounded-full border-2 border-indigo-500 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
        transition: "transform 0.08s ease-out",
      }}
    />
  );
}
