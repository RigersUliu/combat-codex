import { Link } from 'react-router-dom';

export default function FeatureCard({ title, description, icon, path }) {
  return (
    <Link to={path} className="feature-card card lift">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="card-link">Enter feature →</span>
    </Link>
  );
}
