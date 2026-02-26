import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  meal_id: z.string().max(24),
  start: z.coerce.date(),
  end: z.coerce.date(),
  timezone: z.string(),
  location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)])
}).strict();
export const MealOccurrenceUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceUncheckedCreateInput>;
export const MealOccurrenceUncheckedCreateInputObjectZodSchema = makeSchema();
