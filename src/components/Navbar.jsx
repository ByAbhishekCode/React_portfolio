import React, { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul flex gap-6">
      <li className="nav-li">
        <a className="nav-link text-white hover:text-brand" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-white hover:text-brand" href="#about">
          About Me
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-white hover:text-brand" href="#education">
          Education
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-white hover:text-brand" href="#projects">
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-white hover:text-brand" href="#contact">
          Contact Me
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-50 w-full backdrop-blur-lg bg-black shadow-[0.5px_0.5px_3px_#b74b4b]">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-white hover:text-brand"
          >
            Abhishek
          </a>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-white hover:text-brand focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.5 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
