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
        className="max-w-7xl mx-auto px-6 py-12 md:py-20 w-full relative z-10 border border-white/5 rounded-[20px] md:rounded-[3rem] backdrop-blur-sm"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.015) 0%, rgba(255,255,255,0.005) 100%)',
          boxShadow: '0 0 40px rgba(0,0,0,0.5)'
        }}
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* 1. PHILOSOPHY CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div
              className="relative p-8 md:p-12 rounded-[20px] overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(0,100,80,0.4) 0%, rgba(0,30,30,0.8) 100%)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.05)'
              }}
            >
              <h3 className="text-accent font-label font-bold tracking-[0.2em] text-[10px] mb-6 uppercase">THE PHILOSOPHY</h3>
              <p className="text-[1.5rem] md:text-[2rem] font-display font-bold italic leading-tight text-white">
                "Stop chasing <span className="text-accent">Algorithms</span>, <br />
                Start building <span className="text-accent">Systems</span>."
              </p>
            </div>
          </motion.div>

          {/* 2. VISION CONTENT */}
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[2.2rem] md:text-[5rem] font-display font-black mb-4 uppercase leading-none tracking-tighter">
                OUR <span className="text-accent">VISION</span>
              </h2>
              <div className="h-[3px] w-10 bg-accent shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-100 text-[15px] md:text-[18px] leading-[1.7] font-body"
            >
              We are on a mission to empower 100,000 creators to move beyond basic content and build
              <span className="text-white font-bold ml-1">high-ticket digital empires</span>.
              Efficiency, monetization, and authority are our core pillars.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <button className="group flex items-center gap-4 text-white font-label font-bold tracking-widest text-[11px] hover:text-accent transition-colors uppercase">
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