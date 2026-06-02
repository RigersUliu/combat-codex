export default function MythCard({ myth, selected, onSelect }) {
  return (
    <button className={`myth-card card ${selected ? 'selected' : ''}`} onClick={() => onSelect(myth)}>
      <span className="badge">{myth.tag}</span>
      <h3>{myth.title}</h3>
      <p>Click to reveal the truth behind this common combat-sports myth.</p>
    </button>
  );
}
