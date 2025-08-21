import { useRef } from "react";
import { Frameworks } from "../common/Frameworks";
import { Globe } from "../common/Globe";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <div className="flex items-center justify-center mb-10">
        <div className="flex-grow border-t border-gray-600"></div>
        <h2 className="mx-4 text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
          About Me
        </h2>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-8  rounded-lg rounded-b-none p-8 shadow-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
          {/* Grid 3 */}
          <div className="grid-black-color grid-4">
            <div className="z-10 w-[50%]">
              <p className="headtext">Time Zone</p>
              <p className="subtext">
                I'm based in Mars, and open to remote work worldwide😅.
              </p>
            </div>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe />
            </figure>
          </div>
          {/* Grid 5 */}
          <div className="grid-default-color grid-5">
            <div className="z-10 w-[50%]">
              <p className="headText">Teck Stack</p>
              <p className="subtext">
                I specialize in a variety of languages, frameworks, and tools
                taht allow me to build robust and scalable applications
              </p>
            </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
              <Frameworks />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8  rounded-lg rounded-t-none p-8 shadow-lg">
        {/* Left Skills Column */}
        <div className="md:w-1/2 space-y-10">
          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-semibold mb-10 text-white">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-12">
              {/* HTML */}
              <div className="relative flex flex-col items-center group cursor-pointer toggle-tooltip">
                <img
                  src="./assets/logos/html5.svg"
                  alt="HTML"
                  className=" w-15  "
                />
                <div className="tooltip absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 px-3 py-1 rounded-xl text-sm font-semibold text-white shadow-md [background-color:#e44d26]">
                  HTML
                  <div className="absolute w-3 h-3 [background-color:#e44d26] rotate-45 -bottom-1.5 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
              {/* CSS */}
              <div className="relative flex flex-col items-center group cursor-pointer toggle-tooltip">
                <img
                  src="./assets/logos/css3.svg"
                  alt="CSS"
                  className=" w-15"
                />
                <div className="tooltip absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 px-3 py-1 rounded-xl text-sm font-semibold text-white shadow-md [background-color:#264de4]">
                  CSS
                  <div className="absolute w-3 h-3 [background-color:#264de4] rotate-45 -bottom-1.5 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
              {/* JavaScript */}
              <div className="relative flex flex-col items-center group cursor-pointer toggle-tooltip">
                <img
                  src="./assets/logos/javascript.svg"
                  alt="JavaScript"
                  className=" w-15  "
                />
                <div className="tooltip absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 px-3 py-1 rounded-xl text-sm font-semibold text-black shadow-md [background-color:#f7df1e]">
                  JavaScript
                  <div className="absolute w-3 h-3 [background-color:#f7df1e] rotate-45 -bottom-1.5 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
              {/* React */}
              <div className="relative flex flex-col items-center group cursor-pointer toggle-tooltip">
                <img
                  src="./assets/logos/react.svg"
                  alt="React"
                  className=" w-15  "
                />
                <div className="tooltip absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 px-3 py-1 rounded-xl text-sm font-semibold text-black shadow-md [background-color:#61dafb]">
                  React
                  <div className="absolute w-3 h-3 [background-color:#61dafb] rotate-45 -bottom-1.5 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-2xl font-semibold mb-10 text-white">Backend</h3>
            <div className="flex flex-wrap gap-12">
              {/* MongoDB */}
              <div className="relative flex flex-col items-center group cursor-pointer toggle-tooltip">
                <img
                  src="./assets/logos/mongodb.svg"
                  alt="MongoDB"
                  className=" w-15  "
                />
                <div className="tooltip absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 px-3 py-1 rounded-xl text-sm font-semibold text-white shadow-md [background-color:#4db33d]">
                  MongoDB
                  <div className="absolute w-3 h-3 [background-color:#4db33d] rotate-45 -bottom-1.5 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
              {/* Express */}
              <div className="relative flex flex-col items-center group cursor-pointer toggle-tooltip">
                <img
                  src="./assets/logos/expressjs.svg"
                  alt="Express.js"
                  className=" w-15  "
                />
                <div className="tooltip absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 px-3 py-1 rounded-xl text-sm font-semibold text-black shadow-md bg-white">
                  Express.js
                  <div className="absolute w-3 h-3 bg-white rotate-45 -bottom-1.5 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
              {/* NodeJS */}
              <div className="relative flex flex-col items-center group cursor-pointer toggle-tooltip">
                <img
                  src="./assets/logos/node.svg"
                  alt="Node.js"
                  className=" w-15  "
                />
                <div className="tooltip absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 px-3 py-1 rounded-xl text-sm font-semibold text-white shadow-md [background-color:#8cc84b]">
                  Node.js
                  <div className="absolute w-3 h-3 [background-color:#8cc84b] rotate-45 -bottom-1.5 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Text Column */}
        <div
          className="md:w-1/2 text-lg leading-relaxed space-y-4 reveal-type break-words whitespace-normal"
          data-bg-color="#636161"
          data-fg-color="white"
        >
          <p>
            Hello! I am <strong>Abhishek Kumar</strong>, a passionate{" "}
            <strong>Full Stack Web Developer</strong> from{" "}
            <strong>Kanpur, India</strong>. I have completed my{" "}
            <strong>MCA</strong> and developed a solid web technology
            foundation.
          </p>
          <p>
            I specialize in{" "}
            <strong>MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong>{" "}
            with hands-on skills in{" "}
            <strong>HTML, CSS, JavaScript, TailwindCSS, Bootstrap.</strong>
          </p>
          <p>
            <strong>Currently</strong>, I’m focused on real-world projects,
            backend API building, and cloud deployment (GitHub, Netlify).
          </p>
          <p>
            <strong>My Goal:</strong> Become a professional Full Stack Developer
            and build impactful web solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
