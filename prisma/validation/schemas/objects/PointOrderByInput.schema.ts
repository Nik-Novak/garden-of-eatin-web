import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  type: SortOrderSchema.optional(),
  coordinates: SortOrderSchema.optional()
}).strict();
export const PointOrderByInputObjectSchema: z.ZodType<Prisma.PointOrderByInput> = makeSchema() as unknown as z.ZodType<Prisma.PointOrderByInput>;
export const PointOrderByInputObjectZodSchema = makeSchema();
