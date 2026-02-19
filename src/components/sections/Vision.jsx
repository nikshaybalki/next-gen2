import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Vision = () => {
  const containerRef = useRef(null);

  // Parallax effect for the background "NEXGEN" text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textX = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-40 bg-black overflow-hidden flex items-center"
    >
      {/* 1. HUGE SCROLLING BACKGROUND TEXT (Parallax) */}
      <motion.div
        style={{ x: textX }}
        className="absolute inset-0 flex items-center whitespace-nowrap pointer-events-none opacity-[0.03] select-none"
      >
        <h2 className="text-[25rem] font-black text-white">
          NEXGEN NEXGEN NEXGEN NEXGEN
        </h2>
      </motion.div>

      <div
        className="max-w-7xl mx-auto px-8 py-20 w-full relative z-10 border border-white/5 rounded-[3rem] backdrop-blur-sm"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.015) 0%, rgba(255,255,255,0.005) 100%)',
          boxShadow: '0 0 40px rgba(0,0,0,0.5)'
        }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* 2. ANIMATED VISUAL ELEMENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* The "Glow Orb" */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[80px] animate-pulse" />

            <div
              className="relative p-10 rounded-3xl backdrop-blur-xl overflow-hidden group transition-all duration-500 hover:scale-[1.01]"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.00) 100%)',
                boxShadow: `
                  0 4px 30px rgba(0,0,0,0.1),
                  0 0 0 1px rgba(255,255,255,0.05) inset,
                  0 1px 0 0 rgba(255,255,255,0.1) inset,
                  0 -2px 20px 0 rgba(0, 247, 255, 0.15) inset
                `
              }}
            >
              {/* Top highlight for extra gloss */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
              <h3 className="text-accent font-black tracking-[0.5em] text-xs mb-6 uppercase">The Philosophy</h3>
              <p className="text-2xl md:text-3xl font-light leading-snug text-white">
                "Stop chasing <span className="text-transparent font-bold" style={{ WebkitTextStroke: '1px #00F7FF' }}>Algorithms</span>, <br />
                Start building <span className="text-accent font-bold">Systems</span>."
              </p>
            </div>
          </motion.div>

          {/* 3. STAGGERED TEXT CONTENT */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
                OUR <span className="text-accent">VISION</span>
              </h2>
              <div className="h-1 w-24 bg-accent shadow-neon" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg"
            >
              We are on a mission to empower 100,000 creators to move beyond basic content and build
              <span className="text-white"> high-ticket digital empires</span>.
              Efficiency, monetization, and authority are our core pillars.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <button className="group flex items-center gap-4 text-white font-bold tracking-widest text-sm hover:text-accent transition-colors">
                LEARN MORE ABOUT US
                <span className="w-10 h-[1px] bg-accent group-hover:w-16 transition-all duration-300" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Vision;