import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import VideoList from '../components/VideoList.jsx';
import { martialArtVideos } from '../data/videos.js';

const questions = [
  { name: 'goal', label: 'Main goal', options: [
    { label: 'Better hands and confidence', scores: { Boxing: 3, Karate: 1 } },
    { label: 'Ground control and submissions', scores: { 'Brazilian Jiu-Jitsu': 3, Judo: 1 } },
    { label: 'Takedowns and pressure', scores: { Wrestling: 3, MMA: 1 } },
    { label: 'Complete fighting skillset', scores: { MMA: 3, 'Muay Thai': 1, Wrestling: 1 } }
  ]},
  { name: 'bodyType', label: 'Body type / natural advantage', options: [
    { label: 'Fast and mobile', scores: { Boxing: 2, Karate: 2 } },
    { label: 'Strong and explosive', scores: { Wrestling: 2, Judo: 2 } },
    { label: 'Flexible and patient', scores: { 'Brazilian Jiu-Jitsu': 2 } },
    { label: 'Balanced all-rounder', scores: { MMA: 2, 'Muay Thai': 1 } }
  ]},
  { name: 'style', label: 'Preferred style', options: [
    { label: 'Clean striking and footwork', scores: { Boxing: 3, Karate: 1 } },
    { label: 'Clinch, knees, elbows, and kicks', scores: { 'Muay Thai': 3, MMA: 1 } },
    { label: 'Throws and trips', scores: { Judo: 3, Wrestling: 1 } },
    { label: 'Ground chess', scores: { 'Brazilian Jiu-Jitsu': 3 } }
  ]},
  { name: 'experience', label: 'Experience level', options: [
    { label: 'Complete beginner', scores: { Boxing: 1, Karate: 1, 'Brazilian Jiu-Jitsu': 1 } },
    { label: 'Some gym or sport background', scores: { 'Muay Thai': 1, Wrestling: 1, Judo: 1 } },
    { label: 'Already trained before', scores: { MMA: 2, Wrestling: 1, 'Brazilian Jiu-Jitsu': 1 } }
  ]},
  { name: 'fitness', label: 'Fitness level', options: [
    { label: 'Building cardio slowly', scores: { Boxing: 1, Karate: 1, 'Brazilian Jiu-Jitsu': 1 } },
    { label: 'Good endurance', scores: { Boxing: 2, Wrestling: 2, 'Muay Thai': 1 } },
    { label: 'Strong and intense', scores: { Wrestling: 2, Judo: 2, MMA: 1 } }
  ]},
  { name: 'range', label: 'Striking, grappling, or mixed?', options: [
    { label: 'Striking', scores: { Boxing: 2, 'Muay Thai': 2, Karate: 1 } },
    { label: 'Grappling', scores: { Wrestling: 2, 'Brazilian Jiu-Jitsu': 2, Judo: 1 } },
    { label: 'Mixed fighting', scores: { MMA: 4 } }
  ]}
];

const explanations = {
  Boxing: 'Boxing fits you because your answers point toward hands, distance, footwork, defense, and simple but deep fundamentals.',
  'Brazilian Jiu-Jitsu': 'BJJ fits you because your answers favor patience, ground control, leverage, submissions, and technical problem solving.',
  Wrestling: 'Wrestling fits you because you seem built for pressure, takedowns, balance, pace, and controlling where the fight happens.',
  'Muay Thai': 'Muay Thai fits you because your answers favor hard striking, clinch work, kicks, knees, elbows, and direct pressure.',
  Judo: 'Judo fits you because you seem interested in throws, trips, balance breaking, grips, and explosive technique.',
  Karate: 'Karate fits you because your answers suggest distance, timing, discipline, movement, and clean entry attacks.',
  MMA: 'MMA fits you because you want a complete game that blends striking, wrestling, grappling, and strategy.'
};

export default function MartialArtQuiz() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (questionName, optionIndex) => {
    setAnswers((current) => ({ ...current, [questionName]: Number(optionIndex) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const scores = { Boxing: 0, 'Brazilian Jiu-Jitsu': 0, Wrestling: 0, 'Muay Thai': 0, Judo: 0, Karate: 0, MMA: 0 };

    questions.forEach((question) => {
      const selected = question.options[answers[question.name]];
      if (selected) {
        Object.entries(selected.scores).forEach(([art, points]) => {
          scores[art] += points;
        });
      }
    });

    const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    setResult(winner);
  };

  return (
    <div className="page narrow">
      <PageHeader eyebrow="Style Finder" title="Martial Art Quiz" text="Answer a few questions and get a training recommendation based on your goals and preferences." />
      <form className="quiz-form card" onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <fieldset key={question.name}>
            <legend>{index + 1}. {question.label}</legend>
            <div className="option-grid">
              {question.options.map((option, optionIndex) => (
                <label key={option.label} className="option-card">
                  <input
                    type="radio"
                    name={question.name}
                    value={optionIndex}
                    checked={answers[question.name] === optionIndex}
                    onChange={() => handleChange(question.name, optionIndex)}
                    required
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
        <button className="primary-btn" type="submit">Find My Martial Art</button>
      </form>

      {result && (
        <section className="result-card card glow">
          <span className="eyebrow">Recommended Art</span>
          <h2>{result}</h2>
          <p>{explanations[result]}</p>
          <VideoList videos={martialArtVideos[result]} />
        </section>
      )}
    </div>
  );
}
