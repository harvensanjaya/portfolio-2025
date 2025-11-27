import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { CiInstagram } from "react-icons/ci";
import { PiLinkedinLogoThin } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";

function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const isInView = useInView(ref, {
    once: true, // animasi hanya sekali, tidak repetisi saat scroll
    margin: "-20% 0px", // mulai trigger sedikit sebelum benar-benar masuk
  });
  const contactOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const contactY = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);
  return (
    <motion.div
      id="contact"
      style={{ opacity: contactOpacity, y: contactY }}
      className="h-screen  flex items-center justify-center text-4xl font-bold p-5"
    >
      <div className="rounded-4xl flex flex-col bg-linear-to-tr from-black from-10% via-black/80 via-40% to-black to-90% w-full h-full items-center justify-between sm:p-20 xs:p-10 p-5">
        <div
          ref={ref}
          className="flex flex-col justify-center items-center flex-1 gap-5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="xl:text-8xl lg:text-7xl sm:text-6xl text-5xl transition-all duration-300 text-white font-medium tracking-tighter"
          >
            Let's <span className="text-white/50">Connect</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="xl:text-xl lg:text-lg text-base transition-all duration-300 font-normal sm:w-1/2 w-3/4 text-white text-center"
          >
            Feel free to contact me if having any questions. I'm available for
            new projects or just for chatting.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="p-2 rounded-full bg-white/30 shadow-2xl"
            href="https://www.instagram.com/harvensnjaya/"
            target="blank"
          >
            <button className="p-4 rounded-full bg-black shadow-2xl hover:bg-linear-to-r hover:from-red-500 hover:to-white/50 transition-discrete transition-colors duration-300 cursor-pointer">
              <p className="lg:text-lg text-base transition-all duration-300 text-white gap-2 font-normal">
                Contact Me
              </p>
            </button>
          </motion.a>
        </div>

        <div className="flex w-full justify-between items-center md:flex-row flex-col md:gap-0 gap-5">
          <div className="md:py-2 py-1 md:px-4 px-2 border-t border-white border-b">
            <p className="md:text-base text-sm text-white font-normal">
              © Harven Sanjaya, 2025
            </p>
          </div>

          <div className="flex md:gap-10 gap-5">
            <a
              className="aspect-square rounded-full border flex items-center justify-center w-fit p-3 hover:border-white hover:text-white transition-all duration-300 cursor-pointer border-white/70 text-white/60"
              href="https://github.com/harvensanjaya"
              target="blank"
            >
              <VscGithubAlt size={20} className="shrink-0" />
            </a>

            <a
              className="aspect-square rounded-full border flex items-center justify-center w-fit p-3 hover:border-white hover:text-white transition-all duration-300 cursor-pointer border-white/70 text-white/60"
              href="https://www.linkedin.com/in/harven-sanjaya-76642b268/"
              target="blank"
            >
              <PiLinkedinLogoThin size={20} className="shrink-0" />
            </a>

            <a
              className="aspect-square rounded-full border flex items-center justify-center w-fit p-3 hover:border-white hover:text-white transition-all duration-300 cursor-pointer border-white/70 text-white/60"
              href="https://www.instagram.com/harvensnjaya/"
              target="blank"
            >
              <CiInstagram size={20} className="shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
