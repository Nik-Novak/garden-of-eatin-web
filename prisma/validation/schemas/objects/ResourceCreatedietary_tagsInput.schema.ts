import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DietaryTagSchema } from '../enums/DietaryTag.schema'

const makeSchema = () => z.object({
  set: DietaryTagSchema.array()
}).strict();
export const ResourceCreatedietary_tagsInputObjectSchema: z.ZodType<Prisma.ResourceCreatedietary_tagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreatedietary_tagsInput>;
export const ResourceCreatedietary_tagsInputObjectZodSchema = makeSchema();
