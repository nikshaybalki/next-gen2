import Hero from '../components/sections/Hero';
import Vision from '../components/sections/Vision';
import Impact from '../components/sections/Impact';
import CourseSection from '../components/sections/CourseSection';
import Curriculum from '../components/sections/Curriculum';
import Mentor from '../components/sections/Mentor';
import FAQ from '../components/sections/FAQ';

const Home = () => {
  return (
    <main>
      <Hero />
      <Vision />
      <Impact />
      <CourseSection />
      <Curriculum />
      <Mentor />
      <FAQ />
    </main>
  );
};

export default Home;