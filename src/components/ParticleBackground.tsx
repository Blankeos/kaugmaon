"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, Container } from "tsparticles-engine";
import particlesConfig from "@/lib/particlesConfig";

type Props = {};
const ParticleBackground: React.FC<Props> = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    await console.log(container);
  }, []);

  return (
    <div>
      <div className="fixed backdrop-blur-[4px] z-5 h-screen w-screen -z-10" />
      <Particles
        className="absolute min-h-screen -z-20 w-full"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{ ...particlesConfig }}
      />
    </div>
  );
};

export default ParticleBackground;
