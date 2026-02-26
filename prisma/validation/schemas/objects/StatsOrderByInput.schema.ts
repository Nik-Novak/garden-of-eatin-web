import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  views: SortOrderSchema.optional(),
  navigations: SortOrderSchema.optional()
}).strict();
export const StatsOrderByInputObjectSchema: z.ZodType<Prisma.StatsOrderByInput> = makeSchema() as unknown as z.ZodType<Prisma.StatsOrderByInput>;
export const StatsOrderByInputObjectZodSchema = makeSchema();
