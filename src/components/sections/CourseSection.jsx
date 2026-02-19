import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { allCourses } from '../../data/coursesData';
import { GlowingEffect } from '../ui/GlowingEffect';

const CourseSection = () => {
  // Take first 3 courses for the home page display
  const featuredCourses = allCourses.slice(0, 3);

  return (
    <section id="courses" className="relative py-32 bg-black px-6">
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
            className="text-5xl md:text-7xl font-bold uppercase"
          >
            OUR <span className="text-transparent" style={{ WebkitTextStroke: '1px #00F7FF' }}>COURSES</span>
          </motion.h3>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredCourses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem]"
            >
              {/* Glowing Effect Layer - Z-Index -1 to be behind but visible outside if needed? 
                  The generic implementation uses absolute inset-0.
                  We need to ensure it's not clipped. 
              */}
              <div className="absolute inset-0 rounded-[2rem] z-0">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
              </div>

              <Link to={`/course/${course.id}`} className="block relative z-10 h-full overflow-hidden rounded-[2rem]">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Course Thumbnail */}
                <div className="h-60 bg-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-10" />
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-6 left-6 z-20 bg-accent text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    MASTERCLASS
                  </span>
                </div>

                {/* Course Details */}
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Enrollment Open</span>
                    <span className="text-accent font-mono text-sm">{course.stats.hours}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-6 group-hover:text-accent transition-colors uppercase h-14 overflow-hidden line-clamp-2">
                    {course.title}
                  </h3>

                  <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <span className="text-2xl font-black text-white">{course.pricing.currentPrice}</span>
                    <span className="text-accent font-black text-xs tracking-[0.2em] border-b border-accent/30 hover:border-accent transition-all pb-1 uppercase">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL COURSES BUTTON */}
        <div className="mt-16 text-center">
          <Link to="/courses" className="inline-block border-2 border-accent/30 text-accent px-10 py-4 rounded-full font-black text-sm tracking-widest hover:bg-accent/10 hover:border-accent transition-all">
            EXPLORE ALL COURSES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;