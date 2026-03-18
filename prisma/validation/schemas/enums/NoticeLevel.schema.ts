import * as z from 'zod';

export const NoticeLevelSchema = z.enum(['Info', 'Warning', 'Error'])

export type NoticeLevel = z.infer<typeof NoticeLevelSchema>;