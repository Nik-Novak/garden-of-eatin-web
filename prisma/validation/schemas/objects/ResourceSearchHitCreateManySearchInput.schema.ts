import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  resource_id: z.string().max(24),
  created_at: z.coerce.date().optional()
}).strict();
export const ResourceSearchHitCreateManySearchInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitCreateManySearchInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitCreateManySearchInput>;
export const ResourceSearchHitCreateManySearchInputObjectZodSchema = makeSchema();
