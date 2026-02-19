import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 text-left flex justify-between items-center transition-all"
      >
        <span className="text-[1.1rem] font-body font-bold text-white group-hover:text-accent transition-colors">{question}</span>
        <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all ${isOpen ? 'rotate-45 border-accent text-accent' : 'text-gray-500'}`}>
          <span className="text-xl">+</span>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-gray-400 leading-relaxed font-body text-[14px]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FinalFooter = () => {
  const navigate = useNavigate();
  const { isLoggedIn, openAuth } = useAuth();
  const faqs = [
    { question: "Is this for beginners?", answer: "Absolutely. We start from the core psychology and work up to advanced AI-driven systems. No prior experience is needed." },
    { question: "How long do I have access?", answer: "You get lifetime access to the curriculum, including all future updates as the algorithms evolve." },
    { question: "Is there a community?", answer: "Yes, our Standard and Premium tiers include access to a private Discord of elite creators." }
  ];

  return (
    <footer className="bg-black pt-32 pb-12 px-6">
      {/* 1. FAQ SECTION */}
      <div className="max-w-4xl mx-auto mb-40 faq">
        <div className="text-center mb-16">
          <h2 className="text-accent text-[10px] font-label font-bold tracking-[0.5em] uppercase mb-4 section-label">Questions</h2>
          <h3 className="text-[2.2rem] md:text-[5rem] font-display font-black uppercase leading-none section-title">
            SOLVING YOUR <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px var(--color-cyan)' }}>DOUBTS</span>
          </h3>
        </div>
        <div className="border-t border-white/10">
          {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
        </div>
      </div>

      {/* 2. FINAL CALL TO ACTION (CTA) */}
      <div
        className="max-w-7xl mx-auto border border-accent/20 rounded-[24px] md:rounded-[3rem] p-8 md:p-24 text-center relative overflow-hidden mb-32 cta-banner"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,100,80,0.25) 0%, transparent 70%)' }}
      >
        <h4 className="text-[2.5rem] md:text-[6rem] font-display font-black mb-8 tracking-tighter uppercase leading-[0.9]">
          READY TO BECOME <br />
          <span className="text-accent">NEXGEN?</span>
        </h4>
        <p className="text-gray-100/70 text-[15px] md:text-[18px] mb-12 max-w-2xl mx-auto font-body">
          Join 12,000+ creators building the future of digital influence. The algorithm waits for no one.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (isLoggedIn) navigate('/courses');
            else openAuth();
          }}
          className="w-full md:w-auto h-[56px] px-16 bg-accent text-black rounded-full font-label font-bold text-[13px] tracking-widest shadow-[0_0_30px_rgba(0,229,255,0.4)] uppercase"
        >
          ENROLL NOW
        </motion.button>
      </div>

      {/* 3. FOOTER LINKS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-white/10">
        <div className="col-span-2">
          <h5 className="text-[2rem] font-display font-black text-white mb-6 uppercase">NEXGEN <span className="text-accent underline decoration-accent/30">ACADEMY</span></h5>
          <p className="text-gray-500 max-w-sm text-sm font-body">Empowering the next generation of digital authorities through systematic growth and high-ticket monetization protocols.</p>
        </div>
        <div>
          <h6 className="text-white font-label font-bold mb-6 uppercase text-[10px] tracking-widest">Platform</h6>
          <ul className="space-y-4 text-gray-500 text-sm font-body font-medium">
            <li className="hover:text-accent cursor-pointer transition-colors">Courses</li>
            <li className="hover:text-accent cursor-pointer transition-colors">Digital Products</li>
            <li className="hover:text-accent cursor-pointer transition-colors">Success Stories</li>
          </ul>
        </div>
        <div>
          <h6 className="text-white font-label font-bold mb-6 uppercase text-[10px] tracking-widest">Support</h6>
          <ul className="space-y-4 text-gray-500 text-sm font-body font-medium">
            <li className="hover:text-accent cursor-pointer transition-colors">Terms of Service</li>
            <li className="hover:text-accent cursor-pointer transition-colors">Contact Us</li>
            <li className="hover:text-accent cursor-pointer transition-colors">Discord Support</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-20 text-gray-700 font-label text-[10px] tracking-[0.5em] uppercase">
        © 2026 NEXGEN ACADEMY • ALL SYSTEMS OPERATIONAL
      </div>
    </footer>
  );
};


export default FinalFooter;















