export function SectionHead({ id, title }) {
  return (
    <div className="row row--head" id={id}>
      <h2>{title}</h2>
    </div>
  );
}

export function Row({ when, children }) {
  return (
    <div className="row">
      <div className="rail">{when}</div>
      <div className="cell">{children}</div>
    </div>
  );
}
