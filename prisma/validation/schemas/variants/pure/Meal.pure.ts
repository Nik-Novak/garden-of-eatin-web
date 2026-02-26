import * as z from 'zod';
import { SettingSchema } from '../../enums/Setting.schema';
import { ServiceSchema } from '../../enums/Service.schema';
import { ParkingSchema } from '../../enums/Parking.schema';
import { FeatureSchema } from '../../enums/Feature.schema';
// prettier-ignore
export const MealModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    place: z.unknown(),
    location: z.unknown(),
    schedule: z.unknown(),
    timezone: z.string(),
    setting: SettingSchema.array(),
    service: ServiceSchema.nullable(),
    parking: ParkingSchema.nullable(),
    features: FeatureSchema.array(),
    reviews: z.array(z.unknown()),
    meal_occurrences: z.array(z.unknown()),
    approved: z.boolean().nullable(),
    submitter: z.unknown().nullable(),
    submitter_id: z.string().nullable(),
    submitter_name: z.string().nullable(),
    stats: z.unknown(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type MealPureType = z.infer<typeof MealModelSchema>;
