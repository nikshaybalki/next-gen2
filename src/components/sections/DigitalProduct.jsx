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
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent font-label font-bold tracking-[0.5em] text-[10px] uppercase mb-4"
          >
            Digital Assets
          </motion.h2>
          <h3 className="text-[2.2rem] md:text-[5rem] font-display font-black uppercase leading-none">THE <span className="text-transparent" style={{ WebkitTextStroke: '1px #00F7FF' }}>SHOP</span></h3>
        </div>

        {/* Filter bar (mobile-first horizontal scroll) */}
        <div className="flex gap-3 overflow-x-auto pb-8 no-scrollbar scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {['All', 'E-Books', 'Templates', 'Blueprints', 'Elite'].map((category, i) => (
            <button
              key={category}
              className={`flex-shrink-0 h-9 px-6 rounded-full font-label text-[11px] font-bold uppercase tracking-widest transition-all ${i === 0 ? 'bg-accent text-black' : 'border border-white/10 text-gray-500 hover:text-white'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-[#111111] border border-white/5 rounded-[20px] overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-square relative overflow-hidden bg-white/5">
                <span className="absolute top-4 right-4 z-20 bg-accent text-black text-[10px] font-label font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  BEST SELLER
                </span>
                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent z-10" />
              </div>

              <div className="p-6">
                <span className="text-accent text-[10px] font-label font-bold tracking-[0.2em] mb-2 block uppercase">{product.type}</span>
                <h4 className="text-[1.4rem] font-display font-bold mb-6 text-white group-hover:text-accent transition-colors uppercase leading-tight">
                  {product.title}
                </h4>

                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <span className="text-[1.2rem] font-body font-bold text-white">{product.price}</span>
                  <button className="h-[48px] px-6 bg-white text-black font-label text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-accent transition-all">
                    PURCHASE
                  </button>
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