export default function SectionLabel({ number, children, light = false }) {
  return (
    <div className={`section-label${light ? " section-label--light" : ""}`}>
      <span>{number}</span>
      <span aria-hidden="true" className="section-label__line" />
      <span>{children}</span>
    </div>
  );
}
