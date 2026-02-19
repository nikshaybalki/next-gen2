import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Clock, BookOpen, ChevronRight, MoreHorizontal } from 'lucide-react';

const AcademicsDashboard = () => {
  return (
    <div className="space-y-12">
      {/* Welcome Header */}
      <header>
        <h1 className="font-serif text-4xl font-normal italic text-academics-text mb-2 animate-fade-in-up">
          Welcome back, <span className="font-bold not-italic">Nikshay.</span>
        </h1>
        <p className="text-academics-text-secondary text-base">Pick up where you left off.</p>
      </header>

      {/* Current Progress Card */}
      <section>
        <div className="bg-academics-surface border border-academics-border rounded-2xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:translate-y-[-2px] transition-all duration-300 group">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            
            {/* Thumbnail */}
            <div className="w-full md:w-[320px] aspect-video rounded-xl overflow-hidden relative bg-gray-100 shrink-0">
               {/* Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
               <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop" alt="Course" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 text-white text-[10px] font-bold bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                  <PlayCircle size={12} /> 25m remaining
               </div>
            </div>

            {/* Content */}
            <div className="flex-1 w-full space-y-4">
              <div className="flex items-center gap-3">
                 <span className="bg-black text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">Premium</span>
                 <span className="text-[10px] font-mono text-academics-text-muted">MODULE 3 OF 6</span>
              </div>
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-academics-text mb-1">Creating Viral Content</h3>
                <p className="text-academics-text-secondary text-sm line-clamp-2">Learn the psychology behind hooks, retention, and algorithmic growth specific to short-form video content.</p>
              </div>

              <div className="space-y-2 pt-2">
                 <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-academics-text-secondary">
                    <span>33% Complete</span>
                    <span className="text-academics-text">12/36 Lessons</span>
                 </div>
                 <div className="h-[3px] w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-academics-accent w-1/3 rounded-full"></div>
                 </div>
              </div>
            </div>

            {/* Action */}
            <div className="flex flex-col items-center md:items-end gap-3 min-w-[140px]">
               <span className="text-[10px] font-bold uppercase tracking-widest text-academics-text-muted">Up Next</span>
               <div className="text-right hidden md:block">
                  <div className="text-sm font-medium">The Perfect Hook</div>
                  <div className="text-xs text-academics-text-secondary">Lesson 3.2</div>
               </div>
               <Link to="/academics/course/viral-content/lesson/1.2.1" className="bg-academics-text text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2 w-full md:w-auto justify-center">
                  Resume <ChevronRight size={16} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Your Other Courses */}
      <section>
        <div className="flex items-center justify-between mb-6">
           <h2 className="text-xs font-black uppercase tracking-[0.2em] text-academics-text-muted">Your Other Courses</h2>
           <button className="text-xs font-bold text-academics-text hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <CourseCard 
             category="Cyber Security" 
             title="Ethical Hacking 101" 
             progress={35} 
             color="bg-emerald-500"
             image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
           />
           <CourseCard 
             category="Development" 
             title="Advanced React Patterns" 
             progress={12} 
             color="bg-blue-500"
             image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop"
           />
           <CourseCard 
             category="Design" 
             title="Design Systems in Figma" 
             progress={88} 
             color="bg-pink-500"
             image="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"
           />
        </div>
      </section>
    </div>
  );
};

const CourseCard = ({ category, title, progress, color, image }) => {
  return (
    <div className="bg-academics-surface border border-academics-border rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
       <div className="aspect-[16/9] rounded-lg bg-gray-100 mb-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <span className="absolute top-3 left-3 bg-black text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded">
             {category}
          </span>
       </div>
       
       <h4 className="font-semibold text-academics-text mb-3">{title}</h4>
       
       <div className="space-y-1.5">
          <div className="flex justify-between text-[10px] uppercase font-bold text-academics-text-muted">
             <span>{progress}%</span>
             <span className="group-hover:text-academics-accent transition-colors">Resume</span>
          </div>
          <div className="h-[2px] w-full bg-gray-100 rounded-full overflow-hidden">
             <div className={`h-full ${color}`} style={{ width: `${progress}%` }}></div>
          </div>
       </div>
    </div>
  )
}

export default AcademicsDashboard;
