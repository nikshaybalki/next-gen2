import React from 'react';
import { motion } from 'framer-motion';
import { Bell, ChevronRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademicsPage = () => {
  // Mock data for the logged-in user
  const user = { name: "Nikshay", profileImg: "/hero-bg.png" };

  const otherCourses = [
    { title: "Ethical Hacking 101", tag: "CYBER SECURITY", progress: 35, color: "bg-emerald-500" },
    { title: "Advanced React Patterns", tag: "DEVELOPMENT", progress: 12, color: "bg-purple-500" },
    { title: "Design Systems in Figma", tag: "DESIGN", progress: 88, color: "bg-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER: GREETING & PROFILE */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Welcome, <span className="text-blue-500">{user.name}!</span>
            </h1>
            <p className="text-gray-500 mt-1">Let's continue where you left off.</p>
          </div>
          <div className="flex items-center gap-6">
            {/* <button className="p-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors relative">
              <Bell size={20} className="text-gray-400" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#050505]" />
            </button> */}
            <Link to="/profile">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                src={user.profileImg} 
                className="w-12 h-12 rounded-full border-2 border-accent object-cover cursor-pointer" 
                alt="Profile" 
              />
            </Link>
          </div>
        </header>

        {/* SECTION: CURRENT PROGRESS */}
        <section className="mb-16">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-6">Current Progress</h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group"
          >
            {/* Video Preview Side */}
            <div className="relative w-full md:w-80 aspect-video rounded-2xl overflow-hidden bg-white/5">
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
               <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] font-bold bg-black/60 px-2 py-1 rounded-md">
                  <PlayCircle size={14} className="text-white" /> 2h 15m left
               </div>
            </div>

            {/* Progress Details Side */}
            <div className="flex-1 space-y-4">
              <span className="bg-blue-600/20 text-blue-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Premium</span>
              <h3 className="text-3xl font-black uppercase">CVC Premium Masterclass</h3>
              <p className="text-gray-500 text-sm max-w-md">Mastering the art of visual storytelling and advanced editing techniques.</p>
              
              <div className="pt-4">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">
                  <span>68% Completed</span>
                  <span>4/6 Modules</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: '68%' }} 
                    className="h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]" 
                  />
                </div>
              </div>
            </div>

            {/* Resume Button Side */}
            <div className="md:border-l border-white/5 md:pl-10 text-center md:text-left">
               <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-2">Up Next</p>
               <h4 className="text-white font-bold mb-1">Module 4: The Edit Suite</h4>
               <p className="text-gray-500 text-xs mb-6">Lesson 3: Color Grading Basics</p>
               <button className="bg-accent text-black font-black px-8 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform">
                 RESUME <ChevronRight size={18} />
               </button>
            </div>
          </motion.div>
        </section>

        {/* SECTION: OTHER COURSES (Horizontal Scroll) */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">Your Other Courses</h2>
            <Link to="/courses" className="text-blue-500 text-xs font-bold hover:underline flex items-center gap-1">
              View All <ChevronRight size={14} />
            </Link>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide no-scrollbar">
            {otherCourses.map((course, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="min-w-[300px] bg-[#0A0A0A] border border-white/5 rounded-3xl p-6 group cursor-pointer"
              >
                <div className="aspect-video bg-white/5 rounded-2xl mb-6 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                   <span className="absolute bottom-4 left-4 text-[8px] font-black text-white/40 bg-white/5 px-2 py-1 rounded border border-white/10 uppercase tracking-widest">
                     {course.tag}
                   </span>
                </div>
                <h4 className="text-lg font-black text-white mb-6 group-hover:text-accent transition-colors">
                  {course.title}
                </h4>
                <div>
                   <div className="flex justify-between text-[10px] font-black text-gray-600 mb-2 uppercase tracking-widest">
                     <span>{course.progress}% Complete</span>
                     <span className="group-hover:text-accent transition-colors">Resume</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className={`h-full ${course.color}`} style={{ width: `${course.progress}%` }} />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AcademicsPage;