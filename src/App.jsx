import Nav from './Nav.jsx';
import Hero from './Hero.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import { site } from './data.js';

export default function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer>Updated {site.updated}.</footer>
    </div>
  );
}
