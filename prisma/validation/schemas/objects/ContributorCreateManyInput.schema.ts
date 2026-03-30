import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  firstName: z.string(),
  defaultImage: z.string(),
  hoverImage: z.string(),
  order: z.number().int().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const ContributorCreateManyInputObjectSchema: z.ZodType<Prisma.ContributorCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ContributorCreateManyInput>;
export const ContributorCreateManyInputObjectZodSchema = makeSchema();
