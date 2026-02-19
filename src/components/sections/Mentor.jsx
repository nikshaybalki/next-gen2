import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Mentor = () => {
  const navigate = useNavigate();
  const { isLoggedIn, openAuth } = useAuth();
  const masteryItems = [
    "Viral Algorithm Engineering",
    "High-Ticket Digital Sales",
    "Psychology-Based Storytelling",
    "AI-Driven Content Workflows"
  ];

  return (
    <section className="relative py-32 bg-black px-6 overflow-hidden">
      {/* Cinematic Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* LEFT SECTION: CYBER-FRAME IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group lg:sticky lg:top-24"
        >
          <div className="absolute -inset-6 border-l-2 border-t-2 border-accent/30 rounded-tl-3xl group-hover:border-accent transition-all duration-700 w-32 h-32" />
          <div className="absolute -inset-6 border-r-2 border-b-2 border-accent/30 rounded-br-3xl group-hover:border-accent transition-all duration-700 w-32 h-32 ml-auto mt-auto top-auto left-auto" />

          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-[#080808]">
            <motion.div
              animate={{ top: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-accent/20 to-transparent z-20 pointer-events-none"
            />
            <img src="hero-bg.png" alt="Vaibhav Kadnar" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute bottom-0 left-0 w-full h-32 opacity-30 z-20" style={{ backgroundImage: `linear-gradient(#00F7FF 1px, transparent 1px), linear-gradient(90deg, #00F7FF 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
          </div>

          <motion.div whileHover={{ scale: 1.05 }} className="absolute -bottom-10 -left-6 md:left-10 z-30 bg-black/90 backdrop-blur-xl border border-accent p-6 rounded-2xl shadow-neon">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center animate-pulse"><span className="text-accent text-xl font-bold">✓</span></div>
              <div>
                <p className="text-accent text-[10px] font-black tracking-widest uppercase">Global Authority</p>
                <p className="text-white font-bold text-2xl tracking-tighter">50M+ REACH</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION: ENHANCED MENTOR DETAILS */}
        <div className="relative z-10 pt-10 lg:pt-0">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-accent text-sm font-black tracking-[0.5em] uppercase mb-6">Founding Mentor</h2>
            <h3 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9]">
              VAIBHAV <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #00F7FF', filter: 'drop-shadow(0 0 10px rgba(0,247,255,0.3))' }}>KADNAR</span>
            </h3>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-6 mb-12">
            <p className="text-gray-200 text-xl md:text-2xl font-light italic leading-relaxed border-l-4 border-accent pl-6">
              "My mission is to help you build a digital empire that works for you, not the other way around."
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Vaibhav Kadnar is a pioneer in the <strong>Creator Economy</strong>. After building a personal reach of over 50 Million across platforms, he realized that most creators fail because they treat content like a hobby, not a system.
            </p>
          </motion.div>

          {/* Mastery Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {masteryItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:border-accent/40 transition-all group">
                <div className="w-2 h-2 rounded-full bg-accent group-hover:shadow-[0_0_8px_#00F7FF]" />
                <span className="text-gray-300 text-sm font-bold tracking-wide">{item}</span>
              </div>
            ))}
          </div>

          {/* Social Proof Stats Grid */}
          <div className="grid grid-cols-2 gap-8 py-10 border-t border-white/10 mb-10">
            <div>
              <p className="text-4xl md:text-5xl font-black text-white tracking-tighter">500K+</p>
              <p className="text-accent text-xs font-black tracking-widest uppercase mt-2">Personal Followers</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-white tracking-tighter">1200+</p>
              <p className="text-accent text-xs font-black tracking-widest uppercase mt-2">Success Stories</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 247, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto bg-accent text-black px-12 py-5 rounded-full font-black tracking-widest uppercase transition-all"
            onClick={() => {
              if (isLoggedIn) {
                navigate('/courses');
              } else {
                openAuth();
              }
            }}
          >
            Start Your Transformation
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Mentor;