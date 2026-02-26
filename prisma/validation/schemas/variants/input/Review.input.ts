import * as z from 'zod';
import { FeatureSchema } from '../../enums/Feature.schema';
// prettier-ignore
export const ReviewInputSchema = z.object({
    id: z.string(),
    name: z.string().optional().nullable(),
    overall: z.number(),
    facet_reviews: z.array(z.unknown()),
    feature_reviews: FeatureSchema.array(),
    device: z.unknown(),
    device_id: z.string(),
    meal: z.unknown(),
    meal_id: z.string(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type ReviewInputType = z.infer<typeof ReviewInputSchema>;
