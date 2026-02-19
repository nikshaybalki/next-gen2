
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
      {/* 0. MOBILE HEADER BAR (Visible only on mobile) */}
      <div className="md:hidden fixed top-0 left-0 w-full h-[60px] bg-black/90 backdrop-blur-xl border-b border-white/5 z-[90]" />

      <div className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 py-4 md:py-6 font-sans pointer-events-none">

        {/* 1. STATIC LOGO (Top Left) */}
        <Link to="/" className="absolute top-4 md:top-6 left-4 md:left-6 z-[110] group flex items-center pointer-events-auto">
          <div className="text-xl md:text-2xl font-clash tracking-tight text-white mix-blend-difference">
            <span className="font-bold">NEXGEN</span> <span className="font-medium tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-accent to-white ml-2">ACADEMY</span>
          </div>
        </Link>

        {/* 2. FLOATING MENU PILL (Center - Hidden on Mobile) */}
        <div className="hidden md:flex justify-center w-full">
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
        <div className="absolute top-4 md:top-6 right-4 md:right-6 z-[110] flex items-center gap-4 pointer-events-auto">
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
              className="p-2.5 bg-white/5 rounded-full border border-white/10 text-white active:scale-90 transition-transform"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
                </motion.div>
              </AnimatePresence>
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 w-full h-screen bg-[#050505] z-[95] flex flex-col"
            >
              <div className="p-8 pt-24 space-y-2 flex-1 flex flex-col justify-center">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={link.path}
                      onClick={toggleMenu}
                      className="flex items-center justify-center py-5 border-b border-white/5 group"
                    >
                      <span className="text-3xl font-black uppercase tracking-tighter text-white/50 group-hover:text-accent transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-8 pb-12"
              >
                {isLoggedIn ? (
                  <Link
                    to="/profile"
                    onClick={toggleMenu}
                    className="block w-full text-center bg-accent text-black font-black py-5 rounded-full shadow-neon uppercase tracking-widest text-sm"
                  >
                    My Profile
                  </Link>
                ) : (
                  <button
                    onClick={() => { openAuth(); toggleMenu(); }}
                    className="w-full bg-accent text-black font-black py-5 rounded-full shadow-neon uppercase tracking-widest text-sm"
                  >
                    Join Elite
                  </button>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;