import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/martial-art-quiz', label: 'Martial Art Quiz' },
  { path: '/fight-iq-quiz', label: 'Fight IQ Test' },
  { path: '/myth-buster', label: 'Myths' },
  { path: '/gorilla-simulator', label: 'Gorilla Sim' },
  { path: '/community-forum', label: 'Forum' },
  { path: '/local-fight-streams', label: 'Streams' }
];

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-mark codex" aria-hidden="true">CC</span>
        <span>Combat Codex</span>
      </Link>
      <nav className="nav-links">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => isActive ? 'active' : ''}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
