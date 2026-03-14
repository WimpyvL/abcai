export interface CreateEnquiryInput {
  name: string;
  email: string;
  company?: string;
  service: string;
  message?: string;
  sourcePath?: string;
}

interface CreateEnquiryResponse {
  enquiryId: string;
  receivedAt: string;
}

interface ApiErrorResponse {
  message?: string;
  code?: string;
  details?: Record<string, unknown>;
}

export interface CourseProgressPayload {
  learnerId: string;
  lessonSlug: string;
  completed: boolean;
}

interface CoursesResponse<TCourse> {
  courses: TCourse[];
}

interface CourseResponse<TCourse> {
  course: TCourse;
}

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/$/, '');

export async function submitEnquiry(input: CreateEnquiryInput): Promise<CreateEnquiryResponse> {
  const response = await fetch(buildApiUrl('/api/enquiries'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    const payload = (await safeParseJson<ApiErrorResponse>(response)) ?? {};
    throw new Error(payload.message ?? 'Something went wrong while sending your enquiry.');
  }

  const payload = await safeParseJson<CreateEnquiryResponse>(response);

  if (!payload) {
    throw new Error('The enquiry was accepted, but the response was empty.');
  }

  return payload;
}

export async function fetchCourses<TCourse>(): Promise<TCourse[]> {
  const response = await fetch(buildApiUrl('/api/courses'));

  if (!response.ok) {
    throw await toApiError(response);
  }

  const payload = await safeParseJson<CoursesResponse<TCourse>>(response);

  if (!payload) {
    throw new Error('The course catalog response was empty.');
  }

  return payload.courses;
}

export async function fetchCourse<TCourse>(slug: string): Promise<TCourse> {
  const response = await fetch(buildApiUrl(`/api/courses/${encodeURIComponent(slug)}`));

  if (!response.ok) {
    throw await toApiError(response);
  }

  const payload = await safeParseJson<CourseResponse<TCourse>>(response);

  if (!payload) {
    throw new Error('The course detail response was empty.');
  }

  return payload.course;
}

export async function fetchCourseProgress<TProgress>(courseSlug: string, learnerId: string): Promise<TProgress> {
  const response = await fetch(buildApiUrl(`/api/courses/${encodeURIComponent(courseSlug)}/progress/${encodeURIComponent(learnerId)}`));

  if (!response.ok) {
    throw await toApiError(response);
  }

  const payload = await safeParseJson<TProgress>(response);

  if (!payload) {
    throw new Error('The course progress response was empty.');
  }

  return payload;
}

export async function updateCourseLessonProgress<TProgress>(courseSlug: string, input: CourseProgressPayload): Promise<TProgress> {
  const response = await fetch(buildApiUrl(`/api/courses/${encodeURIComponent(courseSlug)}/progress`), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw await toApiError(response);
  }

  const payload = await safeParseJson<TProgress>(response);

  if (!payload) {
    throw new Error('The updated course progress response was empty.');
  }

  return payload;
}

function buildApiUrl(path: string): string {
  return API_BASE_URL ? `${API_BASE_URL}${path}` : path;
}

async function toApiError(response: Response): Promise<Error> {
  const payload = (await safeParseJson<ApiErrorResponse>(response)) ?? {};
  return new Error(payload.message ?? 'Something went wrong while talking to the backend.');
}

async function safeParseJson<T>(response: Response): Promise<T | null> {
  const text = await response.text();

  if (!text) {
    return null;
  }

  return JSON.parse(text) as T;
}
