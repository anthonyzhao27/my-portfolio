import { about } from './data.js';
import { SectionHead } from './Row.jsx';
import portrait from './assets/portrait.webp';

export default function About() {
  return (
    <section aria-labelledby="about">
      <SectionHead id="about" title="About" />
      <div className="row">
        <div className="rail">
          <img className="portrait" src={portrait} alt="Anthony Zhao, arms crossed, in a black t-shirt" width="1400" height="1750" />
        </div>
        <div className="cell">
          {about.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
