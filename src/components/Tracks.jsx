import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCode,
  faLaptopCode,
  faMobile,
  faServer,
  faShieldAlt,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const TracksSlider = () => {
  const tracks = [
    {
      title: "AI/ML",
      image:
        "https://res.cloudinary.com/dioelwfec/image/upload/v1744918368/4f5c6cff-9d7c-450f-a669-2bafbf78dace_r391rq.png",
      description:
        "Driven by data and algorithms to make a real difference? Join the HackOwasp 7.0 AI/ML Track and pioneer innovative projects that address critical societal needs. Leverage the power of artificial intelligence and machine learning to design solutions that uplift the marginalized and underprivileged. If you're passionate about using AI/ML for social good and creating impactful solutions, HackOwasp 7.0 is your platform to contribute.",
      icon: faLaptopCode,
      color: "from-blue-900 to-blue-700",
    },
    {
      title: "Blockchain",
      image:
        "https://res.cloudinary.com/dioelwfec/image/upload/v1744919804/ace7cb6b-a45e-4ba7-9e48-91ab05965edb_aq3tox.png",
      description:
        "Dive into the Decentralized Revolution with the Web3 Innovation Track! This track, organized by the OWASP Student Chapter, challenges you to build groundbreaking solutions leveraging blockchain, dApps, DeFi, NFTs, DAOs, and more. Unleash your creativity in the exciting world of Web3.",
      icon: faDatabase,
      color: "from-purple-900 to-purple-700",
    },
    {
      title: "Health",
      image:
        "https://res.cloudinary.com/dioelwfec/image/upload/v1744919807/Untitled_design_5_gmtsl0.png",
      description:
        "Join the HackOwasp 7.0 health track and work towards creating innovative projects that cater to the health needs of the marginalized and underprivileged. By leveraging technology, you can design solutions that increase accessibility to healthcare services, improve the quality of care, and reduce healthcare disparities. So, if you're looking for an opportunity to serve others and make a positive impact, HackOwasp 7.0 is the platform for you.",
      icon: faServer,
      color: "from-amber-900 to-amber-700",
    },
    {
      title: "Hardware",
      image:
        "https://res.cloudinary.com/dioelwfec/image/upload/v1744919805/2eb010a8-0db0-4744-9d57-585d2c285b43_suik3j.png",
      description:
        "From electronics to IoT devices and beyond, creativity and innovation in Hardware lets you to push the boundaries of physical computing and realize your visions. Design and prototype innovative solutions that address real-world challenges and enhance user experiences. Whether you're an experienced hardware enthusiast or a curious beginner, this is a chance to explore, experiment, and create groundbreaking hardware innovations.",
      icon: faServer,
      color: "from-cyan-900 to-cyan-700",
    },
    {
      title: "Cybersecurity",
      image:
        "https://res.cloudinary.com/dioelwfec/image/upload/v1744918372/ce447554-a690-4835-bf38-0083d847311d_eq20e5.png",
      description:
        "In an era of rapid digital transformation, the imperative to secure financial systems and data is paramount, underlining the critical intersection of cybersecurity and finance.Dive deep into this, leveraging cutting-edge technologies and strategic approaches to safeguard financial transactions and fend off cyber threats. Shape the future of cybersecurity in finance and ensure the integrity of global financial systems",
      color: "from-red-900 to-red-700",
    },
    {
      title: "Open Innovation",
      image:
        "https://res.cloudinary.com/dioelwfec/image/upload/v1744918361/1039a7a6-ae6b-43fe-900c-dd921ba8b437_ovafeu.png",
      description:
        "Explore boundless creativity and collaboration in the Open Innovation track. Break down barriers and unlock new possibilities as you tackle real-world challenges with fellow participants. Harness the power of open-source technologies and interdisciplinary teamwork to craft innovative solutions that could shape the future. Let your imagination run wild and make a meaningful impact through open innovation.",
      color: "from-green-900 to-green-700",
    },
  ];

  // Track position indices
  const [positions, setPositions] = useState({
    leftEndBack: 0,
    leftEnd: 1,
    leftMid: 2,
    center: 3,
    rightMid: 4,
    rightEnd: 5,
    rightEndBack: 6,
  });

  // Initialize positions based on number of tracks

  useEffect(() => {
    const center = Math.floor(tracks.length / 2);
    setPositions({
      leftEndBack: (center - 3 + tracks.length) % tracks.length,
      leftEnd: (center - 2 + tracks.length) % tracks.length,
      leftMid: (center - 1 + tracks.length) % tracks.length,
      center: center % tracks.length,
      rightMid: (center + 1) % tracks.length,
      rightEnd: (center + 2) % tracks.length,
      rightEndBack: (center + 3) % tracks.length,
    });
  }, []); // Empty dependency array ensures it runs only once

  // Touch handling
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Slide left function
  const leftScroll = () => {
    setPositions((prev) => {
      const newPos = { ...prev };
      Object.keys(newPos).forEach((key) => {
        newPos[key] = (newPos[key] - 1 + tracks.length) % tracks.length;
      });
      return newPos;
    });
  };

  // Slide right function
  const rightScroll = () => {
    setPositions((prev) => {
      const newPos = { ...prev };
      Object.keys(newPos).forEach((key) => {
        newPos[key] = (newPos[key] + 1) % tracks.length;
      });
      return newPos;
    });
  };

  // Touch event handlers
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].clientX;
      const diffX = touchStartX.current - touchEndX.current;

      if (Math.abs(diffX) > 50) {
        diffX > 0 ? rightScroll() : leftScroll();
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("touchstart", handleTouchStart);
      slider.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("touchstart", handleTouchStart);
        slider.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  // Helper function to get position styling
  const getPositionStyles = (index) => {
    const {
      leftEndBack,
      leftEnd,
      leftMid,
      center,
      rightMid,
      rightEnd,
      rightEndBack,
    } = positions;

    // Position 3 (center)
    if (index === center) {
      return {
        left: "50%",
        zIndex: "40",
        transform: "translate(-50%, 0) rotateY(0deg) scale(1, 1)",
        opacity: "1",
        boxShadow: "0px 0.4rem 1.6rem rgba(0, 0, 0, 0.5)",
        hover: {
          boxShadow: "0px 0rem 1.8rem rgba(0, 0, 0, 0.7)",
          transform: "translate(-50%, 0) rotateY(0deg) scale(1.05, 1.05)",
        },
      };
    }

    // Position 2 (left middle)
    if (index === leftMid) {
      return {
        left: "35%",
        zIndex: "20",
        transform: "translate(-50%, 0) rotateY(-1deg) scale(0.9, 0.9)",
        opacity: "1",
        boxShadow: "0px 0.4rem 1.6rem rgba(0, 0, 0, 0.3)",
      };
    }

    // Position 4 (right middle)
    if (index === rightMid) {
      return {
        left: "65%",
        zIndex: "20",
        transform: "translate(-50%, 0) rotateY(1deg) scale(0.9, 0.9)",
        opacity: "1",
        boxShadow: "0px 0.4rem 1.6rem rgba(0, 0, 0, 0.3)",
      };
    }

    // Position 1 (left edge)
    if (index === leftEnd) {
      return {
        left: "20%",
        zIndex: "10",
        transform: "translate(-50%, 0) rotateY(-2deg) scale(0.8, 0.8)",
        opacity: "1",
        boxShadow: "0px 0.4rem 1.6rem rgba(0, 0, 0, 0.1)",
      };
    }

    // Position 5 (right edge)
    if (index === rightEnd) {
      return {
        left: "80%",
        zIndex: "10",
        transform: "translate(-50%, 0) rotateY(2deg) scale(0.8, 0.8)",
        opacity: "1",
        boxShadow: "0px 0.4rem 1.6rem rgba(0, 0, 0, 0.1)",
      };
    }

    // Position none (hidden)
    return {
      left: "50%",
      zIndex: "0",
      transform: "translate(-50%, 0) rotateY(0deg) scale(0.7, 0.7)",
      opacity: "0",
      boxShadow: "0px 0.4rem 1.6rem rgba(0, 0, 0, 0)",
    };
  };

  // Check if a slide is in center position
  const isCenter = (index) => {
    return index === positions.center;
  };

  return (
    <div className="h-[35rem] w-full max-w-[1200px] flex justify-center items-center flex-col md:flex-row relative mt-8 select-none">
      {/* Left Arrow */}
      <div
        className="h-full hidden w-[10%] md:flex justify-center items-center cursor-pointer"
        onClick={leftScroll}
      >
        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-white transition-colors">
          <FontAwesomeIcon icon={faAngleLeft} size="lg" />
        </div>
      </div>

      {/* Slider Content */}
      <div
        ref={sliderRef}
        className="min-h-[600px] w-[90%] flex justify-center items-center relative overflow-hidden"
        style={{ perspective: "100px" }}
      >
        {tracks.map((track, index) => {
          const posStyles = getPositionStyles(index);
          const isCenterSlide = isCenter(index);

          return (
            <div
              key={index}
              className={`
                absolute h-[550px] w-[250px] md:w-[350px] bg-gradient-to-br ${
                  track.color
                } rounded-[25px]
                flex justify-center items-center
                transition-all duration-500 ease-in-out
                ${isCenterSlide ? "cursor-pointer" : ""}
              `}
              style={{
                left: posStyles.left,
                zIndex: posStyles.zIndex,
                transform: posStyles.transform,
                opacity: posStyles.opacity,
                boxShadow: posStyles.boxShadow,
                transformStyle: "preserve-3d",
              }}
              {...(isCenterSlide && {
                onMouseOver: (e) => {
                  e.currentTarget.style.boxShadow = posStyles.hover.boxShadow;
                  e.currentTarget.style.transform = posStyles.hover.transform;
                },
                onMouseOut: (e) => {
                  e.currentTarget.style.boxShadow = posStyles.boxShadow;
                  e.currentTarget.style.transform = posStyles.transform;
                },
              })}
            >
              {/* Background pattern overlay */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] rounded-[25px]"></div>

              {/* Track media */}
              <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-[25px] overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <img
                  src={track.image}
                  alt={track.title}
                  className="absolute h-full w-full object-cover"
                />
              </div>

              {/* Track content */}
              <div className="absolute top-0 left-0 w-full h-full rounded-[25px] overflow-hidden p-3 flex flex-col justify-between text-white">
                <div className="flex items-center justify-center mt-[55%]">
                  <h3 className="text-xl mt-24 font-bold text-center">
                    {track.title}
                  </h3>
                  {/* <div className="bg-white bg-opacity-20 rounded-full p-4 mb-3">
                    <FontAwesomeIcon icon={track.icon} className="text-2xl" />
                  </div> */}
                </div>

                <div className="flex-1 mt-8 overflow-auto">
                  <p className="text-[13px] text-justify text-white text-opacity-90">
                    {track.description}
                  </p>
                </div>
              </div>

              {/* Reflection effect */}
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-b from-white to-transparent opacity-5 rounded-b-[25px]"></div>
            </div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <div
        className="h-full w-[10%] hidden md:flex justify-center items-center cursor-pointer"
        onClick={rightScroll}
      >
        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-white transition-colors">
          <FontAwesomeIcon icon={faAngleRight} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default TracksSlider;
