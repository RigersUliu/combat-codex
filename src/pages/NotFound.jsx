import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page narrow center-page">
      <section className="card result-card">
        <span className="eyebrow">404</span>
        <h1>Page tapped out</h1>
        <p>This route does not exist in Combat Codex.</p>
        <Link className="primary-btn" to="/">Back Home</Link>
      </section>
    </div>
  );
}
