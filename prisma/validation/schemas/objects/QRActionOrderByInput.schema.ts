import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  type: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  payload: SortOrderSchema.optional()
}).strict();
export const QRActionOrderByInputObjectSchema: z.ZodType<Prisma.QRActionOrderByInput> = makeSchema() as unknown as z.ZodType<Prisma.QRActionOrderByInput>;
export const QRActionOrderByInputObjectZodSchema = makeSchema();
