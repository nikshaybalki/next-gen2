import { motion } from 'framer-motion';
import { useState } from 'react';
import { GlowingEffect } from '../components/ui/GlowingEffect';

const DigitalProductsPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'E-Books', 'Templates', 'Presets', 'Planners'];

  const products = [
    {
      title: "Viral Script Vault",
      category: "Templates",
      price: "₹499",
      rating: "4.9",
      image: "/prod1.jpg",
      badge: "Best Seller"
    },
    {
      title: "Algorithm Secrets",
      category: "E-Books",
      price: "₹799",
      rating: "5.0",
      image: "/prod2.jpg",
      badge: "New"
    },
    {
      title: "Cinematic LUTs Pack",
      category: "Presets",
      price: "₹999",
      rating: "4.8",
      image: "/prod3.jpg",
      badge: "Elite"
    }
  ];

  const filteredProducts = activeTab === 'All'
    ? products
    : products.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none"
            >
              THE <span className="text-transparent" style={{ WebkitTextStroke: '1px #00F7FF' }}>VAULT</span>
            </motion.h1>
            <p className="text-gray-500 mt-4 font-medium tracking-[0.3em] uppercase text-[10px]">
              Curated assets for high-performance creators.
            </p>
          </div>

          {/* Improved Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-xl text-[10px] font-black tracking-widest transition-all border ${activeTab === cat
                    ? 'bg-accent text-black border-accent shadow-neon'
                    : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30'
                  }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Improved Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, idx) => (
            <motion.div
              layout
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-[2.5rem] transition-all duration-500"
            >
              {/* 0. GLOWING EFFECT - Underneath Layer */}
              <div className="absolute inset-0 rounded-[2.5rem] z-0 pointer-events-none">
                <GlowingEffect 
                  spread={40} 
                  glow={true} 
                  disabled={false} 
                  proximity={64} 
                  inactiveZone={0.01}
                  borderWidth={3}
                />
              </div>

              {/* 1. GLASS BACKGROUND LAYER */}
              <div 
                className="absolute inset-0 rounded-[2.5rem] backdrop-blur-xl z-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              />

              {/* 2. CONTENT AREA */}
              <div className="relative z-10 p-4 h-full">
              {/* COMPACT IMAGE STAGE */}
              <div className="relative h-64 w-full bg-[#0C0C0C] rounded-[2rem] overflow-hidden flex items-center justify-center border border-white/5">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Floating Image Container - Controlled Size */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="relative z-10 w-32 h-44 md:w-40 md:h-52 overflow-hidden rounded-lg shadow-2xl border border-white/10"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/400x600/111/00F7FF?text=Asset";
                    }}
                  />
                </motion.div>

                {/* Badge */}
                <span className="absolute top-4 right-4 bg-accent text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  {product.badge}
                </span>
              </div>

              {/* PRODUCT INFO AREA */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase">{product.category}</span>
                  <div className="bg-white/5 px-2 py-1 rounded-md border border-white/5">
                    <span className="text-yellow-500 text-[10px]">★</span>
                    <span className="text-white text-[10px] font-bold ml-1">{product.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-black text-white mb-8 group-hover:text-accent transition-colors leading-tight uppercase">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div>
                    <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest mb-1">Price</p>
                    <span className="text-2xl font-black text-white">{product.price}</span>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-8 py-3 rounded-2xl font-black text-[10px] tracking-widest uppercase hover:bg-accent transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-neon"
                  >
                    Purchase
                  </motion.button>
                </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalProductsPage;