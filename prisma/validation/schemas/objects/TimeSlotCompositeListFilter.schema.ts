import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TimeSlotObjectEqualityInputObjectSchema as TimeSlotObjectEqualityInputObjectSchema } from './TimeSlotObjectEqualityInput.schema';
import { TimeSlotWhereInputObjectSchema as TimeSlotWhereInputObjectSchema } from './TimeSlotWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => TimeSlotObjectEqualityInputObjectSchema).array().optional(),
  every: z.lazy(() => TimeSlotWhereInputObjectSchema).optional(),
  some: z.lazy(() => TimeSlotWhereInputObjectSchema).optional(),
  none: z.lazy(() => TimeSlotWhereInputObjectSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();
export const TimeSlotCompositeListFilterObjectSchema: z.ZodType<Prisma.TimeSlotCompositeListFilter> = makeSchema() as unknown as z.ZodType<Prisma.TimeSlotCompositeListFilter>;
export const TimeSlotCompositeListFilterObjectZodSchema = makeSchema();
