export default function PageHeader({ eyebrow, title, text }) {
  return (
    <section className="page-header">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
