// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import CoursesPage from './pages/CoursesPage';
// import DigitalProductsPage from './pages/DigitalProductsPage';
// import ContactPage from './pages/ContactPage';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Router>
//       <div className="bg-background min-h-screen text-textMain">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/courses" element={<CoursesPage />} />
//           <Route path="/digital-products" element={<DigitalProductsPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;




// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import CoursesPage from './pages/CoursesPage';
// import DigitalProductsPage from './pages/DigitalProductsPage';
// import ContactPage from './pages/ContactPage';
// import Footer from './components/Footer';



// function App() {
//   return (
//     <Router>
//       {/* Added 'selection' utilities to make highlighted text glow cyan */}
//       <div className="bg-black min-h-screen text-white selection:bg-accent selection:text-black">
//         <Navbar />
        
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/courses" element={<CoursesPage />} />
          
//           {/* Changed path to /vault to match the Navbar links */}
//           <Route path="/vault" element={<DigitalProductsPage />} />
          
//           <Route path="/contact" element={<ContactPage />} />
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;










import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import AcademicsPage from './pages/AcademicsPage';
import ProfilePage from './pages/ProfilePage';
import DigitalProductsPage from './pages/DigitalProductsPage';
import ContactPage from './pages/ContactPage';
import CourseDetailPage from './pages/CourseDetailPage'; // Import the dynamic detail page
import Footer from './components/Footer';


import AcademicsLayout from './layouts/AcademicsLayout';
import AcademicsDashboard from './pages/academics/AcademicsDashboard';
import LessonView from './pages/academics/LessonView';

function App() {
  return (
    <Router>
      {/* Global styling for the app with your signature Cyan selection glow */}
      <div className="bg-black min-h-screen text-white selection:bg-accent selection:text-black">
        
        <Routes>
          {/* Main Website Routes (User mentions 'navbar we will add this later' but context implies separate interfaces) */}
          {/* For now, we wrap main site pages in a Fragment or MainLayout if it existed, but here we just leave them as sibling routes 
              and conditionally render Navbar based on route, OR we can rely on the fact that AcademicsLayout HAS its own structure.
              BUT App.jsx has <Navbar /> globally outside Routes. We need to move Navbar INSIDE Routes or conditionally render it.
          */}
          
          <Route element={<><Navbar /><Outlet /><Footer /></>}>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/course/:id" element={<CourseDetailPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/vault" element={<DigitalProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/* New Academics "App" Section - Standalone Layout */}
          <Route path="/academics" element={<AcademicsLayout />}>
             <Route index element={<AcademicsDashboard />} />
             <Route path="course/:courseId/lesson/:lessonId" element={<LessonView />} />
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;