import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContinueJourney, JourneyCompass } from '../components/Journey';
import { READINESS_BANDS, READINESS_QUESTIONS } from '../constants';

const totalPossibleScore = READINESS_QUESTIONS.length * 3;

export const ReadinessTest = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<number[]>([]);

  const isComplete = answers.length === READINESS_QUESTIONS.length;
  const rawScore = answers.reduce((sum, value) => sum + value, 0);
  const percentage = Math.round((rawScore / totalPossibleScore) * 100);
  const band =
    READINESS_BANDS.find((item) => percentage >= item.min && percentage <= item.max) ?? READINESS_BANDS[0];

  const handleSelect = (score: number) => {
    const nextAnswers = [...answers];
    nextAnswers[currentStep] = score;
    setAnswers(nextAnswers);

    if (currentStep < READINESS_QUESTIONS.length - 1) {
      setCurrentStep((value) => value + 1);
    }
  };

  const reset = () => {
    setAnswers([]);
    setCurrentStep(0);
  };

  const currentQuestion = READINESS_QUESTIONS[currentStep];
  const progress = ((Math.min(answers.length, READINESS_QUESTIONS.length)) / READINESS_QUESTIONS.length) * 100;

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <Helmet>
        <title>AI readiness test | ABCAI</title>
        <meta
          name="description"
          content="Check how ready your business or team is for practical AI adoption with ABCAI's AI readiness test."
        />
      </Helmet>

      <div className="mx-auto max-w-5xl">
        <JourneyCompass page="readiness" />

        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
            Readiness test
          </p>
          <h1 className="mt-2 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">How ready are you for useful AI?</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
            This diagnostic is simple on purpose. It checks clarity, workflow maturity, data quality, team readiness,
            and risk awareness so you know whether to start with training, pilots, or more serious implementation.
          </p>
        </header>

        <div className="mt-12 rounded-[2.5rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_24px_80px_rgba(23,33,39,0.08)] sm:p-8 lg:p-10">
          {!isComplete ? (
            <motion.div key={currentQuestion.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                    Question {currentStep + 1} of {READINESS_QUESTIONS.length}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">{currentQuestion.question}</h2>
                </div>
                <div className="w-full max-w-xs">
                  <div className="h-2 rounded-full bg-[color:var(--surface-strong)]">
                    <div
                      className="h-full rounded-full bg-[color:var(--accent)] transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="mt-2 text-right text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    {Math.round(progress)}% complete
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => handleSelect(option.score)}
                    className="w-full rounded-[1.6rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5 text-left hover:border-[color:var(--accent)] hover:bg-[color:var(--accent-soft)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-base font-semibold text-[color:var(--ink)]">{option.label}</p>
                        <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{option.note}</p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[color:var(--accent-strong)]" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <div className="rounded-[2rem] bg-[color:var(--ink)] p-6 text-[color:var(--paper)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.5)]">
                  Your result
                </p>
                <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <h2 className="text-4xl font-semibold tracking-[-0.05em]">{band.name}</h2>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:rgba(248,244,238,0.82)]">{band.summary}</p>
                  </div>
                  <div className="rounded-[1.8rem] border border-white/10 bg-white/5 px-6 py-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.48)]">
                      Readiness score
                    </div>
                    <div className="mt-2 text-4xl font-semibold tracking-[-0.05em]">{percentage}%</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">Top priorities</h3>
                  <div className="mt-6 space-y-3">
                    {band.priorities.map((priority) => (
                      <div key={priority} className="flex items-start gap-3 rounded-2xl bg-white p-4">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                        <span className="text-sm leading-6 text-[color:var(--ink)]/82">{priority}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">Recommended next move</h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{band.recommendation}</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <Link
                      to="/training"
                      className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-5 py-3.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--accent-strong)]"
                    >
                      Book support
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/use"
                      className="inline-flex items-center justify-center rounded-full border border-[color:var(--line-strong)] bg-white px-5 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface-strong)]"
                    >
                      Explore use cases
                    </Link>
                  </div>

                  <button
                    type="button"
                    onClick={reset}
                    className="mt-5 inline-flex items-center text-sm font-semibold text-[color:var(--accent-strong)]"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Retake the test
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <ContinueJourney page="readiness" />
      </div>
    </div>
  );
};
