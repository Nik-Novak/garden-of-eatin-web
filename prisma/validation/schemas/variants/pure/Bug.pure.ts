import * as z from 'zod';
// prettier-ignore
export const BugModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    client_log: z.string(),
    server_log: z.string(),
    device: z.unknown(),
    device_id: z.string(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type BugPureType = z.infer<typeof BugModelSchema>;
