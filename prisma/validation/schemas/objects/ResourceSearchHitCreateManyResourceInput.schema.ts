import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  search_id: z.string().max(24),
  created_at: z.coerce.date().optional()
}).strict();
export const ResourceSearchHitCreateManyResourceInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitCreateManyResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitCreateManyResourceInput>;
export const ResourceSearchHitCreateManyResourceInputObjectZodSchema = makeSchema();
