import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Specialized Counter for that "Masterclass" feel
const AnimatedNumber = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 90,
  });

  useEffect(() => {
    if (isVisible) {
      motionValue.set(value);
    }
  }, [isVisible, value, motionValue]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>
        {springValue.on("render", (v) => Math.floor(v))}
      </motion.span>
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
    { label: "Success Rate", value: 96, suffix: "80%" },
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden border-y border-white/5">
      {/* 1. CYBER GRID BACKGROUND */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#00F7FF 1px, transparent 1px), linear-gradient(90deg, #00F7FF 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-accent/40 transition-colors duration-500"
            >
              {/* Subtle Glowing Pulse behind the number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all" />

              <h4 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter">
                <AnimatedNumber value={item.value} suffix={item.suffix} />
              </h4>
              
              <div className="flex items-center gap-2">
                <div className="w-4 h-[2px] bg-accent shadow-[0_0_8px_#00F7FF]" />
                <p className="text-accent text-[10px] md:text-xs font-black tracking-[0.3em] uppercase">
                  {item.label}
                </p>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 border-t-2 border-r-2 border-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;