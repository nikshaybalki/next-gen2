
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
      <div className="fixed top-0 left-0 w-full z-[100] px-6 py-6 font-sans pointer-events-none">

        {/* 1. STATIC LOGO (Top Left) */}
        <Link to="/" className="absolute top-6 left-6 z-[110] group flex items-center pointer-events-auto">
          <div className="text-2xl font-clash tracking-tight text-white mix-blend-difference">
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
        <div className="absolute top-6 right-6 z-[110] flex items-center gap-4 pointer-events-auto">
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
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AuthOverlay isOpen={isAuthOpen} onClose={closeAuth} />

      {/* MOBILE SIDEBAR (Preserved) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[90]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full h-screen bg-[#050505] z-[95] flex flex-col"
            >
              <div className="p-8 pt-32 space-y-4 flex-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={toggleMenu}
                      className="flex items-center justify-between py-4 group"
                    >
                      <span className="text-4xl font-black uppercase tracking-tighter text-white group-hover:text-accent transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-8 bg-black/40">
                {isLoggedIn ? (
                  <Link
                    to="/profile"
                    onClick={toggleMenu}
                    className="block w-full text-center bg-accent text-black font-black py-5 rounded-2xl shadow-neon uppercase tracking-widest text-sm"
                  >
                    My Profile
                  </Link>
                ) : (
                  <button
                    onClick={() => { openAuth(); toggleMenu(); }}
                    className="w-full bg-accent text-black font-black py-5 rounded-2xl shadow-neon uppercase tracking-widest text-sm"
                  >
                    Join Elite
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;