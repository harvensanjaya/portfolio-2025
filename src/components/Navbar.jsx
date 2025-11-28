import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CiInstagram } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiLinkedinLogoThin } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";
import Logo from "./elements/logo";
import { useNavigate } from "react-router-dom";

function Navbar({ title, onClick }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Work", href: "work" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setShow(false); // close modal after click
  };

  const handleMenuClick = (section) => {
    if (location.pathname !== "/") {
      // jika BUKAN di homepage → navigate ke home sambil kirim section
      navigate(`/?scroll=${section}`);
    } else {
      // jika SUDAH di homepage → scroll langsung
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-1/2 -translate-x-1/2 md:w-4/5 w-9/10 transition-all duration-300 rounded-xl flex items-center justify-between z-50 my-5"
    >
      <Logo onClick={onClick}>{title}</Logo>

      {/* DROPDOWN BUTTON */}
      <motion.button
        onClick={() => setShow(!show)}
        className="rounded-full w-10 h-10 flex items-center justify-center bg-white cursor-pointer"
        animate={{ rotate: show ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
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
            className="absolute right-0 mt-85 bg-white shadow-lg rounded-4xl p-10 pr-20 w-fit z-20"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.25 } },
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
                    onClick={() => handleMenuClick(item.href)}
                    className="block w-full text-left py-1 rounded-md hover:opacity-40 text-black font-base transition-all duration-200 text-xl font-inter cursor-pointer"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
              <br />
              <motion.li
                className="flex gap-5"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <a
                  className="aspect-square rounded-full border flex items-center justify-center w-fit p-3 hover:opacity-40 transition-all duration-300 cursor-pointer"
                  href="https://github.com/harvensanjaya"
                  target="blank"
                >
                  <VscGithubAlt size={20} className="shrink-0" />
                </a>

                <a
                  className="aspect-square rounded-full border flex items-center justify-center w-fit p-3 hover:opacity-40 transition-all duration-300 cursor-pointer"
                  href="https://www.linkedin.com/in/harven-sanjaya-76642b268/"
                  target="blank"
                >
                  <PiLinkedinLogoThin size={20} className="shrink-0" />
                </a>

                <a
                  className="aspect-square rounded-full border flex items-center justify-center w-fit p-3 hover:opacity-40 transition-all duration-300 cursor-pointer"
                  href="https://www.instagram.com/harvensnjaya/"
                  target="blank"
                >
                  <CiInstagram size={20} className="shrink-0" />
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Navbar;
