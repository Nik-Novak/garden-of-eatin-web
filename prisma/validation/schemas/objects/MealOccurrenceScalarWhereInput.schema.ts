import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const mealoccurrencescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MealOccurrenceScalarWhereInputObjectSchema), z.lazy(() => MealOccurrenceScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MealOccurrenceScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MealOccurrenceScalarWhereInputObjectSchema), z.lazy(() => MealOccurrenceScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  meal_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  start: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  end: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  timezone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const MealOccurrenceScalarWhereInputObjectSchema: z.ZodType<Prisma.MealOccurrenceScalarWhereInput> = mealoccurrencescalarwhereinputSchema as unknown as z.ZodType<Prisma.MealOccurrenceScalarWhereInput>;
export const MealOccurrenceScalarWhereInputObjectZodSchema = mealoccurrencescalarwhereinputSchema;
