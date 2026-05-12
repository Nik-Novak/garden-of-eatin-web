import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DietaryTagSchema } from '../enums/DietaryTag.schema'

const makeSchema = () => z.object({
  set: DietaryTagSchema.array().optional(),
  push: z.union([DietaryTagSchema, DietaryTagSchema.array()]).optional()
}).strict();
export const ResourceUpdatedietary_tagsInputObjectSchema: z.ZodType<Prisma.ResourceUpdatedietary_tagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpdatedietary_tagsInput>;
export const ResourceUpdatedietary_tagsInputObjectZodSchema = makeSchema();
