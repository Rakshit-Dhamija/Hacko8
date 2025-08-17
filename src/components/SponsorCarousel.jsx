import React from "react";
import { InfiniteSlider } from "./ui/infinite-slider";
import { cn } from "@/lib/utils";
import DevfolioLogo from "/logos/Devfolio_Logo-White.svg";
import EthIndia from "/logos/ethindia-light.svg";
import Archies from "/logos/archies.png";
import ICP from "/logos/icp.png";
import Meghs from "/logos/meghs.jpeg";
import TimHortans from "/logos/tim-hortans.png";
import Bsep from "/logos/bsep.png";
import Polygon from "/logos/polygon.png";
import SwapSo from "/logos/swapso.png";
import TiffinWala from "/logos/tiffinwala.png";
import DAO from "/logos/DAO.jpg";
import Hindustan from "/logos/Hindustan.png";
import TCV from "/logos/TCV.png";
// import Web3 from "/logos/Web3.png";
// import Web3 from "/logos/IMG_0288.png";
import pepsico from "/logos/PepsiCo.png";
import cyndia from "/logos/cyndia.jpg";
import Siz from "/logos/SIZ.png";
import bsidesnoida from "/logos/bsidesnoida.png";
import X0 from "/logos/0X0.png";

// Define which logos should preserve their original colors (not be converted to grayscale)
const PRESERVE_COLORS = [
  "PepsiCo LOGO",
  "MEGHS LOGO", 
  "ARCHIES LOGO",
  "TIFFIN WALA LOGO",
  "SWAPSO LOGO",
  "HINDUSTAN LOGO",
  "TCV LOGO",
  "DAO LOGO",
  "CYNDIA LOGO",
  "BESIDESNOIDA LOGO",
  "SIZ LOGO",
  "X0 LOGO",
];

const sponsors = {
  tier1: [ // Title
    { name: "DEVFOLIO LOGO", logo: DevfolioLogo },
    { name: "ETHINDIA LOGO", logo: EthIndia },
    { name: "TIM HORTANS LOGO", logo: TimHortans },
    { name: "POLYGON LOGO", logo: Polygon },
    { name: "BSB LOGO", logo: Bsep },
    { name: "ICP LOGO", logo: ICP },
    { name: "SWAPSO LOGO", logo: SwapSo },
    { name: "PepsiCo LOGO", logo: pepsico },
  ],
  tier2: [ // Partners
    { name: "ARCHIES LOGO", logo: Archies },
    { name: "TIFFIN WALA LOGO", logo: TiffinWala },
    { name: "MEGHS LOGO", logo: Meghs },
  ],
  tier3: [ // Community Partners
    { name: "DAO LOGO", logo: DAO },  
    { name: "HINDUSTAN LOGO", logo: Hindustan },
    { name: "TCV LOGO", logo: TCV },
    { name: "CYNDIA LOGO", logo: cyndia },
    { name: "BESIDESNOIDA LOGO", logo: bsidesnoida },
    { name: "SIZ LOGO", logo: Siz },
    { name: "X0 LOGO", logo: X0 },
    // { name: "WEB3 LOGO", logo: Web3 },
  ],
  community:[
    { name: "TIFFIN WALA LOGO", logo: TiffinWala },
  ],
  // Add more tiers as needed
};

export function SponsorCarousel() {
  return (

    <div className="w-full bg-transparent py-8 md:py-16 relative overflow-hidden flex flex-col items-center">
      {/* Title */}
      <div className="text-center mb-6 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3">Past Sponsors</h2>
        <p className="text-gray-300 text-xs md:text-base">Proudly supported by industry leaders</p>
      </div>

      {/* Carousels Container */}
      <div className="w-full flex flex-col space-y-4 md:space-y-8">
        {/* Tier 1 - Title Sponsors */}
        <div className="relative">
          <InfiniteSlider
            duration={45}
            reverse={false}
            className="py-2"
          >
            {[...sponsors.tier1, ...sponsors.tier1].map((sponsor, idx) => (
              <SponsorCard
                key={`title-${idx}`}
                {...sponsor}
                preserveColors={PRESERVE_COLORS.includes(sponsor.name)}
                className="bg-white/10 border-slate-300/60 hover:border-slate-100 h-32 md:h-44 w-48 md:w-80 p-6 md:p-10 mx-3 md:mx-5"
              />
            ))}
          </InfiniteSlider>
        </div>

        {/* Tier 2 - Power Sponsors */}
        <div className="relative">
          <InfiniteSlider
            duration={35}
            reverse={true}
            className="py-2"
          >
            {[...sponsors.tier2, ...sponsors.tier2].map((sponsor, idx) => (
              <SponsorCard
                key={`power-${idx}`}
                {...sponsor}
                preserveColors={PRESERVE_COLORS.includes(sponsor.name)}
                className="bg-white/5 border-yellow-500/60 hover:border-yellow-400 h-28 md:h-40 w-40 md:w-72 p-4 md:p-8 mx-2 md:mx-4"
              />
            ))}
          </InfiniteSlider>
        </div>
        {/* Tier 3 - Associate Sponsors */}
        {/* <div className="relative">
          <InfiniteSlider
            duration={25}
            className="py-2"
          >
            {[...sponsors.tier3, ...sponsors.tier3].map((sponsor, idx) => (
              <SponsorCard
                key={`power-${idx}`}
                {...sponsor}
                preserveColors={PRESERVE_COLORS.includes(sponsor.name)}
                className="bg-white/5 border-slate-400 hover:border-slate-500 h-28 md:h-40 w-40 md:w-72 p-4 md:p-8 mx-2 md:mx-4"
              />
            ))}
          </InfiniteSlider>
        </div> */}
      </div>

      <div className="text-center my-6 md:my-12">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3">Community Partners</h2>
        {/* <p className="text-gray-300 text-xs md:text-base">Proudly supported by industry leaders</p> */}
      </div>

      <div className="w-full flex flex-col space-y-4 md:space-y-8">
        <div className="relative">
          <InfiniteSlider
            duration={45}
            // reverse={true}
            className="py-2"
          >
            {[...sponsors.tier3, ...sponsors.tier3].map((sponsor, idx) => (
              <SponsorCard
                key={`power-${idx}`}
                {...sponsor}
                preserveColors={PRESERVE_COLORS.includes(sponsor.name)}
                className="bg-white/5 border-slate-400 hover:border-slate-500 h-28 md:h-40 w-40 md:w-72 p-4 md:p-8 mx-2 md:mx-4"
              />
            ))}
          </InfiniteSlider>
        </div>
      </div>

      {/* Background Effects */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90 pointer-events-none" /> */}
    </div>
  );
}

function SponsorCard({ name, logo, className, preserveColors = false }) {
  return (
    <div
      className={cn(
        "relative rounded-xl border backdrop-blur-sm",
        "transition-all duration-300 hover:scale-105",
        "flex items-center justify-center",
        className
      )}
    >
      <img
        src={logo}
        alt={name}
        className={cn(
          "max-w-full max-h-full object-contain transition-opacity",
          preserveColors 
            ? "opacity-90 hover:opacity-100" 
            : "filter brightness-0 invert opacity-85 hover:opacity-100"
        )}
      />
    </div>
  );
}
