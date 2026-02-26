import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ScheduleObjectEqualityInputObjectSchema as ScheduleObjectEqualityInputObjectSchema } from './ScheduleObjectEqualityInput.schema';
import { ScheduleWhereInputObjectSchema as ScheduleWhereInputObjectSchema } from './ScheduleWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => ScheduleObjectEqualityInputObjectSchema).optional(),
  is: z.lazy(() => ScheduleWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ScheduleWhereInputObjectSchema).optional()
}).strict();
export const ScheduleCompositeFilterObjectSchema: z.ZodType<Prisma.ScheduleCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.ScheduleCompositeFilter>;
export const ScheduleCompositeFilterObjectZodSchema = makeSchema();
