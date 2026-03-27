import * as z from 'zod';
// prettier-ignore
export const DeviceResultSchema = z.object({
    id: z.string(),
    uuid: z.string(),
    metadata: z.unknown().nullable(),
    settings: z.unknown(),
    device_agreements: z.array(z.unknown()),
    user: z.unknown().nullable(),
    user_id: z.string().nullable(),
    meal_interactions: z.array(z.unknown()),
    bugs: z.array(z.unknown()),
    contact_requests: z.array(z.unknown()),
    reviews: z.array(z.unknown()),
    submitted_meals: z.array(z.unknown()),
    meal_occurrence_searches: z.array(z.unknown()),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type DeviceResultType = z.infer<typeof DeviceResultSchema>;
