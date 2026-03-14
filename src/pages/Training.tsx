import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, LoaderCircle, Mail, MapPin, Send } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { ContinueJourney } from '../components/Journey';
import { PageUtilityRail } from '../components/PageUtilityRail';
import { SERVICE_OFFERS } from '../constants';
import { submitEnquiry } from '../lib/api';
import { scrollToSection } from '../lib/scroll';

export const Training = () => {
  const [searchParams] = useSearchParams();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [service, setService] = React.useState(SERVICE_OFFERS[0].title);
  const [message, setMessage] = React.useState('');
  const [submitState, setSubmitState] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = React.useState('');

  React.useEffect(() => {
    const requestedService = searchParams.get('service');
    const requestedContext = searchParams.get('context');

    if (requestedService && SERVICE_OFFERS.some((offer) => offer.title === requestedService)) {
      setService(requestedService);
    }

    if (requestedContext) {
      setMessage(requestedContext);
    }
  }, [searchParams]);

  const chooseService = (title: string) => {
    setService(title);
    setSubmitState('idle');
    setFeedbackMessage('');
    scrollToSection('enquiry-form');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState('submitting');
    setFeedbackMessage('');

    try {
      await submitEnquiry({
        name,
        email,
        company,
        service,
        message,
        sourcePath: `${window.location.pathname}${window.location.search}${window.location.hash}`,
      });

      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
      setSubmitState('success');
      setFeedbackMessage("Enquiry received. We'll reply with a practical next step.");
    } catch (error) {
      setSubmitState('error');
      setFeedbackMessage(error instanceof Error ? error.message : 'Something went wrong while sending your enquiry.');
    }
  };

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <Helmet>
        <title>Training and consulting | ABCAI</title>
        <meta
          name="description"
          content="Book practical AI workshops, readiness reviews, and implementation support with ABCAI."
        />
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <PageUtilityRail
          journeyPage="training"
          quickNav={{
            title: 'Jump to the part that gets you moving',
            items: [
              { id: 'service-offers', label: 'Service offers', description: 'See the workshop, review, and implementation options.' },
              { id: 'engagement-process', label: 'How it works', description: 'Jump to what happens after you get in touch.' },
              { id: 'enquiry-form', label: 'Start the conversation', description: 'Go straight to the enquiry form and send the brief.' },
            ],
          }}
        />

        <header className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Training and consulting
            </p>
            <h1 className="mt-2 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
              Help people use AI properly, then build what matters.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              ABCAI supports teams and businesses with readiness reviews, workshops, workflow design, and implementation
              guidance. The goal is practical capability, not a motivational keynote about the future.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">Good engagements have a clear outcome</h2>
            <div className="mt-6 space-y-4 text-sm leading-6 text-[color:var(--ink)]/82">
              {[
                'Upskill a team that is curious but uneven.',
                'Audit where AI belongs in the business and where it does not.',
                'Scope a pilot workflow or implementation path without wasting months.',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[color:var(--surface-strong)] p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </header>

        <section id="service-offers" className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {SERVICE_OFFERS.map((offer) => (
            <article key={offer.title} className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                {offer.audience}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{offer.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{offer.summary}</p>
              <div className="mt-5 space-y-2">
                {offer.deliverables.map((deliverable) => (
                  <div key={deliverable} className="rounded-2xl bg-[color:var(--surface-strong)] px-4 py-3 text-sm text-[color:var(--ink)]/82">
                    {deliverable}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => chooseService(offer.title)}
                className="mt-6 inline-flex items-center text-sm font-semibold text-[color:var(--accent-strong)]"
              >
                Ask about this service
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </article>
          ))}
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div id="engagement-process" className="rounded-[2rem] bg-[color:var(--ink)] p-6 text-[color:var(--paper)] sm:p-8">
            <h2 className="text-3xl font-semibold tracking-[-0.05em]">What happens after you get in touch</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[color:rgba(248,244,238,0.78)]">
              {[
                'We clarify the actual problem, audience, and desired outcome.',
                'We recommend the smallest credible next step: workshop, review, pilot, or implementation support.',
                'You leave with a practical direction instead of another vague AI transformation story.',
              ].map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.48)]">
                    Step 0{index + 1}
                  </div>
                  <p className="mt-2">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/5 p-5 text-sm text-[color:rgba(248,244,238,0.78)]">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[color:var(--accent)]" />
                <a href="mailto:hello@abcai.co.za" className="font-semibold text-white">
                  hello@abcai.co.za
                </a>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[color:var(--accent)]" />
                <span>South Africa based, remote-friendly.</span>
              </div>
            </div>
          </div>

          <div id="enquiry-form" className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                  Enquiry form
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">Start the conversation</h2>
              </div>
              <Send className="h-6 w-6 text-[color:var(--accent)]" />
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="font-medium text-[color:var(--ink)]">Name</span>
                  <input
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 outline-none focus:border-[color:var(--accent)]"
                  />
                </label>
                <label className="block text-sm">
                  <span className="font-medium text-[color:var(--ink)]">Email</span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 outline-none focus:border-[color:var(--accent)]"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="font-medium text-[color:var(--ink)]">Company or team</span>
                  <input
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 outline-none focus:border-[color:var(--accent)]"
                  />
                </label>
                <label className="block text-sm">
                  <span className="font-medium text-[color:var(--ink)]">What do you need?</span>
                  <select
                    value={service}
                    onChange={(event) => setService(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 outline-none focus:border-[color:var(--accent)]"
                  >
                    {SERVICE_OFFERS.map((offer) => (
                      <option key={offer.title} value={offer.title}>
                        {offer.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block text-sm">
                <span className="font-medium text-[color:var(--ink)]">Context</span>
                <textarea
                  rows={6}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell us what you want to improve, who needs help, and what success would look like."
                  className="mt-2 w-full rounded-[1.6rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 outline-none focus:border-[color:var(--accent)]"
                />
              </label>

              <button
                type="submit"
                disabled={submitState === 'submitting'}
                className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--accent-strong)]"
              >
                {submitState === 'submitting' ? (
                  <>
                    Sending enquiry
                    <LoaderCircle className="ml-2 h-4 w-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send enquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>

              {submitState !== 'idle' && (
                <p
                  className={`text-sm leading-6 ${
                    submitState === 'success'
                      ? 'text-[color:var(--accent-strong)]'
                      : submitState === 'error'
                        ? 'text-[#a5442f]'
                        : 'text-[color:var(--muted)]'
                  }`}
                >
                  {feedbackMessage}
                </p>
              )}
            </form>
          </div>
        </section>

        <ContinueJourney page="training" />
      </div>
    </div>
  );
};
