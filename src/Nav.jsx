import { site } from './data.js';

export default function Nav() {
  return (
    <nav className="nav" aria-label="Site">
      <a className="wordmark" href="#top">
        {site.name.join(' ')}
      </a>
      <ul>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href={site.resume} target="_blank" rel="noopener">Resume</a></li>
      </ul>
    </nav>
  );
}
