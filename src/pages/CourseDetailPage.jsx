// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Play, Clock, BookOpen, Globe, Star } from 'lucide-react';

// const CourseDetailPage = () => {
//   const { id } = useParams();

//   // This would normally come from a data file, but we'll format the ID for now
//   const courseTitle = id.replace(/-/g, ' ');

//   return (
//     <div className="min-h-screen bg-black text-white pt-24">
//       <div className="max-w-7xl mx-auto px-6 py-12">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
//           {/* LEFT CONTENT: INFORMATION */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             {/* Status Badge */}
//             <div className="flex items-center gap-3 mb-8">
//               <span className="relative flex h-3 w-3">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
//               </span>
//               <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">
//                 New Cohort Enrollment Open
//               </span>
//             </div>

//             {/* Main Title */}
//             <h1 className="text-5xl md:text-7xl font-black leading-[0.9] uppercase tracking-tighter mb-6">
//               <span className="text-white">{courseTitle.split(' ')[0]}</span> <br />
//               <span className="text-transparent" style={{ WebkitTextStroke: '1px #00F7FF' }}>
//                 {courseTitle.split(' ').slice(1).join(' ')}
//               </span>
//             </h1>

//             <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl leading-relaxed font-light">
//               The 2026 Blueprint to Mastering Retention and Building a <span className="text-white font-bold">7-Figure Digital Brand.</span>
//             </p>

//             {/* Tech Specs Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
//               {[
//                 { icon: <Clock size={18} />, label: "12.5+ Hours", sub: "HD Stream" },
//                 { icon: <BookOpen size={18} />, label: "12 Chapters", sub: "Step-By-Step" },
//                 { icon: <Globe size={18} />, label: "Hindi", sub: "Eng Subtitles" }
//               ].map((spec, i) => (
//                 <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
//                   <div className="text-accent">{spec.icon}</div>
//                   <div>
//                     <div className="text-sm font-bold">{spec.label}</div>
//                     <div className="text-[10px] text-gray-500 uppercase tracking-widest">{spec.sub}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-6 mb-10">
//               <button className="bg-accent text-black px-10 py-4 rounded-xl font-black text-sm tracking-widest shadow-neon hover:scale-105 transition-all">
//                 JOIN NOW
//               </button>
//               <button className="border border-white/20 hover:border-accent/50 px-10 py-4 rounded-xl font-black text-sm tracking-widest transition-all">
//                 SEE CURRICULUM ↓
//               </button>
//             </div>

//             {/* Social Proof */}
//             {/* <div className="flex items-center gap-4">
//               <div className="flex -space-x-3">
//                 {[1, 2, 3, 4].map(i => (
//                   <div key={i} className="w-10 h-10 rounded-full bg-gray-800 border-2 border-black" />
//                 ))}
//                 <div className="w-10 h-10 rounded-full bg-accent text-black flex items-center justify-center text-[10px] font-black border-2 border-black">
//                   +12k
//                 </div>
//               </div>
//               <div>
//                 <div className="flex text-yellow-500 gap-1">
//                   {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
//                 </div>
//                 <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
//                   4,828 Sellers Based on Alumni Reviews
//                 </div>
//               </div>
//             </div> */}

//           </motion.div>

//           {/* RIGHT CONTENT: VIDEO PREVIEW CARD */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative group"
//           >
//             {/* The Outer Frame with running glow effect from CTA */}
//             <div className="relative p-[1px] rounded-[2.5rem] overflow-hidden">
//                <div className="absolute inset-[-100%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00F7FF_0%,transparent_25%,#00F7FF_50%,transparent_75%,#00F7FF_100%)] opacity-30" />
               
//                <div className="relative bg-[#080808] rounded-[2.4rem] aspect-video md:aspect-square overflow-hidden border border-white/10">
//                   {/* Placeholder for your specific Image */}
//                   <div className="absolute inset-0 bg-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
//                     <p className="text-white/20 font-black tracking-widest">COURSE_PREVIEW_IMG</p>
//                   </div>

//                   {/* Play Button Overlay */}
//                   <div className="absolute inset-0 flex items-center justify-center z-20">
//                     <motion.button 
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="w-24 h-24 rounded-full bg-accent/10 backdrop-blur-xl border border-accent/40 flex items-center justify-center text-accent shadow-neon transition-all"
//                     >
//                       <Play size={32} fill="currentColor" />
//                     </motion.button>
//                   </div>

//                   {/* Silver Play Button Tag */}
//                   {/* <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-3 z-30">
//                     <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center">
//                       <Play size={14} fill="white" stroke="white" />
//                     </div>
//                     <div>
//                       <div className="text-[10px] font-black text-white uppercase tracking-tighter">Silver Play Button</div>
//                       <div className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Awarded for 100k Subs</div>
//                     </div>
//                   </div> */}
//                </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetailPage;



























// // src/pages/CourseDetailPage.jsx
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Play, Clock, BookOpen, Globe, Instagram, Youtube, Briefcase } from 'lucide-react';
// import { allCourses } from '../data/coursesData'; // Import your data

// const CourseDetailPage = () => {
//   const { id } = useParams();
  
//   // Find the specific course data based on the URL ID
//   const course = allCourses.find((c) => c.id === id);

//   if (!course) return <div className="text-white pt-40 text-center">Course Not Found</div>;

//   return (
//     <div className="bg-black min-h-screen text-white pt-24">
//       {/* SECTION 1: HERO */}
//       <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
//           <div className="flex items-center gap-3 mb-6">
//             <span className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-neon" />
//             <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">Enrollment Open</span>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter mb-6">
//             {course.title} <br />
//             <span className="text-transparent" style={{ WebkitTextStroke: '1px #00F7FF' }}>{course.edition}</span>
//           </h1>
//           <p className="text-gray-300 text-xl mb-4 font-bold">{course.description}</p>
//           <p className="text-gray-500 text-sm mb-10 max-w-lg leading-relaxed">{course.subText}</p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
//             <StatCard icon={<Clock size={18}/>} title={course.stats.hours} sub="HD Content" />
//             <StatCard icon={<BookOpen size={18}/>} title={course.stats.chapters} sub="Step-by-step" />
//             <StatCard icon={<Globe size={18}/>} title={course.stats.language} sub="Eng Subtitles" />
//           </div>

//           <div className="flex gap-6">
//             <button className="bg-accent text-black px-10 py-4 rounded-xl font-black text-sm tracking-widest shadow-neon">JOIN NOW</button>
//             <button className="border border-white/20 px-10 py-4 rounded-xl font-black text-sm tracking-widest hover:border-accent/50">CURRICULUM</button>
//           </div>
//         </motion.div>

//         {/* IMAGE/VIDEO SIDE */}
//         <div className="relative p-[1px] rounded-[2.5rem] overflow-hidden bg-white/10">
//           <img src={course.image} className="w-full aspect-square object-cover rounded-[2.4rem] opacity-60" alt="Preview" />
//           <div className="absolute inset-0 flex items-center justify-center">
//              <button className="w-20 h-20 rounded-full bg-accent/20 backdrop-blur-md border border-accent/40 flex items-center justify-center text-accent shadow-neon">
//                 <Play fill="currentColor" />
//              </button>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 2: IMPACT */}
//       <section className="bg-[#050505] py-20 px-6 border-y border-white/5">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
//           <div className="max-w-xs">
//             <h2 className="text-2xl font-black uppercase tracking-tight">Digital Royalty: The Impact</h2>
//             <p className="text-gray-500 text-sm mt-2">Numbers don't lie. Join a community built on results.</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <ImpactCard icon={<Instagram className="text-pink-500"/>} val={course.impact.instagram} label="INSTAGRAM" />
//             <ImpactCard icon={<Youtube className="text-red-600"/>} val={course.impact.youtube} label="YOUTUBE" />
//             <ImpactCard icon={<Briefcase className="text-blue-500"/>} val={course.impact.linkedin} label="LINKEDIN" />
//           </div>
//         </div>
//       </section>
//     </div>



//   );
// };

// // Sub-components to keep code clean
// const StatCard = ({ icon, title, sub }) => (
//   <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
//     <div className="text-accent">{icon}</div>
//     <div><div className="text-sm font-bold">{title}</div><div className="text-[10px] text-gray-500 uppercase tracking-widest">{sub}</div></div>
//   </div>
// );

// const ImpactCard = ({ icon, val, label }) => (
//   <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 flex flex-col items-center min-w-[200px]">
//     <div className="mb-4">{icon}</div>
//     <div className="text-3xl font-black">{val}</div>
//     <div className="text-[10px] text-gray-500 font-black tracking-widest">{label}</div>
//   </div>

// );

// export default CourseDetailPage;


























// // src/pages/CourseDetailPage.jsx
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// // Added MapPin, Camera, TrendingUp to imports
// import { 
//   Play, Clock, BookOpen, Globe, Instagram, Youtube, 
//   Briefcase, MapPin, Camera, TrendingUp 
// } from 'lucide-react';
// import { allCourses } from '../data/coursesData';

// const CourseDetailPage = () => {
//   const { id } = useParams();
  
//   const course = allCourses.find((c) => c.id === id);

//   if (!course) return <div className="text-white pt-40 text-center uppercase font-black tracking-widest">Course Not Found</div>;

//   return (
//     <div className="bg-black min-h-screen text-white pt-24">
//       {/* SECTION 1: HERO */}
//       <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
//           <div className="flex items-center gap-3 mb-6">
//             <span className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-neon" />
//             <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">Enrollment Open</span>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter mb-6">
//             {course.title} <br />
//             <span className="text-transparent" style={{ WebkitTextStroke: '1px #00F7FF' }}>{course.edition}</span>
//           </h1>
//           <p className="text-gray-300 text-xl mb-4 font-bold">{course.description}</p>
//           <p className="text-gray-500 text-sm mb-10 max-w-lg leading-relaxed">{course.subText}</p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
//             <StatCard icon={<Clock size={18}/>} title={course.stats.hours} sub="HD Content" />
//             <StatCard icon={<BookOpen size={18}/>} title={course.stats.chapters} sub="Step-by-step" />
//             <StatCard icon={<Globe size={18}/>} title={course.stats.language} sub="Eng Subtitles" />
//           </div>

//           <div className="flex gap-6">
//             <button className="bg-accent text-black px-10 py-4 rounded-xl font-black text-sm tracking-widest shadow-neon transition-transform active:scale-95">JOIN NOW</button>
//             <button className="border border-white/20 px-10 py-4 rounded-xl font-black text-sm tracking-widest hover:border-accent/50 transition-colors">CURRICULUM</button>
//           </div>
//         </motion.div>

//         {/* IMAGE/VIDEO SIDE */}
//         <div className="relative p-[1px] rounded-[2.5rem] overflow-hidden bg-white/10 group">
//           <img src={course.image} className="w-full aspect-square object-cover rounded-[2.4rem] opacity-60 group-hover:opacity-40 transition-opacity" alt="Preview" />
//           <div className="absolute inset-0 flex items-center justify-center">
//              <button className="w-20 h-20 rounded-full bg-accent/20 backdrop-blur-md border border-accent/40 flex items-center justify-center text-accent shadow-neon hover:scale-110 transition-transform">
//                 <Play fill="currentColor" />
//              </button>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 2: IMPACT */}
//       <section className="bg-[#050505] py-20 px-6 border-y border-white/5">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
//           <div className="max-w-xs text-center lg:text-left">
//             <h2 className="text-2xl font-black uppercase tracking-tight">Digital Royalty: The Impact</h2>
//             <p className="text-gray-500 text-sm mt-2">Numbers don't lie. Join a community built on results.</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-auto">
//             <ImpactCard icon={<Instagram className="text-pink-500"/>} val={course.impact.instagram} label="INSTAGRAM" />
//             <ImpactCard icon={<Youtube className="text-red-600"/>} val={course.impact.youtube} label="YOUTUBE" />
//             <ImpactCard icon={<Briefcase className="text-blue-500"/>} val={course.impact.linkedin} label="LINKEDIN" />
//           </div>
//         </div>
//       </section>

//       {/* SECTION 3: THE METHODOLOGY */}
//       {course.methodology && (
//         <section className="py-24 px-6 bg-black">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-16">
//               <h3 className="text-accent text-xs font-black tracking-[0.5em] uppercase mb-4">The Method</h3>
//               <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
//                 {course.methodology.title}
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {course.methodology.features.map((feature, idx) => (
//                 <motion.div
//                   key={idx}
//                   whileHover={{ y: -10 }}
//                   className="bg-[#111111] p-8 rounded-3xl border border-white/5 relative overflow-hidden group"
//                 >
//                   <div className="bg-accent/10 p-4 rounded-xl w-fit mb-6 text-accent">
//                     {/* Icon Logic */}
//                     {idx === 0 && <MapPin size={24} />}
//                     {idx === 1 && <Camera size={24} />}
//                     {idx === 2 && <TrendingUp size={24} />}
//                   </div>
//                   <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{feature.title}</h4>
//                   <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
                  
//                   {/* Decorative background element */}
//                   <div className="absolute bottom-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
//                      <div className="w-24 h-24 bg-gradient-to-br from-accent to-transparent rounded-full -mr-10 -mb-10" />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}






      
//     </div>
//   );
// };

// // Sub-components
// const StatCard = ({ icon, title, sub }) => (
//   <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
//     <div className="text-accent">{icon}</div>
//     <div>
//         <div className="text-sm font-bold">{title}</div>
//         <div className="text-[10px] text-gray-500 uppercase tracking-widest">{sub}</div>
//     </div>
//   </div>
// );

// const ImpactCard = ({ icon, val, label }) => (
//   <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 flex flex-col items-center min-w-[200px] hover:border-white/20 transition-colors">
//     <div className="mb-4">{icon}</div>
//     <div className="text-3xl font-black">{val}</div>
//     <div className="text-[10px] text-gray-500 font-black tracking-widest mt-1">{label}</div>
//   </div>
// );

// export default CourseDetailPage;





















































// src/pages/CourseDetailPage.jsx
import React, { useState } from 'react'; // Added useState
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { 
  Play, Clock, BookOpen, Globe, Instagram, Youtube, 
  Briefcase, MapPin, Camera, TrendingUp, ChevronDown, 
  Lock, CheckCircle2, Quote, Plus // Added Plus
} from 'lucide-react';
import { allCourses } from '../data/coursesData';

// --- SUB-COMPONENTS (Defined outside to keep main component clean) ---

const StatCard = ({ icon, title, sub }) => (
  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
    <div className="text-accent">{icon}</div>
    <div>
      <div className="text-sm font-bold">{title}</div>
      <div className="text-[10px] text-gray-500 uppercase tracking-widest">{sub}</div>
    </div>
  </div>
);

const ImpactCard = ({ icon, val, label }) => (
  <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 flex flex-col items-center min-w-[200px] hover:border-white/20 transition-colors">
    <div className="mb-4">{icon}</div>
    <div className="text-3xl font-black">{val}</div>
    <div className="text-[10px] text-gray-500 font-black tracking-widest mt-1">{label}</div>
  </div>
);

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false); // Used imported useState

  return (
    <div className="border border-white/5 bg-[#0A0A0A] rounded-2xl overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center group"
      >
        <span className={`font-bold transition-colors ${isOpen ? 'text-accent' : 'text-white'}`}>
          {question}
        </span>
        <Plus 
          className={`transition-transform duration-500 ${isOpen ? 'rotate-45 text-accent' : 'text-gray-500'}`} 
          size={20} 
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};










const CourseDetailPage = () => {
  const { id } = useParams();
  
  const course = allCourses.find((c) => c.id === id);

  if (!course) return <div className="text-white pt-40 text-center uppercase font-black tracking-widest">Course Not Found</div>;

  return (
    <div className="bg-black min-h-screen text-white pt-24">
      {/* SECTION 1: HERO */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-neon" />
            <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">Enrollment Open</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter mb-6">
            {course.title} <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #00F7FF' }}>{course.edition}</span>
          </h1>
          <p className="text-gray-300 text-xl mb-4 font-bold">{course.description}</p>
          <p className="text-gray-500 text-sm mb-10 max-w-lg leading-relaxed">{course.subText}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <StatCard icon={<Clock size={18}/>} title={course.stats.hours} sub="HD Content" />
            <StatCard icon={<BookOpen size={18}/>} title={course.stats.chapters} sub="Step-by-step" />
            <StatCard icon={<Globe size={18}/>} title={course.stats.language} sub="Eng Subtitles" />
          </div>

          <div className="flex gap-6">
            <button className="bg-accent text-black px-10 py-4 rounded-xl font-black text-sm tracking-widest shadow-neon transition-transform active:scale-95">JOIN NOW</button>
            <button className="border border-white/20 px-10 py-4 rounded-xl font-black text-sm tracking-widest hover:border-accent/50 transition-colors">CURRICULUM</button>
          </div>
        </motion.div>

        {/* IMAGE/VIDEO SIDE */}
        <div className="relative p-[1px] rounded-[2.5rem] overflow-hidden bg-white/10 group">
          <img src={course.image} className="w-full aspect-square object-cover rounded-[2.4rem] opacity-60 group-hover:opacity-40 transition-opacity" alt="Preview" />
          <div className="absolute inset-0 flex items-center justify-center">
             <button className="w-20 h-20 rounded-full bg-accent/20 backdrop-blur-md border border-accent/40 flex items-center justify-center text-accent shadow-neon hover:scale-110 transition-transform">
                <Play fill="currentColor" />
             </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: IMPACT */}
      <section className="bg-[#050505] py-20 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xs text-center lg:text-left">
            <h2 className="text-2xl font-black uppercase tracking-tight">Digital Royalty: The Impact</h2>
            <p className="text-gray-500 text-sm mt-2">Numbers don't lie. Join a community built on results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-auto">
            <ImpactCard icon={<Instagram className="text-pink-500"/>} val={course.impact.instagram} label="INSTAGRAM" />
            <ImpactCard icon={<Youtube className="text-red-600"/>} val={course.impact.youtube} label="YOUTUBE" />
            <ImpactCard icon={<Briefcase className="text-blue-500"/>} val={course.impact.linkedin} label="LINKEDIN" />
          </div>
        </div>
      </section>

      {/* SECTION 3: THE METHODOLOGY */}
      {course.methodology && (
        <section className="py-24 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-accent text-xs font-black tracking-[0.5em] uppercase mb-4">The Method</h3>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                {course.methodology.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {course.methodology.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-[#111111] p-8 rounded-3xl border border-white/5 relative overflow-hidden group"
                >
                  <div className="bg-accent/10 p-4 rounded-xl w-fit mb-6 text-accent">
                    {idx === 0 && <MapPin size={24} />}
                    {idx === 1 && <Camera size={24} />}
                    {idx === 2 && <TrendingUp size={24} />}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{feature.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
                  <div className="absolute bottom-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
                     <div className="w-24 h-24 bg-gradient-to-br from-accent to-transparent rounded-full -mr-10 -mb-10" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: CURRICULUM & PRICING */}
      {course.curriculum && course.pricing && (
        <section className="py-24 px-6 bg-[#050505]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
            
            {/* LEFT: CURRICULUM ACCORDION */}
            <div className="flex-1">
              <h3 className="text-3xl font-black mb-10 uppercase tracking-tighter">Course Curriculum</h3>
              <div className="space-y-4">
                {course.curriculum.map((item, idx) => (
                  <div key={idx} className="bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden group">
                    <div className="p-6 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-6">
                        <span className="text-accent font-black text-xs tracking-widest uppercase">Chapter {item.chapter}</span>
                        <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors">{item.title}</h4>
                      </div>
                      <ChevronDown className="text-gray-600 group-hover:text-accent transition-all" size={20} />
                    </div>
                    
                    <div className="px-6 pb-6 space-y-3">
                      {item.lessons.map((lesson, lIdx) => (
                        <div key={lIdx} className="flex items-center justify-between py-3 border-t border-white/5">
                          <div className="flex items-center gap-3 text-sm text-gray-400">
                            <Lock size={14} className="text-gray-600" />
                            <span>{lesson.name}</span>
                          </div>
                          <span className="text-xs font-mono text-gray-600">{lesson.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center mt-8 text-gray-600 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-accent transition-colors">
                View All Chapters
              </p>
            </div>

            {/* RIGHT: STICKY PRICE CARD */}
            <div className="lg:w-96">
              <div className="sticky top-32 bg-[#0A0A0A] border border-accent/20 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,247,255,0.05)]">
                <div className="aspect-video bg-white/5 rounded-2xl mb-8 overflow-hidden relative border border-white/10">
                  <img src={course.image} className="w-full h-full object-cover opacity-50" alt="Card Preview" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play size={24} className="text-accent" fill="currentColor" />
                  </div>
                </div>

                <h3 className="text-xl font-black text-white mb-2 uppercase">{course.title}</h3>
                <div className="flex items-end gap-3 mb-8">
                  <span className="text-4xl font-black text-accent">{course.pricing.currentPrice}</span>
                  <span className="text-lg text-gray-600 line-through mb-1">{course.pricing.originalPrice}</span>
                </div>

                <button className="w-full bg-accent text-black font-black py-4 rounded-xl shadow-neon uppercase tracking-widest text-xs mb-8 hover:scale-[1.02] active:scale-95 transition-transform">
                  Register Today
                </button>

                <ul className="space-y-4">
                  {course.pricing.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-xs font-medium text-gray-400">
                      <CheckCircle2 size={16} className="text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )} 





{/* SECTION 5: TESTIMONIALS & CERTIFICATION */}

{course.testimonials && course.certification && (
  <section className="py-24 px-6 bg-black relative overflow-hidden">
  {/* Background Glow */}
  <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] -translate-y-1/2 pointer-events-none" />

  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
    
    {/* LEFT: ALUMNI TESTIMONIALS */}
    <div className="flex-1 w-full">
      <h3 className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-tighter text-white">
        What Alumni <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px #00F7FF' }}>Are Saying</span>
      </h3>
      
      <div className="space-y-6">
        {course.testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] border border-white/5 p-8 rounded-3xl relative group hover:border-accent/20 transition-colors"
          >
            <Quote className="absolute top-6 right-8 text-white/5 group-hover:text-accent/10 transition-colors" size={60} />
            <p className="text-gray-400 italic leading-relaxed mb-8 relative z-10 text-lg">
              "{t.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-800 border border-white/10 overflow-hidden">
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="text-white font-bold text-sm">{t.name}</h5>
                <p className="text-accent text-[10px] font-black uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* RIGHT: CERTIFICATION VISUAL */}
    <div className="flex-1 w-full lg:w-auto">
      <motion.div 
        whileHover={{ rotate: -2, scale: 1.02 }}
        className="relative p-2 bg-white rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.1)] rotate-2 transition-transform"
      >
        {/* Certificate Placeholder UI */}
        <div className="border-4 border-double border-black/10 p-8 text-black text-center bg-white min-h-[400px] flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-black rounded-full mx-auto mb-6 flex items-center justify-center text-white font-black text-xs">NX</div>
            <h4 className="text-2xl font-serif uppercase tracking-[0.2em] mb-2">Certificate</h4>
            <p className="text-[10px] uppercase tracking-widest text-gray-400">of completion</p>
          </div>
          
          <div className="py-8">
            <p className="font-serif italic text-sm text-gray-500 mb-2">This certifies that</p>
            <div className="w-full h-px bg-black/20 mb-4" />
            <p className="text-xs uppercase font-bold tracking-widest">Has successfully completed the</p>
            <p className="text-sm font-black uppercase">{course.title} Masterclass</p>
          </div>

          <div className="flex justify-between items-end px-4">
            <div className="text-left">
              <div className="w-24 h-px bg-black/20 mb-1" />
              <p className="text-[8px] uppercase font-bold">Instructor</p>
            </div>
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
              <CheckCircle2 size={20} className="text-white" />
            </div>
            <div className="text-right">
              <div className="w-24 h-px bg-black/20 mb-1" />
              <p className="text-[8px] uppercase font-bold">Date</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      <div className="mt-10 text-center lg:text-left">
        <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black text-accent uppercase tracking-[0.3em]">
          {course.certification.title}
        </span>
        <p className="text-gray-500 text-sm mt-4 max-w-sm">
          {course.certification.sub}
        </p>
      </div>
    </div>

  </div>
</section>
)}









{/* SECTION 6: FREQUENTLY ASKED QUESTIONS */}

  {course.faqs && (
        <section className="py-24 px-6 bg-[#050505]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-white text-3xl md:text-5xl font-black uppercase">FAQ</h2>
            </div>
            <div className="space-y-4">
              {course.faqs.map((faq, idx) => (
                <FAQAccordion key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      )}









  {/* SECTION 7: FINAL JOURNEY CTA */}

{/* SECTION 7: FINAL JOURNEY CTA */}
{course.finalCTA && (
  <section className="py-32 px-6 bg-black relative overflow-hidden">
    {/* Dynamic Background Elements */}
    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/10 blur-[180px] rounded-full pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl mx-auto relative rounded-[4rem] overflow-hidden bg-[#080808] border border-white/5 shadow-2xl"
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,247,255,0.15),_transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      <div className="relative z-10 flex flex-col lg:flex-row items-stretch min-h-[600px]">
        
        {/* Left side: Text Content */}
        <div className="flex-1 p-12 md:p-24 flex flex-col justify-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Last Chance for 2026 Batch</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] uppercase tracking-tighter">
              {course.finalCTA.heading.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? "text-transparent stroke-text" : ""}>
                  {word}{' '}
                  <style jsx>{`
                    .stroke-text {
                      -webkit-text-stroke: 1px rgba(255,255,255,0.3);
                    }
                  `}</style>
                </span>
              ))}
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl font-medium leading-relaxed">
              {course.finalCTA.subheading}
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button className="group relative bg-accent text-black px-12 py-6 rounded-2xl font-black text-sm tracking-[0.2em] uppercase overflow-hidden transition-all shadow-neon hover:scale-105 active:scale-95">
                <span className="relative z-10">{course.finalCTA.buttonText}</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
                <div className="pl-6 text-[10px] font-black uppercase tracking-widest text-gray-500 self-center">
                  +1.2k Joining this week
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side: Animated Mentor Visual */}
        <div className="flex-1 relative flex items-end justify-center lg:justify-end pr-0 lg:pr-12 pt-12 lg:pt-0">
          {/* Glowing Aura behind mentor */}
          <div className="absolute bottom-0 w-[120%] h-[80%] bg-accent/20 blur-[120px] rounded-full translate-y-1/2" />
          
          <motion.div 
            className="relative z-20 w-full max-w-lg"
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <img 
              src={course.finalCTA.mentorImage} 
              alt="Mentor" 
              className="w-full h-auto object-cover filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
            {/* Bottom Gradient Fade for Mentor */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent z-30" />
          </motion.div>
        </div>

      </div>
    </motion.div>
  </section>
)}














    </div>
  );
};


export default CourseDetailPage;









