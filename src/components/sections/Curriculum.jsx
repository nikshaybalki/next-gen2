import { motion } from 'framer-motion';
import { GlowingEffect } from '../ui/GlowingEffect';
import { cn } from '../../lib/utils';

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
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 2, ease: "linear" }}
              className="w-full bg-accent shadow-[0_0_15px_rgba(0,229,255,0.4)]"
            />
          </div>

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 relative group">
                  {/* Phase Card - Dark bg, 16px radius */}
                  <div
                    className="relative z-10 p-6 md:p-8 rounded-[16px] overflow-hidden bg-[#111111] border border-white/5 shadow-xl transition-all duration-500 hover:border-accent/20"
                  >
                    <span className="text-accent font-mono font-bold text-[10px] tracking-widest block mb-2 uppercase">{step.phase}</span>
                    <h4 className="text-[1.4rem] md:text-[1.5rem] font-display font-bold mb-4 group-hover:text-accent transition-colors uppercase leading-tight">{step.title}</h4>
                    <p className="text-gray-100 text-[14px] leading-relaxed mb-6 font-body">{step.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      {step.topics.map((topic, tIdx) => (
                        <span key={tIdx} className="text-[12px] font-body font-medium bg-white/5 px-3 py-1 rounded-full text-white/60">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Node (Dot) */}
                <div className="absolute left-6 md:left-1/2 w-[10px] h-[10px] bg-accent rounded-full -translate-x-1/2 z-10 shadow-[0_0_10px_#00F7FF]">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-accent rounded-full opacity-30"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Curriculum;