import FeatureCard from '../components/FeatureCard.jsx';

const features = [
  { title: 'Martial Art Quiz', icon: '🥊', path: '/martial-art-quiz', description: 'Discover whether boxing, BJJ, wrestling, Muay Thai, judo, karate, or MMA fits you best.' },
  { title: 'Fight IQ Test', icon: '📜', path: '/fight-iq-quiz', description: 'Test your tactical awareness through realistic sport-based fight scenarios.' },
  { title: 'Myth Buster', icon: '💥', path: '/myth-buster', description: 'Break down common myths about size, belts, muscles, and movie-style fighting.' },
  { title: 'Gorilla Simulator', icon: '🦍', path: '/gorilla-simulator', description: 'A ridiculous fictional calculator that teaches why biology is undefeated.' },
  { title: 'Community Forum', icon: '💬', path: '/community-forum', description: 'Create, edit, update, and delete local training posts with localStorage.' },
  { title: 'Local Fight Streams', icon: '📺', path: '/local-fight-streams', description: 'Simulate local fight cards with selected streams and per-match comments.' }
];

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Combat Sports Education Platform</span>
          <h1>Combat Codex</h1>
          <p>
            A dark-themed React training dashboard built for learning martial arts concepts, testing fight intelligence,
            discussing training, and simulating local fight streams in a safe educational environment.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#features">Explore Features</a>
          </div>
        </div>
        <div className="hero-panel card">
          <div className="fight-card-title">Main Event</div>
          <h2>Knowledge vs Ego</h2>
          <div className="versus-row"><span>Training</span><strong>VS</strong><span>Myths</span></div>
          <p>Winner by unanimous decision: consistent practice, good coaching, and common sense.</p>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-title">
          <span className="eyebrow">Final Project Features</span>
          <h2>Choose your training station</h2>
        </div>
        <div className="grid three">
          {features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
        </div>
      </section>
    </div>
  );
}
