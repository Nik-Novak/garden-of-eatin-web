import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCreateManySubmitterInputObjectSchema as MealCreateManySubmitterInputObjectSchema } from './MealCreateManySubmitterInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MealCreateManySubmitterInputObjectSchema), z.lazy(() => MealCreateManySubmitterInputObjectSchema).array()])
}).strict();
export const MealCreateManySubmitterInputEnvelopeObjectSchema: z.ZodType<Prisma.MealCreateManySubmitterInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MealCreateManySubmitterInputEnvelope>;
export const MealCreateManySubmitterInputEnvelopeObjectZodSchema = makeSchema();
