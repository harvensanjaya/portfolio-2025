import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import mobileApps from "../assets/mobileapps.jpg";
import website from "../assets/websites.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function TypeText({ text, speed = 30, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i++));
      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, text]);

  return (
    <p ref={ref} className={className}>
      {displayed}
    </p>
  );
}

export default function Wedding() {
  const navigate = useNavigate();
  return (
    <div className="font-inter scroll-smooth bg-[#D9D9D9] tracking-tighter">
      {/* NAVBAR */}
      <Navbar
        onClick={(e) => {
          e.preventDefault();
          // pindah halaman
          navigate("/");
          // delay agar page load dulu
          setTimeout(() => {
            document
              .getElementById("work")
              ?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }}
        title={
          <div className="flex items-center">
            <IoChevronBack size={18} />
            <span>Back</span>
          </div>
        }
      />

      <motion.div
        className="flex flex-col md:w-4/5 w-9/10 mx-auto md:h-[90vh] h-[70vh] justify-center xl:text-7xl lg:text-6xl md:text-5xl transition-all duration-300 tracking-tighter gap-10"
        id="awal"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.5 } },
        }}
      >
        <motion.div
          className="flex"
          variants={{
            hidden: { y: -50, opacity: 0, scale: 2, filter: "blur(200px)" },
            visible: { y: 0, opacity: 1, scale: 1, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.3 }}
        >
          <TypeText
            text="Wedding Project Invitation"
            className="font-medium sm:mx-0 mx-2"
            speed={75}
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-lg tracking-normal sm:w-lg w-2xs text-justify font-inter text-black">
            Strida offers a smooth and powerful experience when presenting your
            work in a full-screen format. It combines bold Swiss typography,
            smooth animations, sidebar navigations, flexible CMS — everything to
            make your portfolio rock.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-5"
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        >
          <button className="p-4 flex items-center shadow-2xl text-base tracking-normal text-white bg-black rounded-full gap-2">
            Live Link <FaLink />
          </button>
          <button className="bg-none p-4 border border-black text-base tracking-normal rounded-full">
            Contact me
          </button>
        </motion.div>
      </motion.div>

      {/* WORK SECTION */}
      <motion.div
        id="work"
        className="md:w-4/5 w-9/10 mx-auto flex flex-col items-center justify-center mb-50"
      >
        <div className="grid grid-cols-1 sm:gap-15 gap-10 w-full h-fit">
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="w-full aspect-4/3 bg-white rounded-4xl overflow-hidden">
              <img
                src={website}
                alt=""
                className="w-full h-full object-cover pt-10 px-10 transition-all transition-discrete duration-300"
              />
            </div>
            <div className="flex justify-between items-center p-20">
              <div className="gap-2 flex flex-col">
                <p className="text-black/50 transition-all duration-300 lg:text-4xl sm:text-lg text-base italic font-metal">
                  Stack
                </p>
                <p className="text-black transition-all duration-300 lg:text-xl sm:text-lg text-base">
                  HTML, CSS, JS, Bootstrap
                </p>
              </div>

              <div className="gap-2 flex flex-col">
                <p className="text-black/50 transition-all duration-300 lg:text-4xl sm:text-lg text-base italic font-metal">
                  Timeline
                </p>
                <p className="text-black transition-all duration-300 lg:text-xl sm:text-lg text-base">
                  2 Months
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="w-full aspect-4/3 bg-white rounded-4xl overflow-hidden">
              <img
                src={website}
                alt=""
                className="w-full h-full object-cover pt-10 px-10 transition-all transition-discrete duration-300"
              />
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="text-black font-bold transition-all duration-300 lg:text-2xl sm:text-xl text-lg">
                Project Page
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="w-full aspect-4/3 bg-white rounded-4xl overflow-hidden">
              <img
                src={website}
                alt=""
                className="w-full h-full object-cover pt-10 px-10 transition-all transition-discrete duration-300"
              />
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="text-black font-bold transition-all duration-300 lg:text-2xl sm:text-xl text-lg">
                Project Page
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="w-full aspect-4/3 bg-white rounded-4xl overflow-hidden">
              <img
                src={website}
                alt=""
                className="w-full h-full object-cover pt-10 px-10 transition-all transition-discrete duration-300"
              />
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="text-black font-bold transition-all duration-300 lg:text-2xl sm:text-xl text-lg">
                Project Page
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* CONTACT SECTION */}
      <Footer />
    </div>
  );
}
