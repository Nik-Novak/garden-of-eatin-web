import * as z from 'zod';
import { InviteStatusSchema } from '../../enums/InviteStatus.schema';
// prettier-ignore
export const InviteInputSchema = z.object({
    id: z.string(),
    email: z.string(),
    status: InviteStatusSchema,
    inviter: z.unknown(),
    inviter_id: z.string(),
    user: z.unknown().optional().nullable(),
    user_id: z.string().optional().nullable(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type InviteInputType = z.infer<typeof InviteInputSchema>;
