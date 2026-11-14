import { Navbar }       from './components/Navbar';
import { Footer }       from './components/Footer';
import { Hero }         from './sections/Hero';
import { About }        from './sections/About';
import { Skills }       from './sections/Skills';
import { Projects }     from './sections/Projects';
import { Experience }   from './sections/Experience';
import { Education }    from './sections/Education';
import { Achievements } from './sections/Achievements';
import { Contact }      from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#05050e', color: '#f1f5f9' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
