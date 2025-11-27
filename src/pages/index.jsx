import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaMobileAlt, FaReact } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { MdFolderCopy, MdOutlineArrowRightAlt } from "react-icons/md";
import { SiSui, SiTailwindcss } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";

import mobileApps from "../assets/mobileapps.jpg";
import profile from "../assets/profile4.png";
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

const parentVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // jeda antar item
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
    y: -20,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  // Scroll-linked animations
  const { scrollYProgress } = useScroll();

  const workOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const workY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  const aboutOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setShow(false); // close modal after click
  };

  return (
    <div className="font-inter scroll-smooth bg-[#D9D9D9] tracking-tighter">
      {/* NAVBAR */}
      <Navbar />

      <motion.div
        className="flex flex-col w-full md:h-[90vh] h-[70vh] items-center justify-center xl:text-8xl lg:text-7xl md:text-6xl text-5xl  transition-all duration-300 tracking-tighter bg-linear-to-tr from-[#d9d9d9] from-10% via-black/10 via-30% to-[#d9d9d9] to-90%"
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
            text="Hello friend!"
            className="font-medium sm:mx-0 mx-2"
            speed={75}
          />
          <img
            src={website}
            alt=""
            className="xl:w-40 lg:w-30 md:w-25 w-20 sm:block hidden mx-5 h-3/4 object-cover md:rounded-4xl rounded-3xl md:border-4 border-3 rotate-6 select-none transition-all duration-300"
          />
          <TypeText text="I'm" className="text-black/50" speed={75} />
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row"
          variants={{
            hidden: { y: -50, opacity: 0, scale: 2, filter: "blur(200px)" },
            visible: { y: 0, opacity: 1, scale: 1, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.3 }}
        >
          <TypeText className="text-black/50" text="available for" speed={75} />
          <img
            src={mobileApps}
            alt=""
            className="xl:w-40 lg:w-30 md:w-25 w-20 sm:block hidden mx-5 h-3/4 object-cover md:rounded-4xl md:border-4 border-3 rounded-3xl -rotate-6 select-none transition-all duration-300"
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
          <p className="text-base tracking-normal sm:w-md w-2xs sm:text-center text-justify font-inter text-black/50">
            I build responsive and modern websites that are optimized for
            performance, accessibility, and user engagement.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="md:w-4/5 w-9/10 bg-[#262626] lg:h-screen md:h-[80vh] h-screen mx-auto rounded-4xl overflow-y-scroll no-scrollbar relative group transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="w-full h-full absolute top-0 left-0 bg-linear-to-b from-black to-black/0"></div>

        <button
          onClick={() => scrollToSection("work")}
          className="bg-white/70 aspect-square w-fit lg:p-10 p-7 sticky z-20 rounded-full shadow-2xl shadow-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:bg-white transition-all duration-300"
        >
          <MdFolderCopy className="md:text-6xl text-5xl" />
        </button>

        <div className="bg-black w-fit py-2 px-4 sticky z-20 rounded-full shadow-2xl shadow-black top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-12 transition-all duration-1000">
          <p className="text-white">See Recent Work</p>
        </div>

        <div className="w-full lg:p-15 p-10 transition-all duration-300 grid md:grid-cols-2 grid-cols-1 lg:gap-15 gap-10 -mt-50">
          <img src={website} alt="" className="w-full rounded-4xl" />
          <img src={mobileApps} alt="" className="w-full rounded-4xl" />
          <img src={website} alt="" className="w-full rounded-4xl" />
          <img src={mobileApps} alt="" className="w-full rounded-4xl" />
        </div>
      </motion.div>

      <div className="md:w-4/5 w-9/10 transition-all duration-300 mx-auto h-screen flex flex-col justify-center items-center relative">
        {/* Small Title */}
        <p className="md:text-2xl text-xl transition-all duration-300 text-center md:mb-5 mb-3 italic font-light">
          Hello!
        </p>

        {/* TEXT TYPEWRITER */}
        <motion.p
          className="xl:text-4xl md:text-3xl text-2xl transition-all duration-300 text-center md:w-1/2 w-full font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <TypeText
            className="text-black"
            text="I help startups and enterprise to establish an emotional connection between their products and happy engaged customers"
            speed={30}
          />
        </motion.p>

        {/* BADGE LEFT SIDE (FROM LEFT) */}
        <motion.div
          initial={{ x: -300, opacity: 0, filter: "blur(100px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-fit p-2 rounded-full bg-black/10 shadow-xl rotate-8 absolute top-3/8 left-1/7 md:block hidden -translate-x-1/2 -translate-y-1/2 hover:-rotate-6 transition-all duration-300"
        >
          <div className="w-fit p-1 rounded-full bg-white flex items-center gap-2 shadow-xl">
            <div className="p-2 bg-amber-200 rounded-full">
              <IoGrid size={15} />
            </div>
            <p className="font-medium text-sm pr-2">Design System</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -300, opacity: 0, filter: "blur(100px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-fit p-2 rounded-full bg-black/10 shadow-xl rotate-6 absolute md:top-4/8 top-5/8 left-1/7 md:block hidden -translate-x-1/2 -translate-y-1/2 hover:-rotate-6 transition-all duration-300"
        >
          <div className="w-fit p-1 rounded-full bg-white flex items-center gap-2 shadow-xl">
            <div className="p-2 bg-blue-200 rounded-full">
              <SiSui size={15} />
            </div>
            <p className="font-medium text-sm pr-2">UI / UX</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -300, opacity: 0, filter: "blur(100px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-fit p-2 rounded-full bg-black/10 shadow-xl -rotate-6 absolute md:top-5/8 top-6/8 left-1/7 md:block hidden -translate-x-1/2 -translate-y-1/2 hover:rotate-6 transition-all duration-300"
        >
          <div className="w-fit p-1 rounded-full bg-white flex items-center gap-2 shadow-xl">
            <div className="p-2 bg-green-200 rounded-full">
              <TbWorldWww size={15} />
            </div>
            <p className="font-medium text-sm pr-2">Web Developer</p>
          </div>
        </motion.div>

        {/* RIGHT SIDE BADGES (FROM RIGHT) */}
        <motion.div
          initial={{ x: 300, opacity: 0, filter: "blur(100px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-fit p-2 rounded-full bg-black/10 shadow-xl -rotate-8 absolute top-3/8 left-6/7 md:block hidden -translate-x-1/2 -translate-y-1/2 hover:rotate-6 transition-all duration-300"
        >
          <div className="w-fit p-1 rounded-full bg-white flex items-center gap-2 shadow-xl">
            <div className="p-2 bg-blue-700 rounded-full text-white">
              <FaReact size={15} />
            </div>
            <p className="font-medium text-sm pr-2">React</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 300, opacity: 0, filter: "blur(100px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-fit p-2 rounded-full bg-black/10 shadow-xl -rotate-6 absolute top-4/8 md:block hidden left-6/7 -translate-x-1/2 -translate-y-1/2 hover:rotate-6 transition-all duration-300"
        >
          <div className="w-fit p-1 rounded-full bg-white flex items-center gap-2 shadow-xl">
            <div className="p-2 bg-orange-200 rounded-full">
              <FaMobileAlt size={15} />
            </div>
            <p className="font-medium text-sm pr-2">Mobile Apps</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 300, opacity: 0, filter: "blur(100px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-fit p-2 rounded-full bg-black/10 shadow-xl rotate-2 absolute hidden md:block top-5/8 left-6/7 -translate-x-1/2 -translate-y-1/2 hover:-rotate-6 transition-all duration-300"
        >
          <div className="w-fit p-2 rounded-full bg-white flex items-center gap-2 shadow-xl">
            <div className="p-2 bg-pink-400 rounded-full text-white">
              <SiTailwindcss size={15} />
            </div>
            <p className="font-medium text-sm pr-2">Tailwind CSS</p>
          </div>
        </motion.div>

        <div className="md:hidden grid-cols-2 grid mt-10">
          <motion.div
            initial={{ opacity: 0, filter: "blur(100px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-fit p-2 rounded-full bg-black/10 shadow-xl sm:rotate-8 rotate-0 hover:-rotate-6 transition-all duration-300"
          >
            <div className="w-fit p-1 rounded-full bg-white flex items-center sm:gap-2 gap-1 shadow-xl">
              <div className="sm:p-2 p-1 bg-amber-200 rounded-full">
                <IoGrid size={15} />
              </div>
              <p className="font-medium sm:text-sm text-xs pr-2">
                Design System
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(100px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-fit p-2 rounded-full bg-black/10 shadow-xl sm:rotate-6 hover:-rotate-6 transition-all duration-300"
          >
            <div className="w-fit p-1 rounded-full bg-white flex items-center sm:gap-2 gap-1 shadow-xl">
              <div className="sm:p-2 p-1 bg-blue-200 rounded-full">
                <SiSui size={15} />
              </div>
              <p className="font-medium sm:text-sm text-xs pr-2">UI / UX</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(100px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-fit p-2 rounded-full bg-black/10 shadow-xl sm:-rotate-6 hover:rotate-6 transition-all duration-300"
          >
            <div className="w-fit p-1 rounded-full bg-white flex items-center sm:gap-2 gap-1 shadow-xl">
              <div className="sm:p-2 p-1 bg-green-200 rounded-full">
                <TbWorldWww size={15} />
              </div>
              <p className="font-medium sm:text-sm text-xs pr-2">
                Web Developer
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(100px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-fit p-2 rounded-full bg-black/10 shadow-xl sm:-rotate-8 hover:rotate-6 transition-all duration-300"
          >
            <div className="w-fit p-1 rounded-full bg-white flex items-center gap-2 shadow-xl">
              <div className="sm:p-2 p-1 bg-blue-700 rounded-full text-white">
                <FaReact size={15} />
              </div>
              <p className="font-medium sm:text-sm text-xs pr-2">React</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(100px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-fit p-2 rounded-full bg-black/10 shadow-xl sm:-rotate-6  hover:rotate-6 transition-all duration-300"
          >
            <div className="w-fit p-1 rounded-full bg-white flex items-center sm:gap-2 gap-1 shadow-xl">
              <div className="sm:p-2 p-1 bg-orange-200 rounded-full">
                <FaMobileAlt size={15} />
              </div>
              <p className="font-medium sm:text-sm text-xs pr-2">Mobile Apps</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(100px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-fit p-2 rounded-full bg-black/10 shadow-xl sm:rotate-2 hover:-rotate-6 transition-all duration-300"
          >
            <div className="w-fit sm:p-2 p-1 rounded-full bg-white flex items-center sm:gap-2 gap-1 shadow-xl">
              <div className="sm:p-2 p-1 bg-pink-400 rounded-full text-white">
                <SiTailwindcss size={15} />
              </div>
              <p className="font-medium sm:text-sm text-xs pr-2">
                Tailwind CSS
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WORK SECTION */}
      <motion.div
        id="work"
        style={{ opacity: workOpacity, y: workY }}
        className="md:w-4/5 w-9/10 mx-auto flex flex-col items-center justify-center pt-20"
      >
        <p className="lg:text-2xl text-xl text-center mb-5 italic font-light">
          Projects
        </p>

        {/* TEXT TYPEWRITER */}
        <motion.p
          className="text-4xl text-center md:w-1/2 w-full font-medium mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <TypeText
            className="text-black xl:text-7xl lg:text-6xl text-5xl"
            text="Recent Case Studies"
            speed={30}
          />
        </motion.p>

        <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-15 gap-10 w-full h-fit">
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
                className="w-full h-full object-cover pt-10 px-10 group-hover:pt-7 group-hover:px-7 transition-all transition-discrete duration-300"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="group-hover:text-black text-black/50 transition-all duration-300 lg:text-xl sm:text-lg text-base">
                Wedding Invitation Website
              </p>
              <div className="flex sm:gap-5 gap-2">
                <div className="w-fit p-2 bg-black/20 rounded-full">
                  <p className="lg:text-sm text-xs text-black/60">Website</p>
                </div>
                <div className="w-fit p-2 bg-black/20 rounded-full">
                  <p className="lg:text-sm text-xs text-black/60">HTML</p>
                </div>
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
                className="w-full h-full object-cover pt-10 px-10 group-hover:pt-7 group-hover:px-7 transition-all transition-discrete duration-300"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="group-hover:text-black text-black/50 transition-all duration-300 lg:text-xl sm:text-lg text-base">
                Wedding Invitation Website
              </p>
              <div className="flex sm:gap-5 gap-2">
                <div className="w-fit p-2 bg-black/20 rounded-full">
                  <p className="lg:text-sm text-xs text-black/60">Website</p>
                </div>
                <div className="w-fit p-2 bg-black/20 rounded-full">
                  <p className="lg:text-sm text-xs text-black/60">HTML</p>
                </div>
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
                className="w-full h-full object-cover pt-10 px-10 group-hover:pt-7 group-hover:px-7 transition-all transition-discrete duration-300"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="group-hover:text-black text-black/50 transition-all duration-300 lg:text-xl sm:text-lg text-base">
                Wedding Invitation Website
              </p>
              <div className="flex sm:gap-5 gap-2">
                <div className="w-fit p-2 bg-black/20 rounded-full">
                  <p className="lg:text-sm text-xs text-black/60">Website</p>
                </div>
                <div className="w-fit p-2 bg-black/20 rounded-full">
                  <p className="lg:text-sm text-xs text-black/60">HTML</p>
                </div>
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
                className="w-full h-full object-cover pt-10 px-10 group-hover:pt-7 group-hover:px-7 transition-all transition-discrete duration-300"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="group-hover:text-black text-black/50 transition-all duration-300 lg:text-xl sm:text-lg text-base">
                Wedding Invitation Website
              </p>
              <div className="flex sm:gap-5 gap-2">
                <div className="w-fit p-2 bg-black/20 rounded-full">
                  <p className="lg:text-sm text-xs text-black/60">Website</p>
                </div>
                <div className="w-fit p-2 bg-black/20 rounded-full">
                  <p className="lg:text-sm text-xs text-black/60">HTML</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ABOUT SECTION */}
      <motion.div
        id="about"
        style={{ opacity: aboutOpacity, y: aboutY }}
        className="md:w-4/5 w-9/10 transition-all duration-300 mx-auto flex flex-col items-center justify-center pt-20 mt-20 mb-40"
      >
        <p className="lg:text-2xl text-xl text-center mb-5 italic font-light transition-all duration-300">
          About me
        </p>

        {/* TEXT TYPEWRITER */}
        <motion.p
          className="text-4xl text-center md:w-1/2 w-full font-medium md:mb-20 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <TypeText
            className="text-black xl:text-7xl lg:text-6xl text-5xl transition-all duration-300"
            text="Pushing boundaries since 2023"
            speed={30}
          />
        </motion.p>

        <div className="flex gap-10 md:flex-row flex-col">
          <div className="flex-2 items-center justify-center flex">
            <motion.div
              className="md:w-full w-1/2 lg:aspect-4/3 aspect-square bg-black/10 rounded-4xl overflow-hidden -rotate-3 shadow-black shadow-2xl transition-all duration-300"
              initial={{ rotate: 3 }}
              whileInView={{ rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img
                src={profile}
                alt=""
                className="w-full h-full object-cover rounded-4xl p-2"
              />
            </motion.div>
          </div>

          <div className="flex flex-3 flex-col lg:gap-30 gap-15">
            <div className="lg:w-3/4 w-full transition-all duration-300">
              <p className="xl:text-2xl text-xl font-medium">
                Joris van Dijk is a Dutch designer known for his minimalist,
                expressive digital work. He helps startups and studios create
                clean interfaces and strong branding. Based in Utrecht, he
                blends function with emotion — and often spends his free time
                cycling or exploring generative art.
              </p>
            </div>

            <motion.div
              className="flex flex-col gap-5 border-l-2 border-black/20 pl-10"
              variants={parentVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                variants={childVariant}
                className="flex justify-between items-center py-3 border-b-2 border-black/20"
              >
                <p className="text-sm">Bachelor of Informatics</p>
                <p className="text-sm text-black/50">Bunda Mulia University</p>
                <p className="flex justify-between items-center gap-1 text-sm">
                  2021 <MdOutlineArrowRightAlt /> 2025
                </p>
              </motion.div>

              <motion.div
                variants={childVariant}
                className="flex justify-between items-center py-3 border-b-2 border-black/20"
              >
                <p className="text-sm">Freelance Practice</p>
                <p className="text-sm text-black/50">
                  Wedding Invitation Website
                </p>
                <p className="flex justify-between items-center gap-1 text-sm">
                  2023 <MdOutlineArrowRightAlt /> Now
                </p>
              </motion.div>

              <motion.div
                variants={childVariant}
                className="flex justify-between items-center py-3 border-b-2 border-black/20"
              >
                <p className="text-sm">Tech Educator/Coding Mentor</p>
                <p className="text-sm text-black/50">Timedoor Academy</p>
                <p className="flex justify-between items-center gap-1 text-sm">
                  2024 <MdOutlineArrowRightAlt /> Now
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CONTACT SECTION */}
      <Footer />
    </div>
  );
}
