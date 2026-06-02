export default function StreamCard({ stream, selected, onSelect }) {
  return (
    <button className={`stream-card card ${selected ? 'selected' : ''}`} onClick={() => onSelect(stream)}>
      <span className="badge">{stream.status}</span>
      <h3>{stream.eventName}</h3>
      <p>{stream.fighters}</p>
      <small>{stream.date}</small>
    </button>
  );
}
