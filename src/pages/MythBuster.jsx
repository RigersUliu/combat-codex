import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import MythCard from '../components/MythCard.jsx';
import { myths } from '../data/myths.js';

export default function MythBuster() {
  const [selectedMyth, setSelectedMyth] = useState(myths[0]);

  return (
    <div className="page">
      <PageHeader eyebrow="Combat Reality" title="Myth Buster" text="Click a myth card to reveal a realistic explanation based on training, safety, and sport logic." />
      <div className="layout two-column">
        <section className="grid two">
          {myths.map((myth) => (
            <MythCard key={myth.id} myth={myth} selected={selectedMyth.id === myth.id} onSelect={setSelectedMyth} />
          ))}
        </section>
        <aside className="card sticky-panel">
          <span className="badge">Selected Myth</span>
          <h2>{selectedMyth.title}</h2>
          <p>{selectedMyth.explanation}</p>
        </aside>
      </div>
    </div>
  );
}
