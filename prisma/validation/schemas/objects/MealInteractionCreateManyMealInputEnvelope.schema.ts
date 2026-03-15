import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionCreateManyMealInputObjectSchema as MealInteractionCreateManyMealInputObjectSchema } from './MealInteractionCreateManyMealInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MealInteractionCreateManyMealInputObjectSchema), z.lazy(() => MealInteractionCreateManyMealInputObjectSchema).array()])
}).strict();
export const MealInteractionCreateManyMealInputEnvelopeObjectSchema: z.ZodType<Prisma.MealInteractionCreateManyMealInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionCreateManyMealInputEnvelope>;
export const MealInteractionCreateManyMealInputEnvelopeObjectZodSchema = makeSchema();
