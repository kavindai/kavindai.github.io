import { Box } from '@chakra-ui/react';
import { ScrollProgress } from '@/components/common/ScrollProgress';
import { BackToTop } from '@/components/common/BackToTop';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Publications } from '@/components/Publications';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <Box bg='bg.canvas' color='fg.default' minH='100vh'>
      <ScrollProgress />
      <Navbar />
      <Box as='main'>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Publications />
        <Education />
        <Contact />
      </Box>
      <Footer />
      <BackToTop />
    </Box>
  );
}

export default App;
