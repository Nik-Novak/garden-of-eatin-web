import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceFeatureSchema } from '../enums/ResourceFeature.schema'

const makeSchema = () => z.object({
  set: ResourceFeatureSchema.array()
}).strict();
export const ResourceCreatefeaturesInputObjectSchema: z.ZodType<Prisma.ResourceCreatefeaturesInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreatefeaturesInput>;
export const ResourceCreatefeaturesInputObjectZodSchema = makeSchema();
