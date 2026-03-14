CREATE TABLE courses (
  slug TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  strapline TEXT NOT NULL,
  summary TEXT NOT NULL,
  audience TEXT NOT NULL,
  level TEXT NOT NULL,
  format TEXT NOT NULL,
  duration TEXT NOT NULL,
  pace TEXT NOT NULL,
  status TEXT NOT NULL,
  journey_profile TEXT NOT NULL,
  highlight TEXT NOT NULL,
  outcomes_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  prerequisites_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  includes_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  for_who_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  delivery_modes_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  sort_order INTEGER NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE course_modules (
  slug TEXT PRIMARY KEY,
  course_slug TEXT NOT NULL REFERENCES courses(slug) ON DELETE CASCADE,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  sort_order INTEGER NOT NULL
);

CREATE UNIQUE INDEX course_modules_course_sort_idx ON course_modules(course_slug, sort_order);

CREATE TABLE course_lessons (
  slug TEXT PRIMARY KEY,
  course_slug TEXT NOT NULL REFERENCES courses(slug) ON DELETE CASCADE,
  module_slug TEXT NOT NULL REFERENCES course_modules(slug) ON DELETE CASCADE,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  duration TEXT NOT NULL,
  format TEXT NOT NULL,
  content_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  practice_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  sort_order INTEGER NOT NULL
);

CREATE UNIQUE INDEX course_lessons_module_sort_idx ON course_lessons(module_slug, sort_order);
CREATE INDEX course_lessons_course_idx ON course_lessons(course_slug);

CREATE TABLE course_lesson_progress (
  learner_id TEXT NOT NULL,
  course_slug TEXT NOT NULL REFERENCES courses(slug) ON DELETE CASCADE,
  lesson_slug TEXT NOT NULL REFERENCES course_lessons(slug) ON DELETE CASCADE,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (learner_id, course_slug, lesson_slug)
);

CREATE INDEX course_lesson_progress_course_idx ON course_lesson_progress(course_slug, learner_id);
