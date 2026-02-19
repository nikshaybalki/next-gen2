// import { motion } from 'framer-motion';

// const CoursesPage = () => {
//   const allCourses = [
//     {
//       title: "Viral Blueprint",
//       category: "Content Strategy",
//       level: "Intermediate",
//       duration: "6 Weeks",
//       price: "₹9,999",
//       image: "/course1.jpg"
//     },
//     {
//       title: "AI Creator Pro",
//       category: "Automation",
//       level: "All Levels",
//       duration: "4 Weeks",
//       price: "₹7,499",
//       image: "/course2.jpg"
//     },
//     {
//       title: "Monetization Mastery",
//       category: "Business",
//       level: "Advanced",
//       duration: "8 Weeks",
//       price: "₹14,999",
//       image: "/course3.jpg"
//     },
//     // Add more courses as needed
//   ];

//   return (
//     <div className="min-h-screen bg-black pt-32 pb-20 px-6">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="mb-20 text-center">
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter"
//           >
//             MASTER <span className="text-transparent" style={{ WebkitTextStroke: '1px #00F7FF' }}>THE CRAFT</span>
//           </motion.h1>
//           <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
//             Pick your path. Every course is designed to turn attention into an asset.
//           </p>
//         </div>

//         {/* Courses Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {allCourses.map((course, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               whileHover={{ y: -10 }}
//               className="group relative bg-[#080808] border border-white/5 rounded-[2rem] overflow-hidden"
//             >
//               {/* Glow Effect on Hover */}
//               <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

//               {/* Course Thumbnail */}
//               <div className="h-60 bg-white/5 relative overflow-hidden">
//                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-10" />
//                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//                  <span className="absolute top-6 left-6 z-20 bg-accent text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
//                    {course.category}
//                  </span>
//               </div>

//               {/* Course Details */}
//               <div className="p-8">
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">{course.level}</span>
//                   <span className="text-accent font-mono text-sm">{course.duration}</span>
//                 </div>
//                 <h3 className="text-2xl font-black mb-6 group-hover:text-accent transition-colors">{course.title}</h3>
                
//                 <div className="flex items-center justify-between border-t border-white/5 pt-6">
//                   <span className="text-2xl font-black text-white">{course.price}</span>
//                   <button className="text-accent font-black text-xs tracking-[0.2em] border-b border-accent/30 hover:border-accent transition-all pb-1 uppercase">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoursesPage;









import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { allCourses } from '../data/coursesData';

const CoursesPage = () => {
  // Use the central data source

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter"
          >
            MASTER <span className="text-transparent" style={{ WebkitTextStroke: '1px #00F7FF' }}>THE CRAFT</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
            Pick your path. Every course is designed to turn attention into an asset.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allCourses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#080808] border border-white/5 rounded-[2rem] overflow-hidden"
            >
              {/* 3. Wrap the content in a Link to make the whole card clickable */}
              <Link to={`/course/${course.id}`}>
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Course Thumbnail */}
                <div className="h-60 bg-white/5 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-10" />
                   <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <span className="absolute top-6 left-6 z-20 bg-accent text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                     {course.category}
                   </span>
                </div>

                {/* Course Details */}
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">{course.edition}</span>
                    <span className="text-accent font-mono text-sm">{course.stats.hours}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-6 group-hover:text-accent transition-colors h-14 overflow-hidden">{course.title}</h3>
                  
                  <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <span className="text-2xl font-black text-white">{course.pricing?.currentPrice || '₹9,999'}</span>
                    <span className="text-accent font-black text-xs tracking-[0.2em] border-b border-accent/30 hover:border-accent transition-all pb-1 uppercase">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;