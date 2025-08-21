import Hero from "./Hero";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}