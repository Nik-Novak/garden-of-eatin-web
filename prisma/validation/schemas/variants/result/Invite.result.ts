import * as z from 'zod';
import { InviteStatusSchema } from '../../enums/InviteStatus.schema';
// prettier-ignore
export const InviteResultSchema = z.object({
    id: z.string(),
    email: z.string(),
    status: InviteStatusSchema,
    inviter: z.unknown(),
    inviter_id: z.string(),
    user: z.unknown().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type InviteResultType = z.infer<typeof InviteResultSchema>;
