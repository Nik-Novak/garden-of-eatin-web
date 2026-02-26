import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const mealoccurrencescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MealOccurrenceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MealOccurrenceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MealOccurrenceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MealOccurrenceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MealOccurrenceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  meal_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  start: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  end: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  timezone: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const MealOccurrenceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MealOccurrenceScalarWhereWithAggregatesInput> = mealoccurrencescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MealOccurrenceScalarWhereWithAggregatesInput>;
export const MealOccurrenceScalarWhereWithAggregatesInputObjectZodSchema = mealoccurrencescalarwherewithaggregatesinputSchema;
