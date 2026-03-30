import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  firstName: z.boolean().optional(),
  defaultImage: z.boolean().optional(),
  hoverImage: z.boolean().optional(),
  order: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional()
}).strict();
export const ContributorSelectObjectSchema: z.ZodType<Prisma.ContributorSelect> = makeSchema() as unknown as z.ZodType<Prisma.ContributorSelect>;
export const ContributorSelectObjectZodSchema = makeSchema();
