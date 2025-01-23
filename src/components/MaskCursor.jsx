import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "./CursorContext";

function MaskCursor() {
  const { isHovering } = useCursor();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update posisi cursor
  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  const variants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: cursorPosition.x - 75,
      y: cursorPosition.y - 75,
      backgroundColor: "pink",
      mixBlendMode: "difference",
    },
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none mix-blend-difference">
      <motion.div
        className="fixed top-0 left-0 h-8 w-8 bg-pink-600 rounded-full"
        variants={variants}
        animate={isHovering}
      />
    </div>
  );
}

export default MaskCursor;
