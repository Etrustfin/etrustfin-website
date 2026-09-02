"use client";

import { useState } from "react";
import { SCHEDULE_URL } from "@/lib/constants";

type Question = {
  q: string;
  opts: [string, number][];
};

const QUESTIONS: Question[] = [
  {
    q: "Do you have a written financial plan that you have reviewed in the last 12 months?",
    opts: [
      ["Yes, and I follow it", 3],
      ["I have one, but it is outdated", 2],
      ["I have pieces, but nothing written", 1],
      ["No plan at all", 0],
    ],
  },
  {
    q: "If your household income stopped tomorrow, how long could you cover your expenses?",
    opts: [
      ["More than 6 months", 3],
      ["3 to 6 months", 2],
      ["1 to 3 months", 1],
      ["Less than 1 month", 0],
    ],
  },
  {
    q: "Do you have life insurance, and do you know whether the amount is right for your family?",
    opts: [
      ["Yes, and the amount was calculated for my situation", 3],
      ["I have coverage, but I am not sure it is enough", 2],
      ["Only what my employer provides", 1],
      ["No life insurance", 0],
    ],
  },
  {
    q: "Do you know what you could be doing to lower your taxes, beyond filing each April?",
    opts: [
      ["Yes, I have an active tax strategy", 3],
      ["I do some things, but not a full strategy", 2],
      ["I just file and hope for the best", 1],
      ["I have never thought about it", 0],
    ],
  },
  {
    q: "Do you have a will or trust in place?",
    opts: [
      ["Yes, and it is up to date", 3],
      ["Yes, but it has not been reviewed in years", 2],
      ["I have started, but never finished", 1],
      ["No", 0],
    ],
  },
  {
    q: "Are your retirement and investment accounts coordinated under one strategy?",
    opts: [
      ["Yes, everything works together", 3],
      ["Mostly, but a few accounts are scattered", 2],
      ["They are spread across old jobs and platforms", 1],
      ["I am not sure what I have", 0],
    ],
  },
  {
    q: "If something happened to you tomorrow, would your family know where everything is?",
    opts: [
      ["Yes, it is organized and they know", 3],
      ["They would figure most of it out", 2],
      ["They would struggle", 1],
      ["They would be lost", 0],
    ],
  },
  {
    q: "How confident do you feel about your financial future?",
    opts: [
      ["Very confident", 3],
      ["Somewhat confident", 2],
      ["Uncertain", 1],
      ["Worried", 0],
    ],
  },
];

const RESULTS = [
  {
    min: 0,
    max: 9,
    title: "Your foundation needs attention, and that is okay.",
    body: (
      <>
        <p>
          Right now, your family is more exposed than they should be. The good news: this is the
          easiest position to improve from, and the first steps matter more than any of the later
          ones. Protection first, then a plan, then growth.
        </p>
        <p>A complimentary call will identify the two or three moves that close your biggest gaps first.</p>
      </>
    ),
  },
  {
    min: 10,
    max: 17,
    title: "You are building momentum. Now connect the pieces.",
    body: (
      <>
        <p>
          You have done real work, but your financial life is still a set of separate parts: some
          protection here, some savings there. The biggest gains for you come from coordination,
          especially around taxes, coverage amounts, and estate documents.
        </p>
        <p>
          A comprehensive plan would likely uncover meaningful opportunities you cannot see from
          inside the day to day.
        </p>
      </>
    ),
  },
  {
    min: 18,
    max: 24,
    title: "You are ahead of most. The next level is optimization.",
    body: (
      <>
        <p>
          Your foundation is strong. At your stage, the question is no longer whether you are
          protected, but whether your wealth is working as efficiently as it could: tax strategy,
          legacy structure, and preparing the next generation.
        </p>
        <p>This is exactly where an ongoing planning partnership earns its keep.</p>
      </>
    ),
  },
];

export default function FinancialQuiz() {
  const [qi, setQi] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const answer = (points: number) => {
    setScore((s) => s + points);
    if (qi + 1 < QUESTIONS.length) {
      setQi((i) => i + 1);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setQi(0);
    setScore(0);
    setDone(false);
  };

  const result = RESULTS.find((r) => score >= r.min && score <= r.max) ?? RESULTS[0];
  const progress = done ? 100 : (qi / QUESTIONS.length) * 100;

  return (
    <div className="quiz-wrap">
      <div className="quiz-progress">
        <span style={{ width: `${progress}%` }} />
      </div>
      {!done && (
        <div id="qcontainer">
          <div className="quiz-q">
            <p className="quiz-count">
              Question {qi + 1} of {QUESTIONS.length}
            </p>
            <h3>{QUESTIONS[qi].q}</h3>
            {QUESTIONS[qi].opts.map(([label, points]) => (
              <button key={label} className="quiz-opt" onClick={() => answer(points)}>
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className={`quiz-result${done ? " active" : ""}`} id="qresult">
        {done && (
          <>
            <div className="score-badge">{score} / 24</div>
            <h3>{result.title}</h3>
            <div>{result.body}</div>
            <a className="btn btn-dark" href={SCHEDULE_URL} target="_blank" rel="noopener">
              Schedule Your Complimentary Call
            </a>
            <br />
            <button className="quiz-restart" onClick={restart}>
              Retake the quiz
            </button>
          </>
        )}
      </div>
    </div>
  );
}
