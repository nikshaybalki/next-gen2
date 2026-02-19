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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 courses-grid">
          {featuredCourses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-[#111111] border border-white/5 rounded-[20px] overflow-hidden course-card"
            >
              <Link to={`/course/${course.id}`} className="block">
                {/* Course Thumbnail */}
                <div className="aspect-video relative overflow-hidden">
                  <span className="absolute top-4 left-4 z-20 bg-accent text-black text-[10px] font-label font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    MASTERCLASS
                  </span>
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  {/* Dark gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent z-10" />
                </div>

                {/* Course Details */}
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500 text-[10px] font-label font-bold uppercase tracking-widest">Enrollment Open</span>
                    <span className="text-accent font-label text-[10px]">{course.stats.hours}</span>
                  </div>
                  <h3 className="text-[1.4rem] font-display font-bold mb-6 group-hover:text-accent transition-colors uppercase h-14 overflow-hidden line-clamp-2 leading-tight">
                    {course.title}
                  </h3>

                  <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <span className="text-[1.2rem] font-body font-bold text-white">{course.pricing.currentPrice}</span>
                    <span className="text-accent font-label font-bold text-[11px] tracking-widest border-b border-accent/30 hover:border-accent transition-all pb-1 uppercase">
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