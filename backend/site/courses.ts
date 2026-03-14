import { APIError, api } from 'encore.dev/api';
import { COURSE_CATALOG, type SharedCourse, type SharedCourseLesson, type SharedCourseModule } from '../../content/courseCatalog';
import { db } from './db';

interface ListCoursesResponse {
  courses: SharedCourse[];
}

interface GetCourseRequest {
  slug: string;
}

interface GetCourseResponse {
  course: SharedCourse;
}

interface GetCourseProgressRequest {
  courseSlug: string;
  learnerId: string;
}

interface UpdateCourseProgressRequest {
  courseSlug: string;
  learnerId: string;
  lessonSlug: string;
  completed: boolean;
}

interface CourseProgressResponse {
  learnerId: string;
  courseSlug: string;
  completedLessonSlugs: string[];
  completionCount: number;
  totalLessons: number;
}

interface CourseRow {
  slug: string;
  title: string;
  strapline: string;
  summary: string;
  audience: string;
  level: string;
  format: string;
  duration: string;
  pace: string;
  status: string;
  journey_profile: SharedCourse['journeyProfile'];
  highlight: string;
  outcomes_json: unknown;
  prerequisites_json: unknown;
  includes_json: unknown;
  for_who_json: unknown;
  delivery_modes_json: unknown;
}

interface ModuleRow {
  slug: string;
  course_slug: string;
  title: string;
  summary: string;
  sort_order: number;
}

interface LessonRow {
  slug: string;
  course_slug: string;
  module_slug: string;
  title: string;
  summary: string;
  duration: string;
  format: string;
  content_json: unknown;
  practice_json: unknown;
  sort_order: number;
}

interface CountRow {
  count: number;
}

interface ProgressRow {
  lesson_slug: string;
}

const MAX_SLUG_LENGTH = 160;
const MAX_LEARNER_ID_LENGTH = 160;

let seedPromise: Promise<void> | null = null;

export const listCourses = api<void, ListCoursesResponse>(
  { expose: true, method: 'GET', path: '/api/courses' },
  async () => {
    await ensureCourseCatalogSeeded();

    return {
      courses: await readAllCourses(),
    };
  }
);

export const getCourse = api<GetCourseRequest, GetCourseResponse>(
  { expose: true, method: 'GET', path: '/api/courses/:slug' },
  async ({ slug }) => {
    await ensureCourseCatalogSeeded();
    const normalizedSlug = cleanIdentifier(slug, 'course slug', MAX_SLUG_LENGTH);
    const course = await readCourse(normalizedSlug);

    if (!course) {
      throw APIError.notFound('The requested course was not found.');
    }

    return { course };
  }
);

export const getCourseProgress = api<GetCourseProgressRequest, CourseProgressResponse>(
  { expose: true, method: 'GET', path: '/api/courses/:courseSlug/progress/:learnerId' },
  async ({ courseSlug, learnerId }) => {
    await ensureCourseCatalogSeeded();
    const normalizedCourseSlug = cleanIdentifier(courseSlug, 'course slug', MAX_SLUG_LENGTH);
    const normalizedLearnerId = cleanIdentifier(learnerId, 'learner id', MAX_LEARNER_ID_LENGTH);

    await assertCourseExists(normalizedCourseSlug);
    return readCourseProgress(normalizedCourseSlug, normalizedLearnerId);
  }
);

export const updateCourseProgress = api<UpdateCourseProgressRequest, CourseProgressResponse>(
  { expose: true, method: 'POST', path: '/api/courses/:courseSlug/progress' },
  async ({ courseSlug, learnerId, lessonSlug, completed }) => {
    await ensureCourseCatalogSeeded();
    const normalizedCourseSlug = cleanIdentifier(courseSlug, 'course slug', MAX_SLUG_LENGTH);
    const normalizedLearnerId = cleanIdentifier(learnerId, 'learner id', MAX_LEARNER_ID_LENGTH);
    const normalizedLessonSlug = cleanIdentifier(lessonSlug, 'lesson slug', MAX_SLUG_LENGTH);

    if (typeof completed !== 'boolean') {
      throw APIError.invalidArgument('Progress updates must include a completed flag.');
    }

    await assertLessonBelongsToCourse(normalizedCourseSlug, normalizedLessonSlug);

    await db.exec`
      INSERT INTO course_lesson_progress (
        learner_id,
        course_slug,
        lesson_slug,
        completed,
        completed_at,
        updated_at
      )
      VALUES (
        ${normalizedLearnerId},
        ${normalizedCourseSlug},
        ${normalizedLessonSlug},
        ${completed},
        CASE WHEN ${completed} THEN NOW() ELSE NULL END,
        NOW()
      )
      ON CONFLICT (learner_id, course_slug, lesson_slug)
      DO UPDATE SET
        completed = EXCLUDED.completed,
        completed_at = CASE WHEN EXCLUDED.completed THEN NOW() ELSE NULL END,
        updated_at = NOW()
    `;

    return readCourseProgress(normalizedCourseSlug, normalizedLearnerId);
  }
);

async function ensureCourseCatalogSeeded(): Promise<void> {
  if (!seedPromise) {
    seedPromise = seedCourseCatalog().catch((error) => {
      seedPromise = null;
      throw error;
    });
  }

  await seedPromise;
}

async function seedCourseCatalog(): Promise<void> {
  const tx = await db.begin();

  try {
    for (const [courseIndex, course] of COURSE_CATALOG.entries()) {
      await tx.exec`
        INSERT INTO courses (
          slug,
          title,
          strapline,
          summary,
          audience,
          level,
          format,
          duration,
          pace,
          status,
          journey_profile,
          highlight,
          outcomes_json,
          prerequisites_json,
          includes_json,
          for_who_json,
          delivery_modes_json,
          sort_order,
          updated_at
        )
        VALUES (
          ${course.slug},
          ${course.title},
          ${course.strapline},
          ${course.summary},
          ${course.audience},
          ${course.level},
          ${course.format},
          ${course.duration},
          ${course.pace},
          ${course.status},
          ${course.journeyProfile},
          ${course.highlight},
          ${JSON.stringify(course.outcomes)}::jsonb,
          ${JSON.stringify(course.prerequisites)}::jsonb,
          ${JSON.stringify(course.includes)}::jsonb,
          ${JSON.stringify(course.forWho)}::jsonb,
          ${JSON.stringify(course.deliveryModes)}::jsonb,
          ${courseIndex},
          NOW()
        )
        ON CONFLICT (slug)
        DO UPDATE SET
          title = EXCLUDED.title,
          strapline = EXCLUDED.strapline,
          summary = EXCLUDED.summary,
          audience = EXCLUDED.audience,
          level = EXCLUDED.level,
          format = EXCLUDED.format,
          duration = EXCLUDED.duration,
          pace = EXCLUDED.pace,
          status = EXCLUDED.status,
          journey_profile = EXCLUDED.journey_profile,
          highlight = EXCLUDED.highlight,
          outcomes_json = EXCLUDED.outcomes_json,
          prerequisites_json = EXCLUDED.prerequisites_json,
          includes_json = EXCLUDED.includes_json,
          for_who_json = EXCLUDED.for_who_json,
          delivery_modes_json = EXCLUDED.delivery_modes_json,
          sort_order = EXCLUDED.sort_order,
          updated_at = NOW()
      `;

      for (const [moduleIndex, module] of course.modules.entries()) {
        await tx.exec`
          INSERT INTO course_modules (
            slug,
            course_slug,
            title,
            summary,
            sort_order
          )
          VALUES (
            ${module.slug},
            ${course.slug},
            ${module.title},
            ${module.summary},
            ${moduleIndex}
          )
          ON CONFLICT (slug)
          DO UPDATE SET
            course_slug = EXCLUDED.course_slug,
            title = EXCLUDED.title,
            summary = EXCLUDED.summary,
            sort_order = EXCLUDED.sort_order
        `;

        for (const [lessonIndex, lesson] of module.lessons.entries()) {
          await tx.exec`
            INSERT INTO course_lessons (
              slug,
              course_slug,
              module_slug,
              title,
              summary,
              duration,
              format,
              content_json,
              practice_json,
              sort_order
            )
            VALUES (
              ${lesson.slug},
              ${course.slug},
              ${module.slug},
              ${lesson.title},
              ${lesson.summary},
              ${lesson.duration},
              ${lesson.format},
              ${JSON.stringify(lesson.content)}::jsonb,
              ${JSON.stringify(lesson.practice)}::jsonb,
              ${lessonIndex}
            )
            ON CONFLICT (slug)
            DO UPDATE SET
              course_slug = EXCLUDED.course_slug,
              module_slug = EXCLUDED.module_slug,
              title = EXCLUDED.title,
              summary = EXCLUDED.summary,
              duration = EXCLUDED.duration,
              format = EXCLUDED.format,
              content_json = EXCLUDED.content_json,
              practice_json = EXCLUDED.practice_json,
              sort_order = EXCLUDED.sort_order
          `;
        }
      }
    }

    await tx.commit();
  } catch (error) {
    await tx.rollback();
    throw error;
  }
}

async function readAllCourses(): Promise<SharedCourse[]> {
  const courseRows = await db.queryAll<CourseRow>`
    SELECT
      slug,
      title,
      strapline,
      summary,
      audience,
      level,
      format,
      duration,
      pace,
      status,
      journey_profile,
      highlight,
      outcomes_json,
      prerequisites_json,
      includes_json,
      for_who_json,
      delivery_modes_json
    FROM courses
    ORDER BY sort_order ASC
  `;

  const courses = await Promise.all(courseRows.map((row) => readCourse(row.slug)));
  return courses.filter((course): course is SharedCourse => Boolean(course));
}

async function readCourse(slug: string): Promise<SharedCourse | null> {
  const courseRow = await db.queryRow<CourseRow>`
    SELECT
      slug,
      title,
      strapline,
      summary,
      audience,
      level,
      format,
      duration,
      pace,
      status,
      journey_profile,
      highlight,
      outcomes_json,
      prerequisites_json,
      includes_json,
      for_who_json,
      delivery_modes_json
    FROM courses
    WHERE slug = ${slug}
  `;

  if (!courseRow) {
    return null;
  }

  const moduleRows = await db.queryAll<ModuleRow>`
    SELECT slug, course_slug, title, summary, sort_order
    FROM course_modules
    WHERE course_slug = ${slug}
    ORDER BY sort_order ASC
  `;

  const lessonRows = await db.queryAll<LessonRow>`
    SELECT
      slug,
      course_slug,
      module_slug,
      title,
      summary,
      duration,
      format,
      content_json,
      practice_json,
      sort_order
    FROM course_lessons
    WHERE course_slug = ${slug}
    ORDER BY module_slug ASC, sort_order ASC
  `;

  return {
    slug: courseRow.slug,
    title: courseRow.title,
    strapline: courseRow.strapline,
    summary: courseRow.summary,
    audience: courseRow.audience,
    level: courseRow.level,
    format: courseRow.format,
    duration: courseRow.duration,
    pace: courseRow.pace,
    status: courseRow.status,
    journeyProfile: cleanJourneyProfile(courseRow.journey_profile),
    highlight: courseRow.highlight,
    outcomes: toStringArray(courseRow.outcomes_json),
    prerequisites: toStringArray(courseRow.prerequisites_json),
    includes: toStringArray(courseRow.includes_json),
    forWho: toStringArray(courseRow.for_who_json),
    deliveryModes: toStringArray(courseRow.delivery_modes_json),
    modules: moduleRows.map((moduleRow) => ({
      slug: moduleRow.slug,
      title: moduleRow.title,
      summary: moduleRow.summary,
      lessons: lessonRows
        .filter((lessonRow) => lessonRow.module_slug === moduleRow.slug)
        .sort((left, right) => left.sort_order - right.sort_order)
        .map(toLesson),
    })),
  };
}

function toLesson(row: LessonRow): SharedCourseLesson {
  return {
    slug: row.slug,
    title: row.title,
    summary: row.summary,
    duration: row.duration,
    format: row.format,
    content: toStringArray(row.content_json),
    practice: toStringArray(row.practice_json),
  };
}

async function readCourseProgress(courseSlug: string, learnerId: string): Promise<CourseProgressResponse> {
  const completedRows = await db.queryAll<ProgressRow>`
    SELECT lesson_slug
    FROM course_lesson_progress
    WHERE course_slug = ${courseSlug}
      AND learner_id = ${learnerId}
      AND completed = TRUE
  `;

  const totalLessonsRow = await db.queryRow<CountRow>`
    SELECT COUNT(*)::int AS count
    FROM course_lessons
    WHERE course_slug = ${courseSlug}
  `;

  const completedLessonSlugs = completedRows.map((row) => row.lesson_slug);

  return {
    learnerId,
    courseSlug,
    completedLessonSlugs,
    completionCount: completedLessonSlugs.length,
    totalLessons: totalLessonsRow?.count ?? 0,
  };
}

async function assertCourseExists(courseSlug: string): Promise<void> {
  const row = await db.queryRow<{ slug: string }>`
    SELECT slug FROM courses WHERE slug = ${courseSlug}
  `;

  if (!row) {
    throw APIError.notFound('The requested course was not found.');
  }
}

async function assertLessonBelongsToCourse(courseSlug: string, lessonSlug: string): Promise<void> {
  const row = await db.queryRow<{ slug: string }>`
    SELECT slug
    FROM course_lessons
    WHERE course_slug = ${courseSlug}
      AND slug = ${lessonSlug}
  `;

  if (!row) {
    throw APIError.notFound('The requested lesson was not found for this course.');
  }
}

function cleanIdentifier(value: string | undefined, field: string, maxLength: number): string {
  if (typeof value !== 'string') {
    throw APIError.invalidArgument(`Please provide a valid ${field}.`);
  }

  const normalized = value.trim();

  if (!normalized) {
    throw APIError.invalidArgument(`Please provide a valid ${field}.`);
  }

  return normalized.slice(0, maxLength);
}

function cleanJourneyProfile(value: string): SharedCourse['journeyProfile'] {
  if (value === 'beginner' || value === 'business' || value === 'builder') {
    return value;
  }

  return 'beginner';
}

function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => String(item));
  }

  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);

      if (Array.isArray(parsed)) {
        return parsed.map((item) => String(item));
      }
    } catch {
      return [];
    }
  }

  return [];
}
