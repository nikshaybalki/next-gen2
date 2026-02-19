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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group p-8 rounded-[16px] overflow-hidden backdrop-blur-2xl transition-all duration-500 bg-[#181818] border border-white/5"
            >
              <div className="relative z-10">
                <h4 className="text-[3.5rem] font-display font-bold text-white mb-2 leading-none">
                  <AnimatedNumber value={item.value} suffix={item.suffix} />
                </h4>

                {/* 3px cyan underline (2rem wide) */}
                <div className="w-8 h-[3px] bg-accent mb-4 shadow-[0_0_8px_rgba(0,229,255,0.5)]" />

                <p className="text-accent text-[0.65rem] font-mono font-bold tracking-[0.15em] uppercase">
                  {item.label}
                </p>
              </div>

              {/* Subtle underline gradient from spec */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            </motion.div>
          ))}
        </div>

      </WavyBackground>
    </section>
  );
};

export default Impact;