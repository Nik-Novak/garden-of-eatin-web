import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  views: z.number().int(),
  navigations: z.number().int()
}).strict();
export const StatsCreateInputObjectSchema: z.ZodType<Prisma.StatsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StatsCreateInput>;
export const StatsCreateInputObjectZodSchema = makeSchema();
