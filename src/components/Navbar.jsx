import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DevfolioButton from "./DevfolioButton";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      const closeMenu = () => setIsMenuOpen(false);
      document.addEventListener('click', closeMenu);
      return () => document.removeEventListener('click', closeMenu);
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    // { name: "Timeline", href: "#timeline" },
    { name: "Accommodation", href: "/#", target: "_blank" },
    // { name: "Workshops", href: "https://forms.gle/oJFXHmn9XjKJ9FiW6", target: "_blank" },
    // { name: "Tracks", href: "#tracks" },
    // { name: "Winners", href: "#winners" },
    { name: "Partners", href: "#partners" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
      style={{
        backgroundColor: isScrolled || isMenuOpen ? "rgba(0, 0, 0, 0.8)" : "transparent",
        backdropFilter: isScrolled || isMenuOpen ? "blur(10px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <span className="text-white text-xl font-bold">HackOwasp 8.0</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                target={item.target || "_self"}
                rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            {/* <DevfolioButton /> */}
          </div>

          {/* Mobile Menu Button - Enhanced with background */}
          <div className="md:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="relative z-50 p-2 rounded-md bg-purple-800/50 hover:bg-purple-700/70 text-gray-300 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Improved with AnimatePresence and better styling */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute left-0 right-0 top-[calc(100%)] bg-black/90 backdrop-blur-md border-t border-purple-900/50 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-2 py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target={item.target || "_self"}
                    rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="block px-4 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-purple-600/30 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                {/* <div className="pt-2 px-4">
                  <DevfolioButton />
                </div> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
