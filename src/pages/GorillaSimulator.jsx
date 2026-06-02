import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import ProgressBar from '../components/ProgressBar.jsx';

const initialForm = {
  gender: 'Prefer not to say',
  height: 175,
  weight: 75,
  experience: 'Beginner',
  background: 'None',
  // Use categories (not raw numbers) so the easter-egg trigger can match exactly.
  strength: 'Medium',
  cardio: 'Medium',
  confidence: 'Medium'
};

export default function GorillaSimulator() {
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isBuiltDifferent =
      Number(form.height) === 188 &&
      Number(form.weight) === 89 &&
      form.gender === 'Male' &&
      form.experience === 'Intermediate' &&
      form.background === 'MMA' &&
      form.strength === 'High' &&
      form.cardio === 'Medium' &&
      form.confidence === 'Very High';

    if (isBuiltDifferent) {
      setResult({
        percentage: 100,
        title: '100% Win Rate — Built Different',
        explanation:
          'The simulator has detected the legendary Harlem X-Man build: 188 cm, 89 kg, MMA experience, high strength, medium cardio, dangerous confidence, and swag. Against all scientific reasoning, the system declares you\'re built different and sit at the pinnacle of man. This is obviously fictional and for entertainment only. Please do not fight gorillas.'
      });
      return;
    }

    const experienceBonus = { Beginner: 0.1, Intermediate: 0.3, Advanced: 0.5, Professional: 0.8 }[form.experience];
    const backgroundBonus = form.background === 'None' ? 0 : 0.2;
    const sizeBonus = Math.min(Number(form.weight) / 200, 0.45) + Math.min(Number(form.height) / 250, 0.35);
    // Map categorical inputs back to the original numeric-ish ranges.
    const strengthNumber = { Low: 3, Medium: 6, High: 9 }[form.strength] ?? 6;
    const cardioNumber = { Low: 3, Medium: 5, High: 7 }[form.cardio] ?? 5;
    const confidenceNumber = { Low: 3, Medium: 5, High: 7, 'Very High': 9 }[form.confidence] ?? 5;

    const fitnessBonus = (strengthNumber + cardioNumber) / 80;
    const confidencePenalty = confidenceNumber > 8 ? -0.2 : 0;
    const percent = Math.max(0.1, Math.min(2.7, experienceBonus + backgroundBonus + sizeBonus + fitnessBonus + confidencePenalty)).toFixed(1);
    setResult({
      percentage: Number(percent),
      explanation:
        'Even with training, the physical difference is absurd. A silverback has massive strength, weight, grip power, bone density, and natural weapons. The correct technique is leaving the area, not testing your double-leg.'
    });
  };

  return (
    <div className="page narrow">
      <PageHeader eyebrow="Fictional Calculator" title="Gorilla Simulator" text="A humorous educational calculator about why fighting a silverback gorilla is not a plan, it is a funeral speedrun." />
      <div className="disclaimer card">
        <strong>Disclaimer:</strong> This simulator is for entertainment only and does not represent real fighting advice.
      </div>
      <form className="card form-card" onSubmit={handleSubmit}>
        <div className="form-row two-cols">
          <label>Gender
            <select name="gender" value={form.gender} onChange={handleChange}>
              <option>Prefer not to say</option><option>Male</option><option>Female</option><option>Other</option>
            </select>
          </label>
          <label>Martial arts background
            <select name="background" value={form.background} onChange={handleChange}>
              <option>None</option>
              <option>Boxing</option>
              <option>BJJ</option>
              <option>Wrestling</option>
              <option>Muay Thai</option>
              <option>Judo</option>
              <option>MMA</option>
            </select>
          </label>
        </div>
        <div className="form-row two-cols">
          <label>Height cm
            <input type="number" name="height" value={form.height} onChange={handleChange} min="120" max="230" />
          </label>
          <label>Weight kg
            <input type="number" name="weight" value={form.weight} onChange={handleChange} min="35" max="200" />
          </label>
        </div>
        <label>Experience level
          <select name="experience" value={form.experience} onChange={handleChange}>
            <option>Beginner</option><option>Intermediate</option><option>Advanced</option><option>Professional</option>
          </select>
        </label>
        <label>
          Strength level
          <select name="strength" value={form.strength} onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>
        <label>
          Cardio level
          <select name="cardio" value={form.cardio} onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>
        <label>
          Confidence level
          <select name="confidence" value={form.confidence} onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Very High</option>
          </select>
        </label>
        <button className="primary-btn" type="submit">Calculate Fictional Chance</button>
      </form>

      {result && (
        <section className="result-card card glow">
          <span className="eyebrow">Officially unserious result</span>
          <h2>{result.title ?? `${result.percentage}% chance`}</h2>
          <ProgressBar value={result.percentage} label="Fictional survival confidence" />
          <p>{result.explanation}</p>
        </section>
      )}
    </div>
  );
}
