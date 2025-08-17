"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export default function SparkleBg() {
  return (
    <div className="fixed inset-0 w-full h-full z-[-1] pointer-events-none">
      <SparklesCore
        id="fullscreen-sparkles"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={70}
        className="w-full h-full"
        particleColor="#FFFFFF"
        speed={0.3}
        opacity={0.3}
      />
    </div>
  );
}
