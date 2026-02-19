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

      <div className="max-w-7xl mx-auto flex flex-col items-start instructor">

        {/* TOP SECTION: IMAGE (Mobile First) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full aspect-square relative group mb-12 instructor-image"
        >
          <div className="relative h-full w-full rounded-[16px] overflow-hidden border border-accent/20 grayscale group-hover:grayscale-0 transition-all duration-1000">
            <img src="hero-bg.png" alt="Vaibhav Kadnar" className="w-full h-full object-cover" />
          </div>
          {/* Decorative frame overlay */}
          <div className="absolute -inset-3 border-l border-t border-accent/30 rounded-tl-2xl w-16 h-16 pointer-events-none" />
          <div className="absolute -inset-3 border-r border-b border-accent/30 rounded-br-2xl w-16 h-16 ml-auto mt-auto top-auto left-auto pointer-events-none" />
        </motion.div>

        {/* BOTTOM SECTION: MENTOR DETAILS */}
        <div className="w-full relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-accent text-[10px] font-label font-bold tracking-[0.5em] uppercase mb-4">Founding Mentor</h2>
            <h3 className="text-[clamp(2.5rem,12vw,6rem)] font-display font-black mb-8 leading-[0.9] uppercase">
              VAIBHAV <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px var(--color-cyan)' }}>KADNAR</span>
            </h3>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-6 mb-10">
            <p className="text-gray-100 text-[1.1rem] md:text-[1.3rem] font-body italic leading-relaxed border-l-[3px] border-accent pl-4">
              "My mission is to help you build a digital empire that works for you, not the other way around."
            </p>
            <p className="text-gray-100/70 text-[14px] leading-relaxed font-body">
              Vaibhav Kadnar is a pioneer in the <strong>Creator Economy</strong>. After building a personal reach of over 50 Million across platforms, he realized that most creators fail because they treat content like a hobby, not a system.
            </p>
          </motion.div>

          {/* Mastery Checklist (2 Column Grid on Mobile) */}
          <div className="grid grid-cols-2 gap-3 mb-12">
            {masteryItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#181818] border border-white/5 p-3 rounded-lg group">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-gray-100 text-[11px] font-body font-bold leading-tight">{item}</span>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-accent text-black h-[56px] rounded-full font-label font-bold text-[13px] tracking-widest uppercase shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all"
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