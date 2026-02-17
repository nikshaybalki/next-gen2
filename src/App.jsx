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










import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import AcademicsPage from './pages/AcademicsPage';
import ProfilePage from './pages/ProfilePage';
import DigitalProductsPage from './pages/DigitalProductsPage';
import ContactPage from './pages/ContactPage';
import CourseDetailPage from './pages/CourseDetailPage'; // Import the dynamic detail page
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* Global styling for the app with your signature Cyan selection glow */}
      <div className="bg-black min-h-screen text-white selection:bg-accent selection:text-black">
        <Navbar />
        
        <Routes>
          {/* Main Navigation Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          
          {/* Dynamic Route: Handles every specific course subpage */}
          {/* This matches <Link to="/course/viral-blueprint"> etc. */}
          <Route path="/course/:id" element={<CourseDetailPage />} />
          <Route path="/academics" element={<AcademicsPage />} /> {/* NEW ACADEMICS ROUTE */}
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/vault" element={<DigitalProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;