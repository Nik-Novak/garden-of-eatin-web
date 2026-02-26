import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { FeatureSchema } from '../enums/Feature.schema'

const makeSchema = () => z.object({
  set: FeatureSchema.array().optional(),
  push: z.union([FeatureSchema, FeatureSchema.array()]).optional()
}).strict();
export const MealUpdatefeaturesInputObjectSchema: z.ZodType<Prisma.MealUpdatefeaturesInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdatefeaturesInput>;
export const MealUpdatefeaturesInputObjectZodSchema = makeSchema();
