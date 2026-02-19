import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WebGLShader } from '../WebGLShader';
import { useAuth } from '../../context/AuthContext';
import { PlasticButton } from '../ui/PlasticButton';

const Hero = () => {
  const containerRef = useRef(null);
  const { openAuth, isLoggedIn } = useAuth();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Animations based on scroll
  const shaderOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const mainContentY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const secondaryContentY = useTransform(scrollYProgress, [0.1, 0.5], [100, 0]);
  const secondaryContentOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[150vh] w-full bg-black overflow-hidden"
    >
      {/* 1. WEBGL SHADER BACKGROUND */}
      <motion.div
        style={{ opacity: shaderOpacity }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <WebGLShader />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </motion.div>

      {/* GRAIN OVERLAY */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none z-[1]"></div>

      {/* 2. INITIAL VIEWPORT CONTENT (STICKY/CENTERED) */}
      <div className="sticky top-0 h-[100svh] w-full flex items-center justify-center px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: mainContentY }}
          className="relative z-10 text-center max-w-6xl w-full"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h1 className="flex flex-col items-center justify-center leading-none">
              <span className="text-[clamp(3.5rem,14vw,8rem)] md:text-[9rem] font-display font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] uppercase">
                NEXGEN
              </span>
              <span className="text-[clamp(1rem,4vw,3rem)] md:text-[2.5rem] font-display font-medium tracking-[0.5em] text-accent mt-4 uppercase">
                ACADEMY
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center items-center">
            <button
              onClick={() => {
                if (isLoggedIn) {
                  const coursesSection = document.getElementById('courses');
                  if (coursesSection) coursesSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  openAuth();
                }
              }}
              className="h-[56px] px-12 bg-accent text-black font-label text-[14px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all"
            >
              JOIN NOW
            </button>
          </motion.div>

          {/* SECONDARY CONTENT (REVEALED ON SCROLL) */}
          <motion.div
            style={{
              y: secondaryContentY,
              opacity: secondaryContentOpacity
            }}
            className="mt-24 space-y-6 font-display"
          >
            <p className="text-accent uppercase tracking-[0.8em] md:tracking-[1em] text-[10px] font-bold">
              The Step-by-Step Masterclass
            </p>
            <h2 className="text-white text-2xl md:text-5xl font-light italic leading-relaxed">
              "Take You from <span className="font-bold text-accent not-italic underline decoration-accent/30 underline-offset-8">Beginner to Pro</span>"
            </h2>
            <div className="flex justify-center gap-4 text-white/40 text-[10px] md:text-sm font-bold tracking-[0.3em] md:tracking-[0.5em] mt-8 uppercase font-label">
              <span>CREATE</span>
              <span className="text-accent">•</span>
              <span>BUILD</span>
              <span className="text-accent">•</span>
              <span>MONETIZE</span>
            </div>
          </motion.div>
        </motion.div>
      </div>


      {/* 3. OPTIONAL: SCROLL INDICATOR */}
      <motion.div
        style={{ opacity: shaderOpacity }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
