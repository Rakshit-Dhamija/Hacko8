"use client";
import {
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Globe,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";
import { IconBrandDiscord } from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div
      className="relative w-full text-white overflow-hidden"
      style={{
        backgroundImage: "url(/SmallGroup.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        {/* Mobile-optimized layout */}
        <div className="grid grid-cols-1 gap-10 mb-16">
          {/* About section - always at top */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-400">
              HackOwasp 8.0
            </h3>
            <p className="text-gray-300 mb-6">
              Join us for the ultimate 36-hour coding challenge where innovation
              meets technology. Build, collaborate, and transform your ideas
              into reality.
            </p>
            <div className="flex space-x-4">
              <SocialIcon
                link="https://x.com/Owasp_tiet?t=tbxhHyoQdvgBXQyoPwl6kQ&s=08"
                icon={<Twitter size={18} />}
              />
              <SocialIcon
                link="https://www.instagram.com/owasp_tiet?igsh=MW1jeWZmb3lyb3Jodg=="
                icon={<Instagram size={18} />}
              />
              <SocialIcon
                link="https://www.facebook.com/share/16H1xwnTrh/"
                icon={<Facebook size={18} />}
              />
              <SocialIcon
                link="https://www.linkedin.com/company/owasp-tiet/"
                icon={<Linkedin size={18} />}
              />
              <SocialIcon
                link="https://discord.gg/Tgu28Mt99v"
                icon={<IconBrandDiscord size={18} />}
              />
            </div>
          </div>

          {/* Quick Links and Contact Us in a row on mobile */}
          <div className="grid grid-cols-2 gap-6">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-400">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <FooterLink href="#home">Home</FooterLink>
                <FooterLink href="#timeline">Timeline</FooterLink>
                <FooterLink href="#partners">Partners</FooterLink>
                <FooterLink href="#home">Register</FooterLink>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-400">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-sm">
                    Thapar Institute, Patiala, Punjab
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">owasptu@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">+91 95013 49322</span>
                </li>
                <li className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-gray-400 flex-shrink-0" />
                  <a href="https://www.owasptiet.com/" target="_blank">
                    <span className="text-gray-300 text-sm">owasptiet.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>©️ {currentYear} HackOwasp 8.0. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <div className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </div>
            <div className="hover:text-gray-400 transition-colors">
              Terms of Service
            </div>
            <div className="hover:text-gray-400 transition-colors">
              Code of Conduct
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper components remain the same
const SocialIcon = ({ icon, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-600 hover:text-white transition-colors duration-300"
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
};

const FooterLink = ({ href, children }) => {
  return (
    <li>
      <motion.a
        href={href}
        className="text-gray-300 hover:text-gray-400 transition-colors duration-200 flex items-center"
        whileHover={{ x: 5 }}
      >
        <span className="mr-2">→</span> {children}
      </motion.a>
    </li>
  );
};
