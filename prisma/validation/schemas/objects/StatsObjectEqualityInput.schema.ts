import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  views: z.number().int(),
  navigations: z.number().int()
}).strict();
export const StatsObjectEqualityInputObjectSchema: z.ZodType<Prisma.StatsObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.StatsObjectEqualityInput>;
export const StatsObjectEqualityInputObjectZodSchema = makeSchema();
