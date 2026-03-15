import { COURSE_CATALOG, COURSE_DELIVERY_MODELS } from '../content/courseCatalog';
import type { Course } from './types';

export const COURSES: Course[] = COURSE_CATALOG;
export { COURSE_DELIVERY_MODELS };
export const FLAGSHIP_FOUNDATIONS_SLUG = 'ai-foundations-for-real-work';

export const FEATURED_COURSES = COURSES.slice(0, 3);

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((course) => course.slug === slug);
}

export function mergeFetchedCourses(remoteCourses: Course[]): Course[] {
  if (remoteCourses.length === 0) {
    return COURSES;
  }

  const remoteBySlug = new Map(remoteCourses.map((course) => [course.slug, course]));
  const mergedCourses = COURSES.map((course) =>
    course.slug === FLAGSHIP_FOUNDATIONS_SLUG ? course : (remoteBySlug.get(course.slug) ?? course)
  );

  const extraRemoteCourses = remoteCourses.filter((course) => !COURSES.some((localCourse) => localCourse.slug === course.slug));

  return [...mergedCourses, ...extraRemoteCourses];
}

export function getCourseLessonCount(course: Course): number {
  return course.modules.reduce((total, module) => total + module.lessons.length, 0);
}

export function getCourseEnquiryPath(course: Pick<Course, 'title'>): string {
  const params = new URLSearchParams({
    service: 'Courses and cohorts',
    context: `I want access to the "${course.title}" course. Please send the best next step and delivery options.`,
  });

  return `/training?${params.toString()}#enquiry-form`;
}
