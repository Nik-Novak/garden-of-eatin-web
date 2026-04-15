import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  search_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const ResourceSearchHitUncheckedCreateWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitUncheckedCreateWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitUncheckedCreateWithoutResourceInput>;
export const ResourceSearchHitUncheckedCreateWithoutResourceInputObjectZodSchema = makeSchema();
