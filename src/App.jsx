import React from "react";
import { useMemo, useState } from "react";
import { scenarios } from "./scenarios";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState([]);

  const current = scenarios[index];

  const score = useMemo(() => {
    return answers.filter((item) => item.correct).length;
  }, [answers]);

  function startGame() {
    setScreen("case");
    setIndex(0);
    setSelected(null);
    setRevealed(false);
    setAnswers([]);
  }

  function submitAnswer() {
    if (!selected) return;

    const isCorrect = selected === current.correctId;

    setAnswers((prev) => [
      ...prev,
      {
        scenarioId: current.id,
        selectedId: selected,
        correct: isCorrect
      }
    ]);

    setRevealed(true);
  }

  function nextCase() {
    if (index < scenarios.length - 1) {
      setIndex((prev) => prev + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      setScreen("summary");
    }
  }

  function restartGame() {
    setScreen("home");
    setIndex(0);
    setSelected(null);
    setRevealed(false);
    setAnswers([]);
  }

  function getOptionClass(optionId) {
    let className = "option-card";

    if (!revealed && selected === optionId) {
      className += " option-selected";
    }

    if (revealed && optionId === current.correctId) {
      className += " option-correct";
    }

    if (
      revealed &&
      selected === optionId &&
      optionId !== current.correctId
    ) {
      className += " option-incorrect";
    }

    return className;
  }

  return (
    <div className="app-shell">
      <div className="page-wrap">
        <header className="hero-card">
          <div>
            <div className="eyebrow">SPX203 Programming Justification</div>
            <h1>Programming Change Detective</h1>
            <p className="hero-text">
              Match a programming change to the most appropriate scientific
              evidence.
            </p>
          </div>

          <div className="score-box">
            <div className="score-label">Score</div>
            <div className="score-value">
              {score} / {scenarios.length}
            </div>
          </div>
        </header>

        {screen === "home" && (
          <div className="two-col-layout">
            <section className="panel">
              <h2>How the game works</h2>
              <p>
                Each case presents a client, an original program, a revised
                program, and a context explaining why the programming was
                changed.
              </p>
              <p>
                Your task is to choose the article that best supports the
                revision. Some distractors will still sound relevant, but they
                will not directly support the specific decision.
              </p>
              <p>
                After each answer, you will get feedback explaining why the best
                article fits and what the coaching takeaway is.
              </p>

              <button className="primary-button" onClick={startGame}>
                Start game
              </button>
            </section>

            <section className="panel">
              <h2>Included scenarios</h2>

              <div className="scenario-list">
                {scenarios.map((scenario, scenarioIndex) => (
                  <div className="scenario-preview" key={scenario.id}>
                    <div className="scenario-number">
                      Case {scenarioIndex + 1}
                    </div>
                    <div className="scenario-title">{scenario.title}</div>
                    <div className="scenario-subtext">{scenario.client}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {screen === "case" && (
          <div className="two-col-layout">
            <section className="panel">
              <div className="case-header-row">
                <div className="eyebrow">
                  Case {index + 1} of {scenarios.length}
                </div>
                <div className="goal-tag">Goal: {current.goal}</div>
              </div>

              <h2>{current.title}</h2>

              <div className="detail-block">
                <div className="detail-label">Client</div>
                <div>{current.client}</div>
              </div>

              <div className="detail-block">
                <div className="detail-label">Context</div>
                <div>{current.context}</div>
              </div>

              <div className="program-box">
                <div className="detail-label">Original program</div>
                <div>{current.originalProgram}</div>
              </div>

              <div className="program-box revised-program">
                <div className="detail-label">Revised program</div>
                <div>{current.revisedProgram}</div>
              </div>
            </section>

            <section className="panel">
              <h2>Choose the best supporting article</h2>
              <p className="question-text">{current.question}</p>

              <div className="options-stack">
                {current.options.map((option) => (
                  <button
                    key={option.id}
                    className={getOptionClass(option.id)}
                    onClick={() => {
                      if (!revealed) setSelected(option.id);
                    }}
                  >
                    <div className="option-label">{option.shortLabel}</div>
                    <div className="option-citation">{option.citation}</div>
                    <div className="option-summary">{option.summary}</div>
                  </button>
                ))}
              </div>

              {!revealed ? (
                <div className="button-row">
                  <button
                    className="primary-button"
                    onClick={submitAnswer}
                    disabled={!selected}
                  >
                    Check answer
                  </button>
                </div>
              ) : (
                <div className="feedback-box">
                  <div
                    className={
                      selected === current.correctId
                        ? "feedback-title correct-text"
                        : "feedback-title incorrect-text"
                    }
                  >
                    {selected === current.correctId ? "Correct" : "Not quite"}
                  </div>

                  <p>{current.explanation}</p>

                  <div className="takeaway-box">
                    <div className="detail-label">Coaching takeaway</div>
                    <div>{current.takeaway}</div>
                  </div>

                  <div className="button-row">
                    <button className="primary-button" onClick={nextCase}>
                      {index < scenarios.length - 1
                        ? "Next case"
                        : "See results"}
                    </button>
                  </div>
                </div>
              )}
            </section>
          </div>
        )}

        {screen === "summary" && (
          <div className="two-col-layout">
            <section className="panel">
              <h2>Game complete</h2>
              <p>
                You matched {score} out of {scenarios.length} cases with the
                best supporting evidence.
              </p>

              <div className="takeaway-box">
                <div className="detail-label">What this game is testing</div>
                <ul>
                  <li>
                    Whether the evidence matches the specific programming
                    decision
                  </li>
                  <li>
                    Whether you can distinguish evidence about volume, load,
                    failure, and exercise selection
                  </li>
                  <li>
                    Whether you can link a revised program back to the intended
                    adaptation
                  </li>
                </ul>
              </div>

              <button className="primary-button" onClick={restartGame}>
                Play again
              </button>
            </section>

            <section className="panel">
              <h2>Review</h2>

              <div className="scenario-list">
                {scenarios.map((scenario) => {
                  const userAnswer = answers.find(
                    (item) => item.scenarioId === scenario.id
                  );
                  const chosen = scenario.options.find(
                    (option) => option.id === userAnswer?.selectedId
                  );
                  const correct = scenario.options.find(
                    (option) => option.id === scenario.correctId
                  );

                  return (
                    <div className="review-card" key={scenario.id}>
                      <div className="scenario-title">{scenario.title}</div>

                      <div
                        className={
                          userAnswer?.correct
                            ? "correct-text review-status"
                            : "incorrect-text review-status"
                        }
                      >
                        {userAnswer?.correct ? "Correct" : "Incorrect"}
                      </div>

                      <div className="review-line">
                        <strong>Your choice:</strong>{" "}
                        {chosen ? chosen.citation : "No answer recorded"}
                      </div>

                      {!userAnswer?.correct && (
                        <div className="review-line">
                          <strong>Best match:</strong> {correct.citation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
