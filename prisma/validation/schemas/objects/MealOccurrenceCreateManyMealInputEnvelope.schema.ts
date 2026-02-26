import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealOccurrenceCreateManyMealInputObjectSchema as MealOccurrenceCreateManyMealInputObjectSchema } from './MealOccurrenceCreateManyMealInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MealOccurrenceCreateManyMealInputObjectSchema), z.lazy(() => MealOccurrenceCreateManyMealInputObjectSchema).array()])
}).strict();
export const MealOccurrenceCreateManyMealInputEnvelopeObjectSchema: z.ZodType<Prisma.MealOccurrenceCreateManyMealInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceCreateManyMealInputEnvelope>;
export const MealOccurrenceCreateManyMealInputEnvelopeObjectZodSchema = makeSchema();
