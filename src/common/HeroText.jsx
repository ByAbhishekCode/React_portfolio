import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import SocialIcons from "./SocialIcons";

const HeroText = () => {
  const words = ["Web Applications", "MERN Developer", "Full Stack Developer"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col  hidden md:flex c-space">
        <motion.h1
          className="text-3xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm <span className="text-brand font-bold">Abhishek</span>
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-brand text-3xl leading-snug"
            />
          </motion.div>
          <motion.p
            className="text-xl font-medium  font-sans text-neutral-400 max-w-2xl leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Hi! I'm Abhishek, a Web Developer passionate about building modern
            and responsive websites. With skills in HTML, CSS, JavaScript,
            React, Node.js, and MongoDB, I focus on creating clean,
            user-friendly, and professional web experiences using the MERN
            Stack.
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            <SocialIcons />
          </motion.div>
          <motion.a
            href="assets/resume/AbhishekResume_.pdf"
            download
            className="inline-block mt-5 mb-5 bg-[#b74b4b] hover:bg-[#9c3c3c] text-white font-medium py-3 px-6 rounded-xl  active:scale-95 focus:ring-2 focus:ring-[#b74b4b] focus:outline-none shadow-md hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-1 md:hidden">
        <motion.p
          className="text-2xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm <span className="text-brand font-bold">Abhishek</span>
        </motion.p>
        <div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-brand text-2xl leading-snug"
            />
          </motion.div>
          <motion.p
            className="text-sm font-normal font-sans text-neutral-400 max-w-md mx-auto leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Hi! I'm Abhishek, a Web Developer passionate about building modern
            and responsive websites. With skills in HTML, CSS, JavaScript,
            React, Node.js, and MongoDB, I focus on creating clean,
            user-friendly, and professional web experiences using the MERN
            Stack.
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            <SocialIcons />
          </motion.div>
          <motion.a
            href="assets/resume/AbhishekResume_.pdf"
            download
            className="inline-block mt-5 mb-5 bg-[#b74b4b] hover:bg-[#9c3c3c] text-white font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
