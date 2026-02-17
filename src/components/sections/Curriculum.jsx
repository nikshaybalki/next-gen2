import { motion } from 'framer-motion';

const Curriculum = () => {
  const steps = [
    {
      phase: "PHASE 01",
      title: "The Creator Psychology",
      desc: "Master the science of attention. Learn why certain hooks stop the scroll and how to engineer virality before you even hit record.",
      topics: ["Attention Mapping", "Retention Secrets", "The Dopamine Loop"]
    },
    {
      phase: "PHASE 02",
      title: "Production Mastery",
      desc: "High-end content doesn't require a Hollywood budget. We show you how to get cinematic 4K quality using just your smartphone and lighting.",
      topics: ["Cinematic Framing", "Mobile Color Grading", "Audio Engineering"]
    },
    {
      phase: "PHASE 03",
      title: "The Distribution Engine",
      desc: "Stop guessing. Master the specific algorithms of Instagram, YouTube, and LinkedIn to ensure your content reaches the right audience.",
      topics: ["SEO for Video", "Hashtag Strategy 2.0", "Cross-Platform Growth"]
    },
    {
      phase: "PHASE 04",
      title: "Monetization Systems",
      desc: "Turn your views into a business. Learn how to attract brand deals and build your own high-ticket digital products.",
      topics: ["Brand Outreach", "Product Launching", "High-Ticket Sales"]
    }
  ];

  return (
    <section className="relative py-32 bg-black px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-black tracking-[0.5em] text-xs uppercase mb-4"
          >
            The Journey
          </motion.h2>
          <h3 className="text-4xl md:text-6xl font-black">THE <span className="text-transparent" style={{ WebkitTextStroke: '1px #00F7FF' }}>BLUEPRINT</span></h3>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 2, ease: "linear" }}
              className="w-full bg-accent shadow-[0_0_15px_#00F7FF]"
            />
          </div>

          <div className="space-y-20">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2 p-8 rounded-3xl bg-[#080808] border border-white/5 hover:border-accent/30 transition-colors group">
                  <span className="text-accent font-black text-xs tracking-widest block mb-2">{step.phase}</span>
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{step.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {step.topics.map((topic, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold border border-white/10 px-3 py-1 rounded-full text-white/60">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center Node (Dot) */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-black border-2 border-accent rounded-full -translate-x-1/2 z-10 shadow-[0_0_10px_#00F7FF]">
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-accent rounded-full opacity-30"
                  />
                </div>

                {/* Empty Space for alignment */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;