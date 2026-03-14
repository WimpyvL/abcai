const LEARNER_ID_KEY = 'abcai.learner-id';

export function getOrCreateLearnerId(): string {
  if (typeof window === 'undefined') {
    return 'server-render';
  }

  const existing = window.localStorage.getItem(LEARNER_ID_KEY);

  if (existing) {
    return existing;
  }

  const learnerId =
    typeof window.crypto?.randomUUID === 'function'
      ? window.crypto.randomUUID()
      : `learner-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  window.localStorage.setItem(LEARNER_ID_KEY, learnerId);
  return learnerId;
}
