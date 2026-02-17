import { motion } from 'framer-motion';

const Courses = () => {
  const courseTiers = [
    {
      title: "BASIC",
      subtitle: "The Foundation",
      price: "₹4,999",
      description: "Perfect for beginners looking to understand the psychology of virality.",
      features: ["Viral Hook Templates", "Basic Video Editing", "Algorithm Basics", "Discord Access"],
      highlight: false
    },
    {
      title: "STANDARD",
      subtitle: "The Creator Pro",
      price: "₹9,999",
      description: "Our most popular tier for those ready to build a serious brand.",
      features: ["Advanced Storytelling", "AI Workflow Integration", "Brand Deal Roadmap", "Weekly Group Calls"],
      highlight: true
    },
    {
      title: "PREMIUM",
      subtitle: "The Elite Empire",
      price: "₹19,999",
      description: "Tailored 1-on-1 coaching to scale your content into a business.",
      features: ["Personalized Strategy", "Team Building Guide", "High-Ticket Sales", "Life-time Updates"],
      highlight: false
    }
  ];

  return (
    <section className="relative py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-accent font-black tracking-[0.5em] text-xs uppercase mb-4"
          >
            The Solution
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold"
          >
            OUR <span className="text-transparent" style={{ WebkitTextStroke: '1px #00F7FF' }}>COURSES</span>
          </motion.h3>
        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {courseTiers.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-10 rounded-[2.5rem] bg-[#080808] border ${
                course.highlight ? 'border-accent shadow-neon' : 'border-white/10'
              } hover:border-accent transition-all duration-500 group flex flex-col`}
            >
              {/* Badge for Highlighted Course */}
              {course.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-black text-[10px] font-black px-4 py-1 rounded-full shadow-neon-strong uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-accent text-xs font-black tracking-widest mb-2">{course.subtitle}</h4>
                <h5 className="text-3xl font-black mb-4">{course.title}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">{course.description}</p>
              </div>

              <div className="text-4xl font-black mb-8 text-white">
                {course.price}
              </div>

              {/* Feature List */}
              <ul className="space-y-4 mb-12 flex-grow">
                {course.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_5px_#00F7FF]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-xl font-black tracking-widest uppercase transition-all ${
                course.highlight 
                ? 'bg-accent text-black shadow-neon hover:shadow-neon-strong' 
                : 'border border-accent/50 text-accent hover:bg-accent hover:text-black'
              }`}>
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;