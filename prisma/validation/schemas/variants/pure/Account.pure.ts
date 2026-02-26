import * as z from 'zod';
// prettier-ignore
export const AccountModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    type: z.string(),
    provider: z.string(),
    providerAccountId: z.string(),
    refresh_token: z.string().nullable(),
    access_token: z.string().nullable(),
    expires_at: z.number().int().nullable(),
    expires_in: z.number().int().nullable(),
    token_type: z.string().nullable(),
    scope: z.string().nullable(),
    id_token: z.string().nullable(),
    session_state: z.string().nullable(),
    api_domain: z.string().nullable(),
    userType: z.string().nullable(),
    locationId: z.string().nullable(),
    company_id: z.string().nullable(),
    approvedLocations: z.array(z.string()),
    planId: z.string().nullable(),
    user: z.unknown(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type AccountPureType = z.infer<typeof AccountModelSchema>;
