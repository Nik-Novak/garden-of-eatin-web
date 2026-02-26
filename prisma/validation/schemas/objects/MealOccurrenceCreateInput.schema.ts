import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { MealCreateNestedOneWithoutMeal_occurrencesInputObjectSchema as MealCreateNestedOneWithoutMeal_occurrencesInputObjectSchema } from './MealCreateNestedOneWithoutMeal_occurrencesInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  start: z.coerce.date(),
  end: z.coerce.date(),
  timezone: z.string(),
  location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  meal: z.lazy(() => MealCreateNestedOneWithoutMeal_occurrencesInputObjectSchema)
}).strict();
export const MealOccurrenceCreateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceCreateInput>;
export const MealOccurrenceCreateInputObjectZodSchema = makeSchema();
