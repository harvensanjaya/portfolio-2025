import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaMobileAlt, FaReact } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { MdFolderCopy } from "react-icons/md";
import { SiSui, SiTailwindcss } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";

import mobileApps from "../assets/mobileapps.jpg";
import website from "../assets/websites.jpg";
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

export default function Home() {
  // Scroll-linked animations
  const { scrollYProgress } = useScroll();

  const workOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const workY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  const aboutOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);

  const contactOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const contactY = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);

  // Smooth scroll function

  return (
    <div className="font-inter scroll-smooth bg-[#D9D9D9] tracking-tighter">
      {/* NAVBAR */}
      <Navbar />

      <motion.div
        className=" flex flex-col w-full h-[90vh] items-center justify-center text-8xl tracking-tighter"
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
            hidden: { y: -50, opacity: 0, scale: 2 },
            visible: { y: 0, opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.3 }}
        >
          <TypeText text="Hello friend!" className="font-medium" speed={75} />
          <img
            src={website}
            alt=""
            className="w-40 mx-5 h-3/4 object-cover rounded-4xl border-4 rotate-6 select-none"
          />
          <TypeText text="I'm" className="text-black/50" speed={75} />
        </motion.div>
        <motion.div
          className="flex"
          variants={{
            hidden: { y: -50, opacity: 0, scale: 2 },
            visible: { y: 0, opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.3 }}
        >
          <TypeText className="text-black/50" text="available for" speed={75} />
          <img
            src={mobileApps}
            alt=""
            className="w-40 mx-5 h-3/4 object-cover rounded-4xl border-4 -rotate-6 select-none"
          />
          <TypeText className="font-medium" speed={75} text="Freelance work" />
        </motion.div>
        <motion.div
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-base tracking-normal w-md text-center font-inter text-black/50">
            I build responsive and modern websites that are optimized for
            performance, accessibility, and user engagement.
          </p>
        </motion.div>
      </motion.div>

      <div className="w-4/5 bg-[#262626] h-screen mx-auto rounded-4xl overflow-y-scroll no-scrollbar relative group">
        <div className="w-full h-full absolute top-0 left-0 bg-linear-to-b from-black to-black/0"></div>

        <button className="bg-white/70 aspect-square w-fit p-10 sticky z-20 rounded-full shadow-2xl shadow-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:bg-white transition-all duration-300">
          <MdFolderCopy size={50} className="" />
        </button>

        <div className="bg-black w-fit py-2 px-4 sticky z-20 rounded-full shadow-2xl shadow-black top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-12 transition-all duration-1000">
          <p className="text-white">See Recent Work</p>
        </div>

        <div className="w-full p-15 grid grid-cols-2 grid-rows-2 gap-15 -mt-50">
          <img src={website} alt="" className="w-full rounded-4xl" />
          <img src={mobileApps} alt="" className="w-full rounded-4xl" />
          <img src={website} alt="" className="w-full rounded-4xl" />
          <img src={mobileApps} alt="" className="w-full rounded-4xl" />
        </div>
      </div>

      <div className="w-4/5 mx-auto h-screen my-20 flex flex-col justify-center items-center relative">
        <p className="text-2xl text-center mb-5 italic font-light">Hello!</p>
        <p className="text-4xl text-center w-1/2 font-medium">
          I help startups and enterprise to establish an emotional connection
          between their products and happy engaged customers
        </p>

        <div className="w-fit p-2 rounded-full bg-black/10 shadow-xl rotate-8 absolute top-3/8 left-1/7 -translate-x-1/2 -translate-y-1/2 hover:-rotate-6 transition-all duration-300">
          <div className="w-fit p-1 rounded-full bg-white flex items-center gap-2 shadow-xl">
            <div className="p-2 bg-amber-200 rounded-full">
              <IoGrid size={15} />
            </div>
            <p className="font-medium text-sm pr-2">Design System</p>
          </div>
        </div>

        <div className="w-fit p-2 rounded-full bg-black/10 shadow-xl rotate-6 absolute top-4/8 left-1/7 -translate-x-1/2 -translate-y-1/2 hover:-rotate-6 transition-all duration-300">
          <div className="w-fit p-1 rounded-full bg-white flex items-center gap-2 shadow-xl">
            <div className="p-2 bg-blue-200 rounded-full">
              <SiSui size={15} />
            </div>
            <p className="font-medium text-sm pr-2">UI / UX</p>
          </div>
        </div>

        <div className="w-fit p-2 rounded-full bg-black/10 shadow-xl -rotate-6 absolute top-5/8 left-1/7 -translate-x-1/2 -translate-y-1/2 hover:rotate-6 transition-all duration-300">
          <div className="w-fit p-1 rounded-full bg-white flex items-center gap-2 shadow-xl">
            <div className="p-2 bg-green-200 rounded-full">
              <TbWorldWww size={15} />
            </div>
            <p className="font-medium text-sm pr-2">Web Developer</p>
          </div>
        </div>

        <div className="w-fit p-2 rounded-full bg-black/10 shadow-xl -rotate-8 absolute top-3/8 left-6/7 -translate-x-1/2 -translate-y-1/2 hover:rotate-6 transition-all duration-300">
          <div className="w-fit p-1 rounded-full bg-white flex items-center gap-2 shadow-xl">
            <div className="p-2 bg-blue-700 rounded-full text-white">
              <FaReact size={15} />
            </div>
            <p className="font-medium text-sm pr-2">React</p>
          </div>
        </div>

        <div className="w-fit p-2 rounded-full bg-black/10 shadow-xl -rotate-6 absolute top-4/8 left-6/7 -translate-x-1/2 -translate-y-1/2 hover:rotate-6 transition-all duration-300">
          <div className="w-fit p-1 rounded-full bg-white flex items-center gap-2 shadow-xl">
            <div className="p-2 bg-orange-200 rounded-full">
              <FaMobileAlt size={15} />
            </div>
            <p className="font-medium text-sm pr-2">Mobile Apps</p>
          </div>
        </div>

        <div className="w-fit p-2 rounded-full bg-black/10 shadow-xl rotate-2 absolute top-5/8 left-6/7 -translate-x-1/2 -translate-y-1/2 hover:-rotate-6 transition-all duration-300">
          <div className="w-fit p-2 rounded-full bg-white flex items-center gap-2 shadow-xl">
            <div className="p-2 bg-pink-400 rounded-full text-white">
              <SiTailwindcss size={15} />
            </div>
            <p className="font-medium text-sm pr-2">Tailwind CSS</p>
          </div>
        </div>
      </div>

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
