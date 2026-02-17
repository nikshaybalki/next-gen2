import { motion } from 'framer-motion';

const Hero = () => {
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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* 1. BACKGROUND IMAGE - Perfect Sizing */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-center"
        style={{ 
          backgroundImage: `url('/hero-bg.jpg')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%', 
          filter: 'brightness(0.35) contrast(1.1)' 
        }}
      />

      {/* 2. NEON CYAN RADIANCE */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-[1]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      {/* 3. MINIMALIST CONTENT */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-6xl"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.85] flex flex-col">
            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">NEXGEN</span>
            <span 
              className="text-transparent" 
              style={{ 
                WebkitTextStroke: '1px #00F7FF',
                filter: 'drop-shadow(0 0 10px rgba(0,247,255,0.5))' 
              }}
            >
              ACADEMY
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12 space-y-4">
          <p className="text-accent uppercase tracking-[0.5em] text-xs font-black">
            The Step-by-Step Masterclass
          </p>
          <h2 className="text-white text-xl md:text-3xl font-light italic leading-relaxed">
            "Take You from <span className="font-bold text-accent not-italic">Beginner to Pro</span>"
          </h2>
          <p className="text-white text-lg md:text-2xl font-black tracking-widest mt-4">
            CREATE <span className="text-accent">•</span> BUILD <span className="text-accent">•</span> MONETIZE
          </p>
          <p className="text-gray-400 text-sm md:text-base mt-2 max-w-2xl mx-auto font-medium">
             Your Content Like Never Before.
          </p>
        </motion.div>

        {/* 4. NEON BUTTONS */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(0,247,255,0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-black px-12 py-4 rounded-full font-black text-lg tracking-widest transition-all shadow-neon"
          >
            ENROLL NOW
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0,247,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-accent/50 text-accent px-12 py-4 rounded-full font-black text-lg tracking-widest backdrop-blur-md transition-all"
          >
            VIEW COURSES
          </motion.button>
        </motion.div>
      </motion.div>

      {/* 5. CONTACT BUTTON (Fixed) */}
      {/* <div className="fixed bottom-10 right-10 z-50">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="bg-[#25D366] text-white px-6 py-3 rounded-full flex items-center gap-3 font-bold shadow-2xl cursor-pointer"
        >
          <div className="w-2 h-2 bg-white rounded-full animate-ping" />
          Contact us
        </motion.div>
      </div> */}
    </section>
  );
};

export default Hero;