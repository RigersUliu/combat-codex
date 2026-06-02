import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import MartialArtQuiz from './pages/MartialArtQuiz.jsx';
import FightIQQuiz from './pages/FightIQQuiz.jsx';
import MythBuster from './pages/MythBuster.jsx';
import GorillaSimulator from './pages/GorillaSimulator.jsx';
import CommunityForum from './pages/CommunityForum.jsx';
import LocalFightStreams from './pages/LocalFightStreams.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/martial-art-quiz" element={<MartialArtQuiz />} />
          <Route path="/fight-iq-quiz" element={<FightIQQuiz />} />
          <Route path="/myth-buster" element={<MythBuster />} />
          <Route path="/gorilla-simulator" element={<GorillaSimulator />} />
          <Route path="/community-forum" element={<CommunityForum />} />
          <Route path="/local-fight-streams" element={<LocalFightStreams />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
