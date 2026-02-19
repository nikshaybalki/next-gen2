
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthOverlay from './AuthOverlay';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, signOut, isAuthOpen, openAuth, closeAuth } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Academy", path: "/academics" },
    { name: "The Vault", path: "/vault" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[500] h-[60px] md:h-auto px-6 py-2 md:py-6 font-display flex items-center justify-between bg-[#080808]/95 backdrop-blur-md md:bg-transparent border-b border-white/5 md:border-none">

        {/* LOGO */}
        <Link to="/" className="logo z-[600] group flex items-center pointer-events-auto">
          <div className="flex flex-col leading-none">
            <span className="text-[1.2rem] md:text-2xl font-display font-black tracking-tighter text-white">NEXGEN</span>
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] text-accent">ACADEMY</span>
          </div>
        </Link>

        {/* DESKTOP NAV PILL */}
        <div className="hidden md:flex nav-desktop-links items-center gap-1 bg-[#111111]/80 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-2xl pointer-events-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-6 py-2.5 rounded-full text-[11px] font-mono font-bold tracking-widest transition-all ${location.pathname === link.path ? 'bg-accent text-black' : 'text-gray-400 hover:text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* DESKTOP CTA (JOIN ELITE) */}
        <div className="hidden md:block join-elite-btn pointer-events-auto">
          <button
            onClick={() => {
              if (isLoggedIn) navigate('/courses');
              else openAuth();
            }}
            className="bg-accent text-black px-8 py-3 rounded-full font-mono font-bold text-[11px] tracking-widest shadow-neon hover:shadow-neon-strong transition-all uppercase"
          >
            Join Elite
          </button>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className={`nav-hamburger md:hidden ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          <span className="ham-line"></span>
          <span className="ham-line"></span>
          <span className="ham-line"></span>
        </button>

        {/* MOBILE FULLSCREEN OVERLAY */}
        <div className={`mobile-nav-overlay md:hidden ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
          <div className="mobile-nav-links">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                data-delay={i}
                onClick={toggleMenu}
                className="mobile-nav-link"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button
            onClick={() => {
              toggleMenu();
              if (isLoggedIn) navigate('/courses');
              else openAuth();
            }}
            className="mobile-nav-cta"
          >
            JOIN ELITE
          </button>
        </div>
      </nav>

    </>
  );
};

export default Navbar;