import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, ChevronDown, FileText, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContinueJourney } from '../components/Journey';
import { useJourneyProfile } from '../components/JourneyProfile';
import { PageUtilityRail } from '../components/PageUtilityRail';
import { getCourseBySlug, getCourseEnquiryPath, getCourseLessonCount } from '../courseData';
import { FOUNDATIONS_FIRST_USE_CHECKLIST, FOUNDATIONS_GRADUATION, FOUNDATIONS_INTRO } from '../content/foundationsCompanion';
import { fetchCourseProgress, updateCourseLessonProgress } from '../lib/api';
import { getOrCreateLearnerId } from '../lib/learner';
import { scrollToSection } from '../lib/scroll';
import type { Course, CourseProgress } from '../types';

const courseSlug = 'ai-foundations-for-real-work';

export const FoundationsCourse = () => {
  const fallbackCourse = getCourseBySlug(courseSlug);
  const { setProfile } = useJourneyProfile();
  const [course] = React.useState<Course | undefined>(fallbackCourse);
  const [learnerId] = React.useState(() => getOrCreateLearnerId());
  const [progress, setProgress] = React.useState<CourseProgress | null>(null);
  const [savingLessonSlug, setSavingLessonSlug] = React.useState<string | null>(null);

  React.useEffect(() => {
    setProfile('beginner');
  }, [setProfile]);

  React.useEffect(() => {
    let isMounted = true;

    if (!course) {
      return () => {
        isMounted = false;
      };
    }

    fetchCourseProgress<CourseProgress>(course.slug, learnerId)
      .then((nextProgress) => {
        if (isMounted) {
          setProgress(nextProgress);
        }
      })
      .catch(() => {
        if (isMounted) {
          setProgress({
            learnerId,
            courseSlug: course.slug,
            completedLessonSlugs: [],
            completionCount: 0,
            totalLessons: getCourseLessonCount(course),
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [course, learnerId]);

  if (!course) {
    return null;
  }

  const completedLessonSlugs = new Set(progress?.completedLessonSlugs ?? []);

  const toggleLessonCompletion = async (lessonSlug: string, completed: boolean) => {
    setSavingLessonSlug(lessonSlug);

    try {
      const nextProgress = await updateCourseLessonProgress<CourseProgress>(course.slug, {
        learnerId,
        lessonSlug,
        completed,
      });

      setProgress(nextProgress);
    } catch {
      // Keep the last known progress if the write fails.
    } finally {
      setSavingLessonSlug(null);
    }
  };

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <Helmet>
        <title>{course.title} | ABCAI Courses</title>
        <meta name="description" content={course.summary} />
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <PageUtilityRail
          journeyPage="courses"
          quickNav={{
            title: 'Jump through the course',
            items: [
              { id: 'week-1-breaking-the-magic-spell', label: 'Begin Week 1', description: 'Start where the mindset shift happens.' },
              { id: 'course-assets', label: 'Companion assets', description: 'Open the workbook, cheat sheet, and checklist.' },
              { id: 'graduation-rule', label: 'Graduation', description: 'Finish with the final filter that keeps you sane.' },
            ],
          }}
        />

        <div className="mb-6">
          <Link
            to="/courses"
            onClick={() => setProfile('beginner')}
            className="inline-flex items-center text-sm font-semibold text-[color:var(--accent-strong)]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to courses
          </Link>
        </div>

        <header className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Flagship course
            </p>
            <h1 className="mt-2 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">{course.title}</h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-[color:var(--muted)]">{FOUNDATIONS_INTRO}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('week-1-breaking-the-magic-spell')}
                className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--accent-strong)]"
              >
                Begin Week 1
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <Link
                to="/courses/ai-foundations-for-real-work/workbook"
                className="inline-flex items-center rounded-full border border-[color:var(--line-strong)] bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface-strong)]"
              >
                Open workbook
              </Link>
              <Link
                to="/courses/ai-foundations-for-real-work/cheat-sheet"
                className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-white"
              >
                Cheat sheet
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">By the end of Week 4</h2>
            <div className="mt-6 space-y-3 text-sm leading-6 text-[color:var(--ink)]/82">
              {[
                'You stop treating AI like a magic wand or a search engine.',
                'You learn how to direct it with structure and feedback.',
                'You know where the safe wins are and where the hard stop lines live.',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[color:var(--surface-strong)] p-4">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center rounded-full border border-[color:var(--line)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--ink)]/82">
              {progress?.completionCount ?? 0} of {progress?.totalLessons ?? getCourseLessonCount(course)} lessons completed
            </div>
          </div>
        </header>

        <section id="course-assets" className="mt-12 grid gap-4 lg:grid-cols-3">
          <Link
            to="/courses/ai-foundations-for-real-work/workbook"
            className="rounded-[1.8rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_16px_42px_rgba(23,33,39,0.05)]"
          >
            <BookOpen className="h-6 w-6 text-[color:var(--accent)]" />
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">Workbook companion</h2>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
              Add friction so you evaluate AI output instead of passively accepting it.
            </p>
          </Link>
          <Link
            to="/courses/ai-foundations-for-real-work/cheat-sheet"
            className="rounded-[1.8rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_16px_42px_rgba(23,33,39,0.05)]"
          >
            <FileText className="h-6 w-6 text-[color:var(--accent)]" />
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">Safe wins cheat sheet</h2>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
              Keep the C.R.E.D. blueprint, safety zones, and feedback rules visible while you work.
            </p>
          </Link>
          <Link
            to="/courses/ai-foundations-for-real-work/first-use-checklist"
            className="rounded-[1.8rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_16px_42px_rgba(23,33,39,0.05)]"
          >
            <ShieldCheck className="h-6 w-6 text-[color:var(--accent)]" />
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">First-use checklist</h2>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
              A final high-impact card for staying useful without becoming reckless.
            </p>
          </Link>
        </section>

        <section className="mt-16 space-y-6">
          {course.modules.map((module, moduleIndex) => (
            <article
              id={module.slug}
              key={module.slug}
              className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_18px_44px_rgba(23,33,39,0.05)] sm:p-8"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                    Module 0{moduleIndex + 1}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">{module.title}</h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-[color:var(--muted)]">{module.summary}</p>
              </div>

              <div className="mt-6 space-y-4">
                {module.lessons.map((lesson, lessonIndex) => (
                  <details
                    key={lesson.slug}
                    open={moduleIndex === 0 && lessonIndex === 0}
                    className="group rounded-[1.6rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                          <span>{lesson.format}</span>
                          <span className="text-[color:var(--muted)]">•</span>
                          <span>{lesson.duration}</span>
                        </div>
                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{lesson.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{lesson.summary}</p>
                      </div>
                      <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-[color:var(--accent)] transition-transform group-open:rotate-180" />
                    </summary>

                    <div className="mt-5 space-y-4">
                      <div className="space-y-3 text-sm leading-7 text-[color:var(--ink)]/82">
                        {lesson.content.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                          Practice
                        </p>
                        <div className="mt-3 space-y-2">
                          {lesson.practice.map((item) => (
                            <div key={item} className="flex items-start gap-3 text-sm leading-6 text-[color:var(--muted)]">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleLessonCompletion(lesson.slug, !completedLessonSlugs.has(lesson.slug))}
                        disabled={savingLessonSlug === lesson.slug}
                        className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${
                          completedLessonSlugs.has(lesson.slug)
                            ? 'bg-[color:var(--ink)] text-[color:var(--paper)]'
                            : 'border border-[color:var(--line)] bg-white text-[color:var(--ink)]'
                        }`}
                      >
                        {savingLessonSlug === lesson.slug
                          ? 'Saving...'
                          : completedLessonSlugs.has(lesson.slug)
                            ? 'Completed'
                            : 'Mark complete'}
                      </button>
                    </div>
                  </details>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section id="graduation-rule" className="mt-16 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Graduation
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">The $100 Rule</h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{FOUNDATIONS_GRADUATION}</p>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(23,33,39,0.96),rgba(23,65,63,0.96))] p-6 text-[color:var(--paper)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.5)]">
              First-use checklist
            </p>
            <div className="mt-4 space-y-3">
              {FOUNDATIONS_FIRST_USE_CHECKLIST.map((section) => (
                <div key={section.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">{section.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[color:rgba(248,244,238,0.76)]">{section.items[0]}</p>
                </div>
              ))}
            </div>
            <Link
              to="/courses/ai-foundations-for-real-work/first-use-checklist"
              className="mt-6 inline-flex items-center text-sm font-semibold text-[color:var(--accent)]"
            >
              Open the full checklist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                Need more than self-study?
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Bring the course into a team or cohort setting
              </h2>
            </div>
            <Link
              to={getCourseEnquiryPath(course)}
              className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--accent-strong)]"
            >
              Request access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        <ContinueJourney page="courses" />
      </div>
    </div>
  );
};
