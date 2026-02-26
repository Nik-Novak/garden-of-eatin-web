import * as z from 'zod';
// prettier-ignore
export const AccountInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    type: z.string(),
    provider: z.string(),
    providerAccountId: z.string(),
    refresh_token: z.string().optional().nullable(),
    access_token: z.string().optional().nullable(),
    expires_at: z.number().int().optional().nullable(),
    expires_in: z.number().int().optional().nullable(),
    token_type: z.string().optional().nullable(),
    scope: z.string().optional().nullable(),
    id_token: z.string().optional().nullable(),
    session_state: z.string().optional().nullable(),
    api_domain: z.string().optional().nullable(),
    userType: z.string().optional().nullable(),
    locationId: z.string().optional().nullable(),
    company_id: z.string().optional().nullable(),
    approvedLocations: z.array(z.string()),
    planId: z.string().optional().nullable(),
    user: z.unknown(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type AccountInputType = z.infer<typeof AccountInputSchema>;
