import * as z from 'zod';
import { NoticeLevelSchema } from '../../enums/NoticeLevel.schema';
// prettier-ignore
export const NoticeModelSchema = z.object({
    id: z.string(),
    level: NoticeLevelSchema,
    content_md: z.string(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type NoticePureType = z.infer<typeof NoticeModelSchema>;
