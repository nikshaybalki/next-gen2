import { motion } from 'framer-motion';
import { GlowingEffect } from '../ui/GlowingEffect';

const DigitalProduct = () => {
  const products = [
    {
      title: "The 100K Hustle",
      type: "E-BOOK",
      price: "₹499",
      desc: "The exact blueprint used to gain 100,000 followers in under 6 months without spending on ads.",
      image: "/templates-mockup.jpeg" // Replace with your template image path

    },
    {
      title: "Viral Hook Library",
      type: "TEMPLATES",
      price: "₹299",
      desc: "300+ proven hook templates for Reels and Shorts that have generated over 10M+ combined views.",
      image: "/ebook-mockup.jpg" // Replace with your book image path

    }
  ];

  return (
    <section className="relative py-32 bg-black px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent font-black tracking-[0.5em] text-xs uppercase mb-4"
          >
            Digital Assets
          </motion.h2>
          <h3 className="text-5xl font-black">THE <span className="text-transparent" style={{ WebkitTextStroke: '1px #00F7FF' }}>SHOP</span></h3>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-12">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row rounded-[2rem] transition-all duration-500 hover:-translate-y-2"
            >
              {/* 0. GLOWING EFFECT - Middle Layer (Above Glass, Below Content) */}
              <div className="absolute inset-0 rounded-[2rem] z-10 pointer-events-none">
                <GlowingEffect
                  spread={80}
                  glow={true}
                  disabled={false}
                  proximity={100}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
              </div>

              {/* 1. GLASS BACKGROUND LAYER - Bottom Layer (z-0) */}
              <div 
                className="absolute inset-0 rounded-[2rem] backdrop-blur-xl z-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              />

              {/* INNER CONTENT WRAPPER - Top Layer (z-20) */}
              <div className="relative w-full h-full flex flex-col md:flex-row overflow-hidden rounded-[2rem] z-20">

                {/* 1. ANIMATING GLOWING CORNERS */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:shadow-[0_0_15px_#00F7FF] z-20" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:shadow-[0_0_15px_#00F7FF] z-20" />

                {/* 2. LEFT CONTENT SIDE */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative z-10">
                  <span className="text-accent text-[10px] font-black tracking-[0.4em] mb-4">{product.type}</span>
                  <h4 className="text-3xl md:text-5xl font-black mb-6 text-white group-hover:text-accent transition-colors">
                    {product.title}
                  </h4>
                  <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
                    {product.desc}
                  </p>
                  <div className="flex items-center gap-8">
                    <span className="text-3xl font-black text-white">{product.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-accent text-black px-10 py-4 rounded-full font-black tracking-tighter shadow-neon hover:shadow-neon-strong transition-all"
                    >
                      GET ACCESS NOW
                    </motion.button>
                  </div>
                </div>

                {/* 3. RIGHT IMAGE SIDE (Display Space) */}
                <div className="flex-1 relative bg-gradient-to-l from-accent/5 to-transparent flex items-center justify-center p-10 min-h-[300px] z-10">
                  {/* Floating Animation for the Book Image */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="relative z-10 w-full max-w-[280px]"
                  >
                    {/* Glassmorphic Reflection behind image */}
                    <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full" />

                    {/* Placeholder for your Book Image */}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,247,255,0.3)] transform -rotate-6 group-hover:rotate-0 transition-transform duration-700"
                    />
                  </motion.div>

                  {/* Cyber Decorative Background Element */}
                  <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalProduct;