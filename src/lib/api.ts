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

function buildApiUrl(path: string): string {
  return API_BASE_URL ? `${API_BASE_URL}${path}` : path;
}

async function safeParseJson<T>(response: Response): Promise<T | null> {
  const text = await response.text();

  if (!text) {
    return null;
  }

  return JSON.parse(text) as T;
}
