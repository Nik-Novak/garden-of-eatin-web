import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchCreateManyDeviceInputObjectSchema as MealOccurrenceSearchCreateManyDeviceInputObjectSchema } from './MealOccurrenceSearchCreateManyDeviceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MealOccurrenceSearchCreateManyDeviceInputObjectSchema), z.lazy(() => MealOccurrenceSearchCreateManyDeviceInputObjectSchema).array()])
}).strict();
export const MealOccurrenceSearchCreateManyDeviceInputEnvelopeObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchCreateManyDeviceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchCreateManyDeviceInputEnvelope>;
export const MealOccurrenceSearchCreateManyDeviceInputEnvelopeObjectZodSchema = makeSchema();
