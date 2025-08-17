import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TimelineDemo } from "./components/TimelineDemo";
import { Logos3 } from "./components/logos3";
import TracksSlider from "./components/Tracks";
import SplineScreen from "./components/SplineScene";
import AboutUs from "./components/3dCarousel";
import figurine from "/tracks.svg";
import { SparklesPreviewDark } from "./components/Sparkles";
import { SponsorCarousel } from "./components/SponsorCarousel";
import "./App.css";
import {
  SparklesPreview,
  SparklesPreviewColorful,
} from "./components/Sparkles";
import { Spline } from "lucide-react";
import { motion } from "framer-motion";
import SparkleBg from "./components/SparkleEffect";
import { SparklesCore } from "./components/ui/sparkles";
import Footer from "./components/Footer";
import FAQAccordion from "./components/Accordian";
import { WinnersSection } from "./components/Prices";
// App.jsx - Updated structure
function App() {
  return (
    <div
      id="home"
      className="min-h-screen relative bg-black overflow-x-hidden w-screen"
    >
      {/* Global sparkle background - higher z-index than -1 but lower than content */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <SparklesCore
          id="global-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.3}
          opacity={0.3}
        />
      </div>

      {/* Hero section - no need for its own sparkles background */}
      <div className="z-0">
        <SparklesPreviewDark />
      </div>

      <Navbar />

      {/* Other sections with z-10 or higher to appear above sparkles */}
      <div id="about" className="z-0 flex justify-center items-center w-full mt-16">
        <AboutUs />
      </div>

      {/* <div id="timeline" className="bg-transparent z-0 w-full">
        <TimelineDemo />
      </div> */}

      {/* <div
        id="tracks"
        className="flex flex-col md:flex-row justify-between items-center mt-16 pt-16 px-4"
        style={{
          backgroundImage: "url(/lego-border.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full md:w-1/4 flex justify-center items-center mb-8 md:mb-0">
          <motion.div
            className="relative bg-gray-900 dark:bg-gray-800 rounded-lg p-6 pb-0 border-2 border-yellow-500 dark:border-yellow-600"
            style={{
              boxShadow: "0 8px 0 rgba(234, 179, 8, 0.5)",
              backgroundImage: "radial-gradient(circle at 10px 10px, rgba(234, 179, 8, 0.15) 3px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="absolute top-0 left-0 right-0 flex justify-center -mt-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-5 h-5 mx-1 rounded-full bg-yellow-500 dark:bg-yellow-600 border border-yellow-600 dark:border-yellow-700"
                ></div>
              ))}
            </div>
            <img src={figurine || "/placeholder.svg"} alt="LEGO figurine" className="w-full rotate-y-180" />
          </motion.div>
        </div>

        <div className="w-full md:w-3/4 mt-8 md:mt-0 md:ml-6 pb-10">
          <motion.div
            className="bg-gray-900 rounded-lg border-2 border-blue-500 dark:border-blue-600 "
            style={{
              boxShadow: "0 8px 0 rgba(59, 130, 246, 0.5)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Hackathon Tracks</h2>
              <div className="flex">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-4 h-4 mx-1 rounded-full bg-yellow-500 dark:bg-yellow-600"></div>
                ))}
              </div>
            </div>
            <div className="">
              <TracksSlider />
            </div>
          </motion.div>
        </div>
      </div> */}

      {/* <div id="winners">
        <WinnersSection />
      </div> */}

      {/* Partners Section */}
      <div id="partners" className="z-0 bg-transparent">
        <section>
          <SponsorCarousel />
        </section>
      </div>

      <div id="faq" className="z-0 bg-transparent">
        <FAQAccordion />
      </div>

      <div className="z-0">
        <Footer />
      </div>
    </div>
  );
}


export default App;
