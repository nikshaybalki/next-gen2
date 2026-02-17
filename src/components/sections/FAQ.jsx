import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-4 border rounded-2xl transition-all duration-500 ${isOpen ? 'border-accent shadow-neon bg-accent/5' : 'border-white/10 bg-[#080808]'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-accent' : 'text-white'}`}>{question}</span>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-accent' : 'rotate-0 text-white/50'}`}>+</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FinalFooter = () => {
  const faqs = [
    { question: "Is this for beginners?", answer: "Absolutely. We start from the core psychology and work up to advanced AI-driven systems. No prior experience is needed." },
    { question: "How long do I have access?", answer: "You get lifetime access to the curriculum, including all future updates as the algorithms evolve." },
    { question: "Is there a community?", answer: "Yes, our Standard and Premium tiers include access to a private Discord of elite creators." }
  ];

  return (
    <footer className="bg-black pt-32 pb-12 px-6">
      {/* 1. FAQ SECTION */}
      <div className="max-w-4xl mx-auto mb-40">
        <div className="text-center mb-16">
          <h2 className="text-accent text-sm font-black tracking-[0.5em] uppercase mb-4">Questions</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase">Solving Your <span className="text-transparent" style={{ WebkitTextStroke: '1px #00F7FF' }}>Doubts</span></h3>
        </div>
        <div>
          {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
        </div>
      </div>

      {/* 2. FINAL CALL TO ACTION (CTA) */}
      <div className="max-w-7xl mx-auto border border-accent/20 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden mb-32">
        <div className="absolute inset-0 bg-accent/5 blur-[100px] pointer-events-none" />
        <h4 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
          Ready to become <br />
          <span className="text-accent">NEXGEN?</span>
        </h4>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-light">
          Join 12,000+ creators building the future of digital influence. The algorithm waits for no one.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0,247,255,0.6)" }}
          className="bg-accent text-black px-16 py-6 rounded-full font-black text-xl tracking-widest shadow-neon"
        >
          ENROLL NOW
        </motion.button>
      </div>

      {/* 3. FOOTER LINKS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-white/10">
        <div className="col-span-2">
          <h5 className="text-2xl font-black text-white mb-6 tracking-tighter">NEXGEN <span className="text-accent">ACADEMY</span></h5>
          <p className="text-gray-500 max-w-sm text-sm">Empowering the next generation of digital authorities through systematic growth and high-ticket monetization protocols.</p>
        </div>
        <div>
          <h6 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Platform</h6>
          <ul className="space-y-4 text-gray-500 text-sm font-medium">
            <li className="hover:text-accent cursor-pointer transition-colors">Courses</li>
            <li className="hover:text-accent cursor-pointer transition-colors">Digital Products</li>
            <li className="hover:text-accent cursor-pointer transition-colors">Success Stories</li>
          </ul>
        </div>
        <div>
          <h6 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Support</h6>
          <ul className="space-y-4 text-gray-500 text-sm font-medium">
            <li className="hover:text-accent cursor-pointer transition-colors">Terms of Service</li>
            <li className="hover:text-accent cursor-pointer transition-colors">Contact Us</li>
            <li className="hover:text-accent cursor-pointer transition-colors">Discord Support</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-20 text-gray-700 text-[10px] tracking-[0.5em] uppercase">
        © 2026 NEXGEN ACADEMY • ALL SYSTEMS OPERATIONAL
      </div>
    </footer>
  );
};

export default FinalFooter;