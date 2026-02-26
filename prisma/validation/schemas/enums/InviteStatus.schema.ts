import * as z from 'zod';

export const InviteStatusSchema = z.enum(['sent', 'opened', 'complete'])

export type InviteStatus = z.infer<typeof InviteStatusSchema>;