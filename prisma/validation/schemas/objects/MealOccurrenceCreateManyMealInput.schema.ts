import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  start: z.coerce.date(),
  end: z.coerce.date(),
  timezone: z.string(),
  location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)])
}).strict();
export const MealOccurrenceCreateManyMealInputObjectSchema: z.ZodType<Prisma.MealOccurrenceCreateManyMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceCreateManyMealInput>;
export const MealOccurrenceCreateManyMealInputObjectZodSchema = makeSchema();
