import Hero from "./Hero";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}