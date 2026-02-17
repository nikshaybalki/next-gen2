// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center px-8 py-6 border-b border-[#00F7FF]/10 sticky top-0 bg-black/80 backdrop-blur-md z-50">
//       <Link to="/" className="text-2xl font-black tracking-tighter text-white">
//         NEXGEN<span className="text-accent drop-shadow-[0_0_8px_#00F7FF]">ACADEMY</span>
//       </Link>
      
//       <div className="hidden md:flex space-x-10 text-sm font-bold tracking-widest uppercase">
//         <Link to="/courses" className="hover:text-accent transition-all duration-300">Courses</Link>
//         <Link to="/digital-products" className="hover:text-accent transition-all duration-300">Digital Products</Link>
//         <Link to="/contact" className="hover:text-accent transition-all duration-300">Contact Us</Link>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;













// import { motion } from 'framer-motion';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const location = useLocation();
  
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Courses", path: "/courses" },
//     { name: "The Vault", path: "/vault" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <motion.nav 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="fixed top-0 left-0 w-full z-[100] px-6 py-4"
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3">
        
//         {/* LOGO */}
//         <Link to="/" className="group">
//           <div className="text-xl font-black tracking-tighter text-white">
//             NEXGEN <span className="text-accent group-hover:shadow-neon transition-all">ACADEMY</span>
//           </div>
//         </Link>

//         {/* NAVIGATION LINKS */}
//         <div className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link 
//               key={link.name} 
//               to={link.path} 
//               className="relative group text-[10px] font-black uppercase tracking-[0.2em]"
//             >
//               <span className={`${location.pathname === link.path ? 'text-accent' : 'text-gray-400'} group-hover:text-white transition-colors`}>
//                 {link.name}
//               </span>
              
//               {/* Active Indicator Underline */}
//               {location.pathname === link.path && (
//                 <motion.div 
//                   layoutId="nav-underline"
//                   className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent shadow-neon"
//                 />
//               )}
//             </Link>
//           ))}
//         </div>

//         {/* JOIN BUTTON */}
//         <motion.button 
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-white text-black text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest hover:bg-accent transition-all shadow-lg"
//         >
//           Join Elite
//         </motion.button>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;



















// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, ChevronRight } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
  
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Courses", path: "/courses" },
//     { name: "The Vault", path: "/vault" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <>
//       <motion.nav 
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         className="fixed top-0 left-0 w-full z-[100] px-4 py-4"
//       >
//         <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          
//           {/* LOGO */}
//           <Link to="/" className="group flex items-center">
//             <div className="text-xl font-black tracking-tighter text-white">
//               NEXGEN <span className="text-accent">ACADEMY</span>
//             </div>
//           </Link>

//           {/* DESKTOP LINKS (Hidden on Mobile) */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link 
//                 key={link.name} 
//                 to={link.path} 
//                 className="relative group text-[10px] font-black uppercase tracking-[0.2em]"
//               >
//                 <span className={`${location.pathname === link.path ? 'text-accent' : 'text-gray-400'} group-hover:text-white transition-colors`}>
//                   {link.name}
//                 </span>
//               </Link>
//             ))}
//           </div>

//           {/* --- MOBILE TRIGGER (VISIBLE ONLY ON MOBILE) --- */}
//           <div className="md:hidden flex items-center">
//             <button 
//               onClick={toggleMenu}
//               aria-label="Toggle Menu"
//               className="relative z-[150] p-2 bg-white/5 rounded-full border border-white/10 text-white hover:text-accent active:scale-90 transition-all"
//             >
//               {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
//             </button>
//           </div>

//           {/* JOIN BUTTON (Desktop only) */}
//           <button className="hidden md:block bg-white text-black text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest hover:bg-accent transition-all">
//             Join Elite
//           </button>
//         </div>
//       </motion.nav>

//       {/* MOBILE SIDEBAR */}
//       <AnimatePresence mode="wait">
//         {isOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={toggleMenu}
//               className="fixed inset-0 bg-black/90 backdrop-blur-md z-[110] md:hidden"
//             />

//             {/* Slide-out Menu */}
//             <motion.div 
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//               className="fixed top-0 right-0 h-full w-[85%] bg-[#050505] border-l border-white/10 z-[120] md:hidden p-10 flex flex-col"
//             >
//               <div className="mt-20 flex flex-col gap-8">
//                 {navLinks.map((link, idx) => (
//                   <motion.div
//                     key={link.name}
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: idx * 0.1 }}
//                   >
//                     <Link 
//                       to={link.path} 
//                       onClick={toggleMenu}
//                       className="flex items-center justify-between group"
//                     >
//                       <span className={`text-4xl font-black uppercase tracking-tighter ${location.pathname === link.path ? 'text-accent' : 'text-white'}`}>
//                         {link.name}
//                       </span>
//                       <ChevronRight className={location.pathname === link.path ? 'text-accent' : 'text-gray-800'} />
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="mt-auto pb-10">
//                 <button className="w-full bg-accent text-black font-black py-5 rounded-2xl shadow-neon uppercase tracking-widest">
//                   Access Academy
//                 </button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;
























import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "The Vault", path: "/vault" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-[100] px-4 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          
          {/* LOGO */}
          <Link to="/" className="group flex items-center">
            <div className="text-xl font-black tracking-tighter text-white">
              NEXGEN <span className="text-accent">ACADEMY</span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="relative group text-[10px] font-black uppercase tracking-[0.2em]">
                <span className={`${location.pathname === link.path ? 'text-accent' : 'text-gray-400'} group-hover:text-white transition-colors`}>
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* MOBILE TRIGGER (Hamburger Icon) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="p-2 bg-white/5 rounded-full border border-white/10 text-white hover:text-accent transition-all"
            >
              <Menu size={24} strokeWidth={2.5} />
            </button>
          </div>

          <button className="hidden md:block bg-white text-black text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest hover:bg-accent transition-all">
            Join Elite
          </button>
        </div>
      </motion.nav>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[110] md:hidden"
            />

            {/* Slide-out Menu */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] bg-[#050505] border-l border-white/10 z-[120] md:hidden flex flex-col"
            >
              {/* --- SIDEBAR HEADER WITH CROSS ICON --- */}
              <div className="flex justify-between items-center p-8 border-b border-white/5">
                <span className="text-accent font-black tracking-widest text-[10px] uppercase">Menu</span>
                <button 
                  onClick={toggleMenu}
                  className="p-2 bg-white/5 rounded-full border border-white/10 text-white hover:text-accent hover:border-accent hover:shadow-neon transition-all"
                >
                  <X size={24} strokeWidth={2.5} />
                </button>
              </div>

              {/* NAV LINKS */}
              <div className="flex flex-col gap-4 p-8">
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
                      <span className={`text-4xl font-black uppercase tracking-tighter ${location.pathname === link.path ? 'text-accent' : 'text-white'}`}>
                        {link.name}
                      </span>
                      <ChevronRight className={location.pathname === link.path ? 'text-accent' : 'text-gray-800'} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* BOTTOM ACTION */}
              <div className="mt-auto p-8 bg-[#080808]">
                <button className="w-full bg-accent text-black font-black py-5 rounded-2xl shadow-neon uppercase tracking-widest text-sm">
                  Access Academy
                </button>
                <p className="text-[8px] text-gray-600 mt-6 text-center tracking-[0.5em] uppercase font-bold">
                  System Version 2.0.4
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;