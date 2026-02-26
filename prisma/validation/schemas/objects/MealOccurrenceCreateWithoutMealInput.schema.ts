import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  start: z.coerce.date(),
  end: z.coerce.date(),
  timezone: z.string(),
  location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)])
}).strict();
export const MealOccurrenceCreateWithoutMealInputObjectSchema: z.ZodType<Prisma.MealOccurrenceCreateWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceCreateWithoutMealInput>;
export const MealOccurrenceCreateWithoutMealInputObjectZodSchema = makeSchema();
