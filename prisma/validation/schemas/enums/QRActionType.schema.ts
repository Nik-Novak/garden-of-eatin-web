import * as z from 'zod';

export const QRActionTypeSchema = z.enum(['URL_REDIRECT', 'APP_DEEP_LINK', 'FILE_DOWNLOAD', 'TEXT_DISPLAY', 'WIFI_CONNECT'])

export type QRActionType = z.infer<typeof QRActionTypeSchema>;