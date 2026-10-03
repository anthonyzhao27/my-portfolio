import { projects } from './data.js';
import { Row, SectionHead } from './Row.jsx';

export default function Projects() {
  return (
    <section aria-labelledby="projects">
      <SectionHead id="projects" title="Projects" />
      {projects.map((project) => (
        <Row key={project.title} when={project.when}>
          <h3>
            <a href={project.links[0].href} target="_blank" rel="noopener">{project.title}</a>
          </h3>
          <p>{project.summary}</p>
          <div className="stack">{project.stack}</div>
          <ul className="links">
            {project.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener">{link.label}</a>
              </li>
            ))}
          </ul>
        </Row>
      ))}
    </section>
  );
}
