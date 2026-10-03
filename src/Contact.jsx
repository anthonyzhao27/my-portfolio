import { site } from './data.js';
import { SectionHead } from './Row.jsx';

const items = [
  { label: 'Email', text: site.email, href: `mailto:${site.email}` },
  { label: 'GitHub', text: 'anthonyzhao27', href: site.github },
  { label: 'LinkedIn', text: 'anthonyzhao27', href: site.linkedin },
  { label: 'Resume', text: 'One page, PDF', href: site.resume },
];

export default function Contact() {
  return (
    <section aria-labelledby="contact">
      <SectionHead id="contact" title="Contact" />
      <div className="row">
        <div className="rail">{site.place}</div>
        <div className="cell">
          <ul className="contact-list">
            {items.map((item) => (
              <li key={item.label}>
                <span className="label">{item.label}</span>
                <a href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
