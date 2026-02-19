import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  const linkedinUrl = "https://www.linkedin.com/in/vaibhav-kadnar-016074189/";
  const youtubeUrl = "https://www.youtube.com/@VaibhavKadnar";
  const instagramUrl = "https://www.instagram.com/vaibhavkadnarofficial/";

  const socialLinks = [
    { icon: <FaYoutube />, link: youtubeUrl, color: "#FF0000" },
    { icon: <FaInstagram />, link: instagramUrl, color: "#E1306C" },
    { icon: <FaWhatsapp />, link: "#", color: "#25D366" },
    { icon: <FaLinkedinIn />, link: linkedinUrl, color: "#0077B5" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 px-6 py-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-accent/30 shadow-[0_0_50px_#00F7FF]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* LEFT SIDE: COMPANY LOGO WITH ANIMATION */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col items-center md:items-start group"
        >
          <motion.div
            animate={{ 
              filter: ["drop-shadow(0 0 2px #00F7FF)", "drop-shadow(0 0 8px #00F7FF)", "drop-shadow(0 0 2px #00F7FF)"] 
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-2"
          >
            {/* Replace with your actual logo image tag if available */}
            <div className="text-2xl font-black tracking-tighter text-white">
              NEXGEN <span className="text-accent">ACADEMY</span>
            </div>
          </motion.div>
          <div className="h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500 shadow-neon" />
        </motion.div>

        {/* MIDDLE SIDE: COPYRIGHT & CREATOR SIGNATURE */}
        {/* <div className="text-center space-y-2">
          <p className="text-gray-500 text-[10px] tracking-[0.3em] uppercase">
            © 2026 NexGen Academy. All Rights Reserved.
          </p>
          <motion.a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gray-400 text-sm font-medium">Created by</span>
            <span className="text-white font-black tracking-tight group-hover:text-accent transition-colors underline decoration-accent/30 underline-offset-4">
              Nikshay . A . Balki
            </span>
            <motion.div 
              whileHover={{ rotate: 360 }}
              className="text-accent text-lg"
            >
              <FaLinkedinIn />
            </motion.div>
          </motion.a>
        </div> */}








{/* MIDDLE SIDE: ENHANCED COPYRIGHT & SIGNATURE */}
<div className="flex flex-col items-center justify-center space-y-4">
  {/* Copyright with a more technical font feel */}
  <div className="flex items-center gap-3">
    <div className="h-[1px] w-8 bg-white/10" />
    <p className="text-gray-500 text-[9px] tracking-[0.4em] uppercase font-medium">
      © 2026 NexGen Academy
    </p>
    <div className="h-[1px] w-8 bg-white/10" />
  </div>

  {/* Signature Badge */}
  <motion.a
    href={linkedinUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="relative px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm group flex items-center gap-3 transition-all duration-500 hover:border-accent/50 hover:bg-accent/[0.02]"
    whileHover={{ y: -3 }}
  >
    {/* Animated Corner for the badge */}
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent/0 group-hover:border-accent/100 transition-all duration-500 rounded-tr-md" />
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent/0 group-hover:border-accent/100 transition-all duration-500 rounded-bl-md" />

    <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest group-hover:text-gray-300 transition-colors">
      Designed by
    </span>

    <div className="flex items-center gap-2">
      <span className="text-white font-black tracking-tighter text-sm group-hover:text-accent transition-colors">
        Nikshay . A . Balki
      </span>
      
      {/* LinkedIn Icon with a "Radar" pulse effect */}
      <div className="relative flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-accent/20 rounded-full"
        />
        <motion.div 
          whileHover={{ rotate: 15, scale: 1.2 }}
          className="text-accent text-base relative z-10"
        >
          <FaLinkedinIn />
        </motion.div>
      </div>
    </div>
  </motion.a>
  
  <p className="text-[8px] text-gray-600 tracking-[0.5em] uppercase font-bold">
    All Systems Operational
  </p>
</div>
















        {/* RIGHT SIDE: ANIMATING SOCIAL LOGOS */}
        <div className="flex gap-6 items-center">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ 
                y: -5, 
                color: social.color,
                filter: `drop-shadow(0 0 8px ${social.color})` 
              }}
              className="text-gray-500 text-xl transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;