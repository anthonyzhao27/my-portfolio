import Nav from './Nav.jsx';
import Hero from './Hero.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import { site } from './data.js';

export default function App() {
  return (
    <>
      <div className="page">
        <Nav />
      </div>
      <main>
        <Hero />
        <div className="page">
          <Experience />
          <Projects />
          <Contact />
          <footer>Updated {site.updated}.</footer>
        </div>
      </main>
    </>
  );
}
