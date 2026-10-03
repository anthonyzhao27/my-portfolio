import { experience } from './data.js';
import { Row, SectionHead } from './Row.jsx';

export default function Experience() {
  return (
    <section aria-labelledby="experience">
      <SectionHead id="experience" title="Experience" />
      {experience.map((job) => (
        <Row key={job.title} when={job.when}>
          <h3>{job.title}</h3>
          <div className="org">
            <a href={job.url} target="_blank" rel="noopener">{job.org}</a>, {job.place}
          </div>
        </Row>
      ))}
    </section>
  );
}
