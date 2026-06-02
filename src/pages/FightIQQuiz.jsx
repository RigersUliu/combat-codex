import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import VideoList from '../components/VideoList.jsx';
import { fightIqVideos } from '../data/videos.js';

const fightIqQuestions = [
  {
    question: 'Your opponent keeps stepping in with a jab and exiting at an angle. What is the smartest adjustment?',
    options: [
      { text: 'Rush forward with hooks', points: 0 },
      { text: 'Back straight up every time', points: 1 },
      { text: 'Time the jab with a slip-counter or intercepting low kick', points: 3 },
      { text: 'Drop your hands to bait them', points: 0 }
    ]
  },
  {
    question: 'You are winning exchanges, but your opponent starts feinting takedowns to freeze your striking. What should you do?',
    options: [
      { text: 'Ignore the feints completely', points: 0 },
      { text: 'Overreact and fully sprawl every time', points: 1 },
      { text: 'Lower your stance slightly, use shorter combinations, and punish entries', points: 3 },
      { text: 'Throw only head kicks', points: 0 }
    ]
  },
  {
    question: 'Your opponent is pressuring you toward the cage. What is the best defensive movement?',
    options: [
      { text: 'Move straight backward until you hit the cage', points: 0 },
      { text: 'Circle out before your back reaches the cage', points: 3 },
      { text: 'Cover up and wait', points: 1 },
      { text: 'Turn your back and sprint away', points: 0 }
    ]
  },
  {
    question: 'You notice your opponent dips their head to the same side every time they throw an overhand right. What is the best strategic response?',
    options: [
      { text: 'Keep blocking and do nothing', points: 1 },
      { text: 'Set a trap with a pull counter, knee, uppercut, or angle change', points: 3 },
      { text: 'Throw random spinning attacks', points: 0 },
      { text: 'Only attack the body', points: 1 }
    ]
  },
  {
    question: 'You are tired in round three, but your opponent is also slowing down. What is the highest IQ choice?',
    options: [
      { text: 'Throw wild power shots to end it immediately', points: 0 },
      { text: 'Control distance, breathe, clinch when needed, and pick efficient shots', points: 3 },
      { text: 'Stop moving to save energy', points: 1 },
      { text: 'Only defend and give away the round', points: 1 }
    ]
  },
  {
    question: 'A strong wrestler keeps shooting after you throw long combinations. What should you change?',
    options: [
      { text: 'Throw even longer combinations', points: 0 },
      { text: 'Use shorter combos, keep hips back, and exit at angles', points: 3 },
      { text: 'Jump for guillotines every time', points: 1 },
      { text: 'Stand tall to punch harder', points: 0 }
    ]
  },
  {
    question: 'Your opponent shells up with a high guard whenever you punch. What is a smart way to open them up?',
    options: [
      { text: 'Keep punching only the gloves', points: 0 },
      { text: 'Mix body shots, low kicks, feints, and angle changes', points: 3 },
      { text: 'Stop attacking completely', points: 1 },
      { text: 'Throw only head kicks', points: 1 }
    ]
  },
  {
    question: 'You land a clean right hand and your opponent is hurt. What is the smartest follow-up?',
    options: [
      { text: 'Sprint in recklessly with your chin up', points: 0 },
      { text: 'Stay balanced, cut off exits, and attack without smothering yourself', points: 3 },
      { text: 'Celebrate immediately', points: 0 },
      { text: 'Back away and let them recover', points: 1 }
    ]
  },
  {
    question: 'Your opponent keeps checking your low kicks. What adjustment makes the most sense?',
    options: [
      { text: 'Kick harder at the same target', points: 0 },
      { text: 'Set kicks up with punches, attack the body, or switch targets', points: 3 },
      { text: 'Stop using your legs completely', points: 1 },
      { text: 'Throw naked spinning kicks', points: 0 }
    ]
  },
  {
    question: 'You are on top in half guard, but your opponent is framing hard and trying to recover guard. What is the best control idea?',
    options: [
      { text: 'Post both hands on the mat and wait', points: 0 },
      { text: 'Flatten them, control the head/underhook, and advance patiently', points: 3 },
      { text: 'Stand up immediately for no reason', points: 1 },
      { text: 'Throw huge punches and ignore position', points: 1 }
    ]
  },
  {
    question: 'Your opponent is much faster than you. What strategy gives you the best chance?',
    options: [
      { text: 'Try to match their speed directly', points: 1 },
      { text: 'Use timing, pressure, feints, body attacks, and cage/ring positioning', points: 3 },
      { text: 'Run away the whole fight', points: 0 },
      { text: 'Throw only single power shots', points: 1 }
    ]
  },
  {
    question: 'Your opponent keeps biting on your jab feint. What should you do next?',
    options: [
      { text: 'Never use the feint again', points: 0 },
      { text: 'Use the reaction to set up a cross, level change, low kick, or entry', points: 3 },
      { text: 'Feint ten times without attacking', points: 1 },
      { text: 'Drop your guard and taunt', points: 0 }
    ]
  },
  {
    question: 'You are fighting a southpaw and your lead feet keep clashing. What positioning battle matters most?',
    options: [
      { text: 'Keeping your lead foot outside theirs', points: 3 },
      { text: 'Standing completely square', points: 0 },
      { text: 'Looking only at their hands', points: 1 },
      { text: 'Backing up in a straight line', points: 0 }
    ]
  },
  {
    question: 'Your opponent is dangerous early but fades after round one. What is a smart game plan?',
    options: [
      { text: 'Trade wildly in the first minute', points: 0 },
      { text: 'Stay safe early, make them work, attack the body, and increase pressure later', points: 3 },
      { text: 'Do nothing for the whole fight', points: 0 },
      { text: 'Only shoot takedowns from far away', points: 1 }
    ]
  },
  {
    question: 'You are trapped in a tight guillotine attempt, but your body is still on the safe side. What should you prioritize?',
    options: [
      { text: 'Panic and pull backward', points: 0 },
      { text: 'Hand fight, control position, move to the safe side, and relieve pressure', points: 3 },
      { text: 'Punch randomly', points: 1 },
      { text: 'Give up mount instantly', points: 0 }
    ]
  }
];

const maxScore = fightIqQuestions.reduce(
  (total, question) => total + Math.max(...question.options.map((option) => option.points)),
  0
);

function getFightIqResult(score, max) {
  const percentage = (score / max) * 100;

  if (percentage < 35) {
    return {
      key: 'beginner',
      title: 'Beginner Fight IQ',
      description: 'You understand some basics, but you still react emotionally instead of reading patterns. Focus on defense, distance, and simple strategy.'
    };
  }

  if (percentage < 60) {
    return {
      key: 'average',
      title: 'Average Fight IQ',
      description: 'You make some smart choices, but you may still overcommit or miss tactical details. Work on feints, positioning, and energy management.'
    };
  }

  if (percentage < 80) {
    return {
      key: 'defensive',
      title: 'Smart Defensive Fighter',
      description: 'You understand danger, distance, and control. You think before attacking and know how to make safer adjustments.'
    };
  }

  return {
    key: 'high',
    title: 'High Fight IQ',
    description: 'You read patterns, manage risk, control range, and make tactical decisions like a trained fighter. Very sharp.'
  };
}

export default function FightIQQuiz() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const score = fightIqQuestions.reduce((total, question, index) => {
      const selectedIndex = answers[index];
      return total + (question.options[selectedIndex]?.points || 0);
    }, 0);
    setResult({ score, ...getFightIqResult(score, maxScore) });
  };

  return (
    <div className="page narrow">
      <PageHeader
        eyebrow="Tactical Scenarios"
        title="Combat Codex"
        text="Test tactical reads, distance, cage pressure, feints, wrestling defense, and fight management through realistic MMA scenarios."
      />
      <form className="quiz-form combat-codex-quiz card" onSubmit={handleSubmit}>
        {fightIqQuestions.map((question, index) => (
          <fieldset key={question.question}>
            <legend>{index + 1}. {question.question}</legend>
            <div className="option-grid">
              {question.options.map((option, optionIndex) => (
                <label key={option.text} className="option-card">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    checked={answers[index] === optionIndex}
                    onChange={() => setAnswers((current) => ({ ...current, [index]: optionIndex }))}
                    required
                  />
                  <span>{option.text}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
        <button className="primary-btn" type="submit">Check Results</button>
      </form>

      {result && (
        <section className="result-card card glow">
          <span className="eyebrow">Score: {result.score} / {maxScore}</span>
          <h2>{result.title}</h2>
          <p>{result.description}</p>
          <VideoList videos={fightIqVideos[result.key]} />
        </section>
      )}
    </div>
  );
}
