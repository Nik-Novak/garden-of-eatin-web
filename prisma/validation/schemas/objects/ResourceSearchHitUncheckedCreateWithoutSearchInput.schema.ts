import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  resource_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const ResourceSearchHitUncheckedCreateWithoutSearchInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitUncheckedCreateWithoutSearchInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitUncheckedCreateWithoutSearchInput>;
export const ResourceSearchHitUncheckedCreateWithoutSearchInputObjectZodSchema = makeSchema();
