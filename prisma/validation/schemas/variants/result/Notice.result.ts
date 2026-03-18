import * as z from 'zod';
import { NoticeLevelSchema } from '../../enums/NoticeLevel.schema';
// prettier-ignore
export const NoticeResultSchema = z.object({
    id: z.string(),
    level: NoticeLevelSchema,
    content_md: z.string(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type NoticeResultType = z.infer<typeof NoticeResultSchema>;
