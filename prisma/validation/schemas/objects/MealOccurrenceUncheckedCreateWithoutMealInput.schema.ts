import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  start: z.coerce.date(),
  end: z.coerce.date(),
  timezone: z.string(),
  location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)])
}).strict();
export const MealOccurrenceUncheckedCreateWithoutMealInputObjectSchema: z.ZodType<Prisma.MealOccurrenceUncheckedCreateWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceUncheckedCreateWithoutMealInput>;
export const MealOccurrenceUncheckedCreateWithoutMealInputObjectZodSchema = makeSchema();
