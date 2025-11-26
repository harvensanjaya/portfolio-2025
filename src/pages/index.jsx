import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";

export default function Home() {
  const [show, setShow] = useState(false);

  const menuItems = [
    { label: "Work", href: "work" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" },
  ];

  // Scroll-linked animations
  const { scrollYProgress } = useScroll();

  const workOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const workY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  const aboutOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);

  const contactOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const contactY = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setShow(false); // close modal after click
  };

  return (
    <div className="bg-gray-200 min-h-screen font-inter scroll-smooth">
      {/* NAVBAR */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative bg-slate-500 w-4/5 mx-auto my-10 p-4 rounded-xl flex items-center justify-between"
      >
        <div className="py-2 px-4 bg-white rounded-full">
          <p className="font-inter font-bold">Harven</p>
        </div>

        {/* DROPDOWN BUTTON */}
        <motion.button
          onClick={() => setShow(!show)}
          className="rounded-full w-10 h-10 flex items-center justify-center bg-white"
          animate={{ rotate: show ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <MdKeyboardArrowDown size={24} />
        </motion.button>

        {/* CUSTOM SMALL MODAL */}
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-3 w-36 z-20"
            >
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
                className="flex flex-col gap-1"
              >
                {menuItems.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={{
                      hidden: { x: -20, opacity: 0 },
                      visible: { x: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left px-3 py-1 rounded-md hover:bg-gray-100 text-gray-700 font-medium transition-all duration-200"
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* SECTIONS */}
      <motion.div
        id="work"
        style={{ opacity: workOpacity, y: workY }}
        className="h-screen bg-red-200 flex items-center justify-center text-4xl font-bold"
      >
        Work Section
      </motion.div>

      <motion.div
        id="about"
        style={{ opacity: aboutOpacity, y: aboutY }}
        className="h-screen bg-blue-200 flex items-center justify-center text-4xl font-bold"
      >
        About Section
      </motion.div>

      <motion.div
        id="contact"
        style={{ opacity: contactOpacity, y: contactY }}
        className="h-screen bg-green-200 flex items-center justify-center text-4xl font-bold"
      >
        Contact Section
      </motion.div>
    </div>
  );
}
