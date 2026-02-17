import Hero from '../components/sections/Hero';
import Vision from '../components/sections/Vision';
import Impact from '../components/sections/Impact';
import Courses from '../components/sections/Courses';
import Curriculum from '../components/sections/Curriculum';
import DigitalProduct from '../components/sections/DigitalProduct';
import Mentor from '../components/sections/Mentor';
import FAQ from '../components/sections/FAQ';

const Home = () => {
  return (
    <main>
      <Hero />
      <Vision />
      <Impact />
      <Courses />
      <Curriculum />
      <DigitalProduct />
      <Mentor />
      <FAQ />
    </main>
  );
};

export default Home;