import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

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

      {/* WORK SECTION */}
      <motion.div
        id="work"
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

      {/* CONTACT SECTION */}
      <Footer />
    </div>
  );
}
