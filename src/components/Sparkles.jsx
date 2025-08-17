"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";
import { Countdown } from "./Countdown";
import StarshipAnimation from "./ui/StarshipAnimation";

export function SparklesPreview() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        HackOwasp 8.0
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

export function SparklesPreviewDark() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="h-screen w-full relative bg-transparent flex flex-col items-center justify-center overflow-hidden">
      {/* Flying Spaceship */}
      <motion.div
                style={{
                    position: "absolute",
                    top: "5%",
                    left: "5%",
                    backgroundColor: "transparent",
                    zIndex: 10
                }}
                animate={["initial"]}
                whileHover={["grow"]}
                variants={{
                    grow: {
                        scale: 1.1
                    },
                    initial: {
                        x: [-30, 30],
                        y: [-30, 30],
                        rotate: 10,
                        transition: {
                            delay: 0.3,
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }
                    }
                }}
            >
                <img src="/spaceship.png" alt="" className="h-32 w-36 md:h-56 md:w-64" />
            </motion.div>

      {/* Flying Lego Man */}
      <motion.div
                style={{
                    position: "absolute",
                    bottom: "10%",
                    right: "10%",
                    backgroundColor: "transparent",
                    rotateY: 180,
                    rotateZ: 12,
                    zIndex: 10
                }}
                animate={["initial"]}
                whileHover={["grow"]}
                variants={{
                    grow: {
                        scale: 1.1
                    },
                    initial: {
                        x: [-20, 30, 15, 20, 35, 26, 45, 58, 54, 51, 54, 35],
                        y: [-40, 20, 25, 31, 52, 45, 45, 22, 16, 51, 41, 21],
                        transition: {
                            delay: 0.3,
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }
                    }
                }}
            >
                <img src="/legoMan.png" alt="" className="h-32 w-24 md:h-56 md:w-44" />
            </motion.div>

      {/* Particles Background */}
      {/* <div className="absolute inset-0 w-full h-full">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.2}
                    maxSize={1}
                    particleDensity={150}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                    speed={1}
                />
            </div> */}

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-4">
          HackOwasp 8.0
        </h1>

        <div className="w-full max-w-[50rem] mx-auto relative px-4 sm:px-6">
          {/* Light effects container */}
          <div className="relative w-full h-4">
            {/* Main gradient lines */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-[90%] sm:w-3/4 blur-sm" />
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-[90%] sm:w-3/4" />

            {/* Accent gradient lines */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-[50%] sm:w-1/4 blur-sm" />
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-[50%] sm:w-1/4" />
          </div>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto px-4">
          Build Your Code, One Brick at a Time
        </p>

        {/* Countdown Component */}
        <div className="scale-90 sm:scale-100">
          <Countdown />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-8 md: mx-auto">

            <div
            className="apply-button"
            data-hackathon-slug="hackowasp7"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
            ></div>
            {/* <span className="bg-amber-300">google</span> */}
        </div>
      </div>
    </div>
  );
}

export function SparklesPreviewColorful() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlescolorful"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#00ff00"
          speed={0.5}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 relative z-20">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          HackOwasp 8.0
        </h1>
        <p className="text-neutral-300 cursor-default text-center">counter</p>
      </div>
    </div>
  );
}
