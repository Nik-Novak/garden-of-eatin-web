import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FeatureSchema } from '../enums/Feature.schema'

const makeSchema = () => z.object({
  set: FeatureSchema.array()
}).strict();
export const ReviewCreatefeature_reviewsInputObjectSchema: z.ZodType<Prisma.ReviewCreatefeature_reviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreatefeature_reviewsInput>;
export const ReviewCreatefeature_reviewsInputObjectZodSchema = makeSchema();
