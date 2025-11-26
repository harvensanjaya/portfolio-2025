import { motion, useScroll, useTransform } from "motion/react";

function Section() {
  // scroll progress dari top browser (0 → 1)
  const { scrollYProgress } = useScroll();

  // transform scroll progress menjadi opacity
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  // transform scroll progress menjadi translateY
  const y = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="h-screen flex items-center justify-center bg-blue-200 text-4xl font-bold"
    >
      Scroll-Linked Section
    </motion.div>
  );
}

export default Section;
