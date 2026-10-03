import { site } from './data.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <h1>
        {site.name.map((line) => (
          <span className="line" key={line}><span>{line}</span></span>
        ))}
      </h1>
      <p>{site.tagline.join(' ')}</p>
    </section>
  );
}
