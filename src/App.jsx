// import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Particles } from "./common/Particles";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Global Particles Background */}
      <Particles
        className="fixed inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {/* Sections */}
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
