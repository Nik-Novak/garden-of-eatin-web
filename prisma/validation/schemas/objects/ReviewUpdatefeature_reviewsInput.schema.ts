import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FeatureSchema } from '../enums/Feature.schema'

const makeSchema = () => z.object({
  set: FeatureSchema.array().optional(),
  push: z.union([FeatureSchema, FeatureSchema.array()]).optional()
}).strict();
export const ReviewUpdatefeature_reviewsInputObjectSchema: z.ZodType<Prisma.ReviewUpdatefeature_reviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdatefeature_reviewsInput>;
export const ReviewUpdatefeature_reviewsInputObjectZodSchema = makeSchema();
