import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useInView, useMotionValueEvent } from 'framer-motion';
import { WavyBackground } from '../ui/WavyBackground';

// Specialized Counter for that "Masterclass" feel
const AnimatedNumber = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const isVisible = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 90,
  });

  useMotionValueEvent(springValue, "change", (latest) => {
    setDisplay(Math.floor(latest));
  });

  useEffect(() => {
    if (isVisible) {
      motionValue.set(value);
    }
  }, [isVisible, value, motionValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
};

const Impact = () => {
  // Updated with high-authority dummy data for NexGen Academy
  const stats = [
    { label: "Students Trained", value: 12, suffix: "12K+" },
    { label: "Organic Reach", value: 85, suffix: "6M+" },
    { label: "Community", value: 750, suffix: "50K+" },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/5">
      <WavyBackground
        containerClassName="min-h-[600px] flex items-center justify-center py-24"
        className="max-w-7xl mx-auto px-6"
        waveOpacity={1.0}
        blur={6}
        speed="slow"
      >
        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group w-72 p-8 rounded-3xl overflow-hidden backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255,255,255,0.02)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Inner highlight for "Glass" edge */}
              <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />

              {/* Subtle Glowing Pulse behind the number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all opacity-0 group-hover:opacity-100" />

              <div className="relative z-10">
                <h4 className="text-5xl font-black text-white mb-3 tracking-tighter">
                  <AnimatedNumber value={item.value} suffix={item.suffix} />
                </h4>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-[2px] bg-accent shadow-[0_0_8px_#00F7FF]" />
                  <p className="text-gray-300 text-xs font-bold tracking-[0.25em] uppercase group-hover:text-white transition-colors">
                    {item.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </WavyBackground>
    </section>
  );
};

export default Impact;