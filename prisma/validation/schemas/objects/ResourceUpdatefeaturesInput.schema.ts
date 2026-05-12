import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceFeatureSchema } from '../enums/ResourceFeature.schema'

const makeSchema = () => z.object({
  set: ResourceFeatureSchema.array().optional(),
  push: z.union([ResourceFeatureSchema, ResourceFeatureSchema.array()]).optional()
}).strict();
export const ResourceUpdatefeaturesInputObjectSchema: z.ZodType<Prisma.ResourceUpdatefeaturesInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpdatefeaturesInput>;
export const ResourceUpdatefeaturesInputObjectZodSchema = makeSchema();
