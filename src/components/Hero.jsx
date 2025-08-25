import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../common/HeroText";
import { Suspense } from "react";
import { Float } from "@react-three/drei";
import { Astronaut } from "../common/Astronaut";
import Loader from "../common/Loader";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Particles } from "../common/Particles";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start px-4 md:px-3"
      id="home"
    >
      <HeroText />
      <figure className="absolute inset-0 w-screen h-[155vh] md:h-screen">
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float
              speed={0.1}
              rotationIntensity={0.4}
              floatIntensity={0.1}
              floatingRange={[-0.1, 0.1]}
            >
              <Astronaut
                scale={isMobile ? 0.15 : 0.25}
                position={isMobile ? [0, 1, -2] : [2.5, -1, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}
export default Hero;
