
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
      <div className="fixed top-0 left-0 w-full z-[100] h-[60px] md:h-auto px-6 py-2 md:py-6 font-display pointer-events-none flex items-center justify-between">

        {/* 1. STATIC LOGO (Top Left) */}
        <Link to="/" className="z-[110] group flex items-center pointer-events-auto">
          <div className="text-xl md:text-2xl font-display tracking-tight text-white mix-blend-difference">
            <span className="font-bold">NEXGEN</span> <span className="font-medium tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-accent to-white ml-2">ACADEMY</span>
          </div>
        </Link>

        {/* 2. FLOATING MENU PILL (Center) */}
        <div className="flex justify-center w-full">
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            layout
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            style={{ backdropFilter: "blur(16px)" }}
            className={`
              pointer-events-auto
              border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-black/40
              flex items-center justify-center gap-8 md:gap-14
              transition-all duration-500 ease-in-out
              ${isScrolled
                ? 'rounded-full px-16 py-5 mt-0 w-fit min-w-[600px]'
                : 'rounded-2xl px-12 py-4 mt-2 w-[min(95%,1200px)]'
              }
            `}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`
                  font-bold text-gray-300 hover:text-accent transition-colors tracking-widest
                  ${isScrolled ? 'text-sm' : 'text-base'}
                `}
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        </div>

        {/* 3. STATIC AUTH & UTILS (Top Right) */}
        <div className="z-[110] flex items-center gap-4 pointer-events-auto">
          {isLoggedIn ? (
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/profile"
                className="bg-accent text-black font-black text-[10px] px-6 py-2 rounded-full uppercase tracking-widest hover:shadow-neon transition-all"
              >
                Profile
              </Link>
              <button
                onClick={() => signOut()}
                className="text-gray-400 hover:text-white text-[8px] font-black uppercase tracking-widest"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={openAuth}
              className="hidden md:block bg-white text-black font-black text-[10px] px-6 py-2 rounded-full uppercase tracking-widest hover:bg-accent transition-all"
            >
              Join Elite
            </button>
          )}

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 bg-white/5 rounded-full border border-white/10 text-white"
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </div>

      <AuthOverlay isOpen={isAuthOpen} onClose={closeAuth} />

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ translateY: '-100%' }}
            animate={{ translateY: 0 }}
            exit={{ translateY: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#080808]/fb0 backdrop-blur-[20px] z-[200] flex flex-col"
            style={{ backgroundColor: 'rgba(8,8,8,0.97)' }}
          >
            {/* Mobile Top Bar inside overlay to keep the close button visible or handle X */}
            <div className="flex items-center justify-between px-6 h-[60px]">
              <div className="text-xl font-display font-bold text-white">
                NEXGEN <span className="text-cyan-400">ACADEMY</span>
              </div>
              <button
                onClick={toggleMenu}
                className="text-white p-2"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 + 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    to={link.path}
                    onClick={toggleMenu}
                    className="block py-4 font-display text-[2rem] font-bold uppercase tracking-widest text-gray-400 hover:text-accent border-b border-white/5"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-8">
              <button
                onClick={() => { openAuth(); toggleMenu(); }}
                className="w-full h-[56px] bg-accent text-black font-display text-[1.5rem] font-bold uppercase tracking-widest rounded-none"
              >
                JOIN ELITE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default Navbar;