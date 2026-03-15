import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, BookOpen, CheckCircle2, Layers3, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContinueJourney } from '../components/Journey';
import { useJourneyProfile } from '../components/JourneyProfile';
import { PageUtilityRail } from '../components/PageUtilityRail';
import {
  COURSE_DELIVERY_MODELS,
  COURSES as fallbackCourses,
  getCourseEnquiryPath,
  getCourseLessonCount,
  mergeFetchedCourses,
} from '../courseData';
import { fetchCourses } from '../lib/api';
import type { Course } from '../types';

const deliveryIcons = [BookOpen, Users2, Layers3];

export const Courses = () => {
  const { setProfile } = useJourneyProfile();
  const [courses, setCourses] = React.useState<Course[]>(fallbackCourses);

  React.useEffect(() => {
    setProfile('beginner');
  }, [setProfile]);

  React.useEffect(() => {
    let isMounted = true;

    fetchCourses<Course>()
      .then((nextCourses) => {
        if (isMounted && nextCourses.length > 0) {
          setCourses(mergeFetchedCourses(nextCourses));
        }
      })
      .catch(() => {
        // Shared fallback content keeps the catalog usable if the API is temporarily unavailable.
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <Helmet>
        <title>Courses | ABCAI</title>
        <meta
          name="description"
          content="Browse ABCAI courses for beginners, business teams, and builders who want structured AI learning with real outcomes."
        />
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <PageUtilityRail
          journeyPage="courses"
          quickNav={{
            title: 'Jump through the course layer',
            items: [
              { id: 'course-catalog', label: 'Course catalog', description: 'See the learning tracks currently taking shape.' },
              { id: 'delivery-models', label: 'Delivery models', description: 'See how ABCAI can serve self-paced, cohort, and team learning.' },
              { id: 'course-access', label: 'Access options', description: 'Jump to the route for requesting course or cohort access.' },
            ],
          }}
        />

        <header className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Courses
            </p>
            <h1 className="mt-2 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
              Structured AI learning that leads somewhere.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              ABCAI courses are the learning layer for people who want more than scattered articles and random tool
              tips. They are built to move learners from confusion into capability, then from capability into useful
              work.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">What a real course should do</h2>
            <div className="mt-6 space-y-3 text-sm leading-6 text-[color:var(--ink)]/82">
              {[
                'Sequence the material so people know what matters first.',
                'Turn concepts into exercises, templates, and repeatable habits.',
                'Leave the learner with a better workflow, not just more vocabulary.',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[color:var(--surface-strong)] p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </header>

        <section id="course-catalog" className="mt-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                Catalog
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Start with the right track for your actual goal
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[color:var(--muted)]">
              The course catalog is not meant to become a bloated academy. It should stay tight, useful, and clearly
              tied to how people learn and work with AI in the real world.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {courses.map((course, index) => (
              <motion.article
                key={course.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_16px_42px_rgba(23,33,39,0.05)]"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                  <span>{course.level}</span>
                  <span className="text-[color:var(--muted)]">•</span>
                  <span>{course.duration}</span>
                  <span className="text-[color:var(--muted)]">•</span>
                  <span>{getCourseLessonCount(course)} lessons</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{course.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{course.summary}</p>
                <div className="mt-5 rounded-2xl bg-[color:var(--surface-strong)] p-4 text-sm leading-6 text-[color:var(--ink)]/82">
                  {course.highlight}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {course.includes.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[color:var(--line)] bg-white px-3 py-1 text-xs font-medium text-[color:var(--ink)]/78"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to={`/courses/${course.slug}`}
                    onClick={() => setProfile(course.journeyProfile)}
                    className="inline-flex items-center text-sm font-semibold text-[color:var(--accent-strong)]"
                  >
                    Open course
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    to={getCourseEnquiryPath(course)}
                    onClick={() => setProfile(course.journeyProfile)}
                    className="inline-flex items-center text-sm font-semibold text-[color:var(--ink)]/78"
                  >
                    Request access
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="delivery-models" className="mt-16 rounded-[2.3rem] bg-[color:var(--ink)] p-6 text-[color:var(--paper)] shadow-[0_28px_80px_rgba(23,33,39,0.14)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.5)]">
                Delivery models
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                How ABCAI can actually serve learning
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[color:rgba(248,244,238,0.72)]">
              The point is not to shove every learner into the same format. Some people need self-paced clarity. Some
              need cohort pressure. Teams need rollout support that survives beyond the course itself.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {COURSE_DELIVERY_MODELS.map((model, index) => {
              const Icon = deliveryIcons[index] ?? BookOpen;

              return (
                <div key={model.title} className="rounded-[1.9rem] border border-white/10 bg-white/5 p-6">
                  <Icon className="h-6 w-6 text-[color:var(--accent)]" />
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{model.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[color:rgba(248,244,238,0.78)]">{model.summary}</p>
                  <div className="mt-5 rounded-2xl bg-white/6 p-4 text-sm leading-6 text-[color:rgba(248,244,238,0.78)]">
                    <span className="font-semibold text-white">Best for:</span> {model.bestFor}
                  </div>
                  <div className="mt-5 space-y-2">
                    {model.includes.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-[color:rgba(248,244,238,0.78)]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="course-access" className="mt-16 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Access and rollout
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Ready to turn learning into delivery?
            </h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              The current product shape is honest: course discovery and course enquiry are live now. Auth, progress
              tracking, certificates, and learner dashboards can come later, but only once the course structure and
              delivery model are worth scaling.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(23,65,63,0.96),rgba(23,33,39,0.96))] p-6 text-[color:var(--paper)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.5)]">
              Next step
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">Request course access or a cohort run</h2>
            <p className="mt-4 text-sm leading-7 text-[color:rgba(248,244,238,0.76)]">
              Use the enquiry flow if you want individual access, a live cohort, or a team delivery version of one of
              these tracks.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to={getCourseEnquiryPath(courses[0] ?? fallbackCourses[0])}
                onClick={() => setProfile('beginner')}
                className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface)]"
              >
                Request course access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/training"
                onClick={() => setProfile('business')}
                className="inline-flex items-center rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white hover:bg-white/8"
              >
                Talk about team rollout
              </Link>
            </div>
          </div>
        </section>

        <ContinueJourney page="courses" />
      </div>
    </div>
  );
};
