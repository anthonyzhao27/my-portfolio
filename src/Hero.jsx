import { site } from './data.js';
import portrait from './assets/portrait.webp';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <h1>{site.greeting}</h1>
        {site.intro.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <img
        className="hero-photo"
        src={portrait}
        alt="Anthony Zhao, arms crossed, in a black t-shirt"
        width="1400"
        height="1750"
        fetchPriority="high"
      />
    </section>
  );
}
