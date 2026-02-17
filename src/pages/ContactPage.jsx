import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none"
          >
            GET IN <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #00F7FF' }}>TOUCH</span>
          </motion.h1>
          <p className="text-gray-500 mt-6 font-medium tracking-[0.3em] uppercase text-xs">
            Direct access to the NexGen ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* 1. INTERACTIVE SOCIAL LINKS */}
          <div className="space-y-6">
            <h2 className="text-white font-black text-2xl uppercase tracking-tight mb-8">Fast Response</h2>
            
            {[
              { platform: "Instagram", handle: "@vaibhav_kadnar", color: "#E1306C" },
              { platform: "Discord", handle: "NexGen Community", color: "#5865F2" },
              { platform: "Email", handle: "support@nexgen.com", color: "#00F7FF" }
            ].map((social, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 15 }}
                className="group p-6 rounded-2xl bg-[#080808] border border-white/5 flex items-center justify-between hover:border-accent/40 transition-all cursor-pointer"
              >
                <div>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">{social.platform}</p>
                  <p className="text-white font-bold text-lg group-hover:text-accent transition-colors">{social.handle}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:shadow-neon">
                  <span className="text-white text-xl">→</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. GLASSMORPHIC CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-10 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-xl border border-white/10 relative"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-accent text-[10px] font-black uppercase tracking-widest ml-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-accent text-[10px] font-black uppercase tracking-widest ml-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-accent text-[10px] font-black uppercase tracking-widest ml-2">Your Message</label>
                <textarea rows="5" placeholder="Tell us about your goals..." className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent text-black py-5 rounded-xl font-black tracking-[0.2em] uppercase shadow-neon hover:shadow-neon-strong transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;