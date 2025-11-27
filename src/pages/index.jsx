import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaMobileAlt, FaReact } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import {
  MdArrowRightAlt,
  MdFolderCopy,
  MdOutlineArrowRightAlt,
} from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { PiLinkedinLogoThin } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";
import { SiSui, SiTailwindcss } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";

import mobileApps from "../assets/mobileapps.jpg";
import website from "../assets/websites.jpg";
import Navbar from "../components/Navbar";
import profile from "../assets/profile4.png";

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

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // animasi hanya sekali, tidak repetisi saat scroll
    margin: "-20% 0px", // mulai trigger sedikit sebelum benar-benar masuk
  });

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
        className=" flex flex-col w-full h-[90vh] items-center justify-center text-8xl tracking-tighter bg-linear-to-tr from-[#d9d9d9] from-10% via-black/10 via-30% to-[#d9d9d9] to-90%"
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
            hidden: { y: -50, opacity: 0, scale: 2, filter: "blur(200px)" },
            visible: { y: 0, opacity: 1, scale: 1, filter: "blur(0px)" },
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

      <motion.div
        className="w-4/5 bg-[#262626] h-screen mx-auto rounded-4xl overflow-y-scroll no-scrollbar relative group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
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
      </motion.div>

      <div className="w-4/5 mx-auto h-screen flex flex-col justify-center items-center relative">
        {/* Small Title */}
        <p className="text-2xl text-center mb-5 italic font-light">Hello!</p>

        {/* TEXT TYPEWRITER */}
        <motion.p
          className="text-4xl text-center w-1/2 font-medium"
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
          className="w-fit p-2 rounded-full bg-black/10 shadow-xl rotate-8 absolute top-3/8 left-1/7 -translate-x-1/2 -translate-y-1/2 hover:-rotate-6 transition-all duration-300"
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
          className="w-fit p-2 rounded-full bg-black/10 shadow-xl rotate-6 absolute top-4/8 left-1/7 -translate-x-1/2 -translate-y-1/2 hover:-rotate-6 transition-all duration-300"
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
          className="w-fit p-2 rounded-full bg-black/10 shadow-xl -rotate-6 absolute top-5/8 left-1/7 -translate-x-1/2 -translate-y-1/2 hover:rotate-6 transition-all duration-300"
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
          className="w-fit p-2 rounded-full bg-black/10 shadow-xl -rotate-8 absolute top-3/8 left-6/7 -translate-x-1/2 -translate-y-1/2 hover:rotate-6 transition-all duration-300"
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
          className="w-fit p-2 rounded-full bg-black/10 shadow-xl -rotate-6 absolute top-4/8 left-6/7 -translate-x-1/2 -translate-y-1/2 hover:rotate-6 transition-all duration-300"
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
          className="w-fit p-2 rounded-full bg-black/10 shadow-xl rotate-2 absolute top-5/8 left-6/7 -translate-x-1/2 -translate-y-1/2 hover:-rotate-6 transition-all duration-300"
        >
          <div className="w-fit p-2 rounded-full bg-white flex items-center gap-2 shadow-xl">
            <div className="p-2 bg-pink-400 rounded-full text-white">
              <SiTailwindcss size={15} />
            </div>
            <p className="font-medium text-sm pr-2">Tailwind CSS</p>
          </div>
        </motion.div>
      </div>

      {/* WORK SECTION */}
      <motion.div
        id="work"
        style={{ opacity: workOpacity, y: workY }}
        className="w-4/5 mx-auto flex flex-col items-center justify-center pt-20"
      >
        <p className="text-2xl text-center mb-5 italic font-light">Projects</p>

        {/* TEXT TYPEWRITER */}
        <motion.p
          className="text-4xl text-center w-1/2 font-medium mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <TypeText
            className="text-black text-7xl"
            text="Recent Case Studies"
            speed={30}
          />
        </motion.p>

        <div className="grid grid-cols-2 gap-15 w-full h-fit">
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
              <p className="group-hover:text-black text-black/50 transition-all duration-300 text-xl">
                Wedding Invitation Website
              </p>
              <div className="flex gap-5">
                <div className="w-fit p-2 bg-black/20 rounded-full">
                  <p className="text-sm text-black/60">Website</p>
                </div>
                <div className="w-fit p-2 bg-black/20 rounded-full">
                  <p className="text-sm text-black/60">HTML</p>
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
              <p className="group-hover:text-black text-black/50 transition-all duration-300 text-xl">
                Wedding Invitation Website
              </p>
              <div className="flex gap-5">
                <div className="w-fit p-2 bg-black/20 rounded-full">
                  <p className="text-sm text-black/60">Website</p>
                </div>
                <div className="w-fit p-2 bg-black/20 rounded-full">
                  <p className="text-sm text-black/60">HTML</p>
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
              <p className="group-hover:text-black text-black/50 transition-all duration-300 text-xl">
                Wedding Invitation Website
              </p>
              <div className="flex gap-5">
                <div className="w-fit p-2 bg-black/20 rounded-full">
                  <p className="text-sm text-black/60">Website</p>
                </div>
                <div className="w-fit p-2 bg-black/20 rounded-full">
                  <p className="text-sm text-black/60">HTML</p>
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
              <p className="group-hover:text-black text-black/50 transition-all duration-300 text-xl">
                Wedding Invitation Website
              </p>
              <div className="flex gap-5">
                <div className="w-fit p-2 bg-black/20 rounded-full">
                  <p className="text-sm text-black/60">Website</p>
                </div>
                <div className="w-fit p-2 bg-black/20 rounded-full">
                  <p className="text-sm text-black/60">HTML</p>
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
        className="w-4/5 mx-auto flex flex-col items-center justify-center pt-20 mt-20 mb-40"
      >
        <p className="text-2xl text-center mb-5 italic font-light">About me</p>

        {/* TEXT TYPEWRITER */}
        <motion.p
          className="text-4xl text-center w-1/2 font-medium mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <TypeText
            className="text-black text-7xl"
            text="Pushing boundaries since 2023"
            speed={30}
          />
        </motion.p>

        <div className="flex gap-10">
          <div className="flex-2">
            <motion.div
              className="w-full aspect-4/3 bg-black/10 rounded-4xl overflow-hidden -rotate-3 shadow-black shadow-2xl"
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

          <div className="flex flex-3 flex-col gap-30">
            <div className="w-3/4">
              <p className="text-2xl font-medium">
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
      <motion.div
        id="contact"
        style={{ opacity: contactOpacity, y: contactY }}
        className="h-screen  flex items-center justify-center text-4xl font-bold p-5"
      >
        <div className="rounded-4xl flex flex-col bg-linear-to-tr from-black from-10% via-black/80 via-40% to-black to-90% w-full h-full items-center justify-between p-20">
          <div
            ref={ref}
            className="flex flex-col justify-center items-center flex-1 gap-5"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              animate={
                isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
              }
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-8xl text-white font-medium tracking-tighter"
            >
              Let's <span className="text-white/50">Connect</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={
                isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
              }
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-xl font-normal w-1/2 text-white text-center"
            >
              Feel free to contact me if having any questions. I'm available for
              new projects or just for chatting.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={
                isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
              }
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="p-2 rounded-full bg-white/30 shadow-2xl"
            >
              <button className="p-4 rounded-full bg-black shadow-2xl hover:bg-linear-to-r hover:from-red-500 hover:to-white/50 transition-discrete transition-colors duration-300">
                <p className="text-lg text-white gap-2 font-normal">
                  Contact Me
                </p>
              </button>
            </motion.div>
          </div>

          <div className="flex w-full justify-between">
            <div className="py-2 px-4 border-t border-white border-b">
              <p className="text-base text-white font-normal">
                © Harven Sanjaya, 2025
              </p>
            </div>

            <div className="flex gap-10">
              <div className="aspect-square rounded-full border flex items-center justify-center w-fit p-3 hover:border-white hover:text-white transition-all duration-300 cursor-pointer border-white/70 text-white/60">
                <VscGithubAlt size={20} className="shrink-0" />
              </div>

              <div className="aspect-square rounded-full border flex items-center justify-center w-fit p-3 hover:border-white hover:text-white transition-all duration-300 cursor-pointer border-white/70 text-white/60">
                <PiLinkedinLogoThin size={20} className="shrink-0" />
              </div>

              <div className="aspect-square rounded-full border flex items-center justify-center w-fit p-3 hover:border-white hover:text-white transition-all duration-300 cursor-pointer border-white/70 text-white/60">
                <CiInstagram size={20} className="shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
