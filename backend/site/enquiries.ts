import { APIError, api } from 'encore.dev/api';
import { randomUUID } from 'node:crypto';
import { db } from './db';

interface CreateEnquiryRequest {
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

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 160;
const MAX_COMPANY_LENGTH = 160;
const MAX_SERVICE_LENGTH = 120;
const MAX_SOURCE_PATH_LENGTH = 240;
const MAX_MESSAGE_LENGTH = 4000;

export const createEnquiry = api<CreateEnquiryRequest, CreateEnquiryResponse>(
  { expose: true, method: 'POST', path: '/api/enquiries' },
  async (input) => {
    const name = cleanRequiredText(input.name, 'name', MAX_NAME_LENGTH);
    const email = cleanEmail(input.email);
    const service = cleanRequiredText(input.service, 'service', MAX_SERVICE_LENGTH);
    const company = cleanOptionalText(input.company, MAX_COMPANY_LENGTH);
    const sourcePath = cleanOptionalText(input.sourcePath, MAX_SOURCE_PATH_LENGTH);
    const message = cleanOptionalMessage(input.message);
    const enquiryId = randomUUID();
    const receivedAt = new Date().toISOString();

    await db.exec`
      INSERT INTO contact_enquiries (
        id,
        name,
        email,
        company,
        service,
        message,
        source_path,
        created_at
      )
      VALUES (
        ${enquiryId},
        ${name},
        ${email},
        ${company},
        ${service},
        ${message},
        ${sourcePath},
        ${receivedAt}
      )
    `;

    return {
      enquiryId,
      receivedAt,
    };
  }
);

function cleanRequiredText(value: string | undefined, field: string, maxLength: number): string {
  const normalized = cleanOptionalText(value, maxLength);

  if (!normalized) {
    throw APIError.invalidArgument(`Please provide a valid ${field}.`);
  }

  return normalized;
}

function cleanOptionalText(value: string | undefined, maxLength: number): string | null {
  if (typeof value !== 'string') {
    return null;
  }

  const normalized = value.replace(/\s+/g, ' ').trim();

  if (!normalized) {
    return null;
  }

  return normalized.slice(0, maxLength);
}

function cleanOptionalMessage(value: string | undefined): string | null {
  if (typeof value !== 'string') {
    return null;
  }

  const normalized = value.replace(/\r\n/g, '\n').trim();

  if (!normalized) {
    return null;
  }

  return normalized.slice(0, MAX_MESSAGE_LENGTH);
}

function cleanEmail(value: string | undefined): string {
  const normalized = cleanRequiredText(value, 'email', MAX_EMAIL_LENGTH).toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    throw APIError.invalidArgument('Please provide a valid email address.');
  }

  return normalized;
}
