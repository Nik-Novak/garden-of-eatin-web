import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FeatureSchema } from '../enums/Feature.schema'

const makeSchema = () => z.object({
  set: FeatureSchema.array()
}).strict();
export const MealCreatefeaturesInputObjectSchema: z.ZodType<Prisma.MealCreatefeaturesInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreatefeaturesInput>;
export const MealCreatefeaturesInputObjectZodSchema = makeSchema();
