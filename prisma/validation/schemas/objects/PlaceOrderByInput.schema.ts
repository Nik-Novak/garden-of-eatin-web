import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PointOrderByInputObjectSchema as PointOrderByInputObjectSchema } from './PointOrderByInput.schema'

const makeSchema = () => z.object({
  address: SortOrderSchema.optional(),
  location: z.lazy(() => PointOrderByInputObjectSchema).optional()
}).strict();
export const PlaceOrderByInputObjectSchema: z.ZodType<Prisma.PlaceOrderByInput> = makeSchema() as unknown as z.ZodType<Prisma.PlaceOrderByInput>;
export const PlaceOrderByInputObjectZodSchema = makeSchema();
