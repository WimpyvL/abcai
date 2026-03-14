import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, CheckCircle2, GraduationCap, Layers3, NotebookTabs } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ContinueJourney } from '../components/Journey';
import { useJourneyProfile } from '../components/JourneyProfile';
import { PageUtilityRail } from '../components/PageUtilityRail';
import { getCourseBySlug, getCourseEnquiryPath, getCourseLessonCount } from '../courseData';
import { fetchCourse, fetchCourseProgress, updateCourseLessonProgress } from '../lib/api';
import { getOrCreateLearnerId } from '../lib/learner';
import type { Course, CourseProgress } from '../types';

export const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { setProfile } = useJourneyProfile();
  const fallbackCourse = getCourseBySlug(slug ?? '');
  const [course, setCourse] = React.useState<Course | undefined>(fallbackCourse);
  const [learnerId] = React.useState(() => getOrCreateLearnerId());
  const [progress, setProgress] = React.useState<CourseProgress | null>(null);
  const [savingLessonSlug, setSavingLessonSlug] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (course) {
      setProfile(course.journeyProfile);
    }
  }, [course, setProfile]);

  React.useEffect(() => {
    let isMounted = true;

    if (!slug) {
      return () => {
        isMounted = false;
      };
    }

    fetchCourse<Course>(slug)
      .then((nextCourse) => {
        if (isMounted) {
          setCourse(nextCourse);
        }
      })
      .catch(() => {
        // Shared fallback course data keeps the page usable while backend delivery settles.
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

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

  if (!course && !fallbackCourse) {
    return <Navigate to="/courses" replace />;
  }

  const completedLessonSlugs = new Set(progress?.completedLessonSlugs ?? []);

  const toggleLessonCompletion = async (lessonSlug: string, completed: boolean) => {
    if (!course) {
      return;
    }

    setSavingLessonSlug(lessonSlug);

    try {
      const nextProgress = await updateCourseLessonProgress<CourseProgress>(course.slug, {
        learnerId,
        lessonSlug,
        completed,
      });

      setProgress(nextProgress);
    } catch {
      // If the write fails, leave the last known progress in place.
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
              { id: 'course-overview', label: 'Overview', description: 'See what the course is for and who it helps.' },
              { id: 'course-modules', label: 'Modules', description: 'Jump to the structure, lessons, and module flow.' },
              { id: 'course-access', label: 'Access', description: 'Go straight to the access and delivery options.' },
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

        <header id="course-overview" className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
              <span>{course.level}</span>
              <span className="text-[color:var(--muted)]">•</span>
              <span>{course.duration}</span>
              <span className="text-[color:var(--muted)]">•</span>
              <span>{getCourseLessonCount(course)} lessons</span>
            </div>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">{course.title}</h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-[color:var(--muted)]">{course.strapline}</p>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[color:var(--ink)]/82">{course.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={getCourseEnquiryPath(course)}
                onClick={() => setProfile(course.journeyProfile)}
                className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--accent-strong)]"
              >
                Request access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/training"
                onClick={() => setProfile('business')}
                className="inline-flex items-center rounded-full border border-[color:var(--line-strong)] bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface-strong)]"
              >
                Ask about team delivery
              </Link>
            </div>

            <div className="mt-8 inline-flex items-center rounded-full border border-[color:var(--line)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--ink)]/82">
              {progress?.completionCount ?? 0} of {progress?.totalLessons ?? getCourseLessonCount(course)} lessons completed
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-[color:var(--accent)]" />
                <h2 className="text-2xl font-semibold tracking-[-0.04em]">Course fit</h2>
              </div>
              <div className="mt-5 space-y-3 text-sm leading-6 text-[color:var(--ink)]/82">
                <div className="rounded-2xl bg-[color:var(--surface-strong)] p-4">
                  <span className="font-semibold">Audience:</span> {course.audience}
                </div>
                <div className="rounded-2xl bg-[color:var(--surface-strong)] p-4">
                  <span className="font-semibold">Format:</span> {course.format}
                </div>
                <div className="rounded-2xl bg-[color:var(--surface-strong)] p-4">
                  <span className="font-semibold">Pace:</span> {course.pace}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[color:var(--ink)] p-6 text-[color:var(--paper)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.5)]">
                This course delivers
              </p>
              <div className="mt-5 space-y-3">
                {course.outcomes.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-6 text-[color:rgba(248,244,238,0.8)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <NotebookTabs className="h-6 w-6 text-[color:var(--accent)]" />
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">Who this is for</h2>
            </div>
            <div className="mt-6 space-y-3">
              {course.forWho.map((item) => (
                <div key={item} className="rounded-2xl bg-[color:var(--surface-strong)] p-4 text-sm leading-6 text-[color:var(--ink)]/82">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Layers3 className="h-6 w-6 text-[color:var(--accent)]" />
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">What is included</h2>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {course.includes.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-2 text-sm font-medium text-[color:var(--ink)]/82"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                Prerequisites
              </p>
              <div className="mt-4 space-y-3">
                {course.prerequisites.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-6 text-[color:var(--muted)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="course-modules" className="mt-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                Modules
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Course structure with a deliberate sequence
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[color:var(--muted)]">
              The order matters. Each module is there to move the learner from clearer thinking into more credible use.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {course.modules.map((module, moduleIndex) => (
              <article
                key={module.title}
                className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_16px_42px_rgba(23,33,39,0.04)] sm:p-8"
              >
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                      Module 0{moduleIndex + 1}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{module.title}</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-[color:var(--muted)]">{module.summary}</p>
                  </div>
                  <div className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-2 text-sm font-medium text-[color:var(--ink)]/82">
                    {module.lessons.length} lesson{module.lessons.length === 1 ? '' : 's'}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  {module.lessons.map((lesson) => (
                    <div key={lesson.title} className="rounded-[1.6rem] bg-[color:var(--surface)] p-5">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                        <span>{lesson.format}</span>
                        <span className="text-[color:var(--muted)]">•</span>
                        <span>{lesson.duration}</span>
                      </div>
                      <h4 className="mt-3 text-xl font-semibold tracking-[-0.03em]">{lesson.title}</h4>
                      <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{lesson.summary}</p>
                      <div className="mt-4 space-y-3 text-sm leading-6 text-[color:var(--ink)]/82">
                        {lesson.content.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      <div className="mt-5 rounded-2xl bg-white p-4">
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
                        className={`mt-5 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${
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
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="course-access" className="mt-16 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Delivery options
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              This course can be served a few different ways
            </h2>
            <div className="mt-6 space-y-3">
              {course.deliveryModes.map((item) => (
                <div key={item} className="rounded-2xl bg-[color:var(--surface-strong)] p-4 text-sm leading-6 text-[color:var(--ink)]/82">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(23,33,39,0.96),rgba(23,65,63,0.96))] p-6 text-[color:var(--paper)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.5)]">
              Access
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">Request access or ask for team delivery</h2>
            <p className="mt-4 text-sm leading-7 text-[color:rgba(248,244,238,0.76)]">
              The honest product state right now is this: discovery, course structure, and enquiry are live. The
              delivery mechanics can deepen next, but the path into a real course conversation already exists.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to={getCourseEnquiryPath(course)}
                onClick={() => setProfile(course.journeyProfile)}
                className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface)]"
              >
                Request access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/courses"
                onClick={() => setProfile('beginner')}
                className="inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/8"
              >
                Browse other courses
              </Link>
            </div>
          </div>
        </section>

        <ContinueJourney page="courses" />
      </div>
    </div>
  );
};
