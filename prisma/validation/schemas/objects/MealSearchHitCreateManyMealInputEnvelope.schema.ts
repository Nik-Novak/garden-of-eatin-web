import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitCreateManyMealInputObjectSchema as MealSearchHitCreateManyMealInputObjectSchema } from './MealSearchHitCreateManyMealInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MealSearchHitCreateManyMealInputObjectSchema), z.lazy(() => MealSearchHitCreateManyMealInputObjectSchema).array()])
}).strict();
export const MealSearchHitCreateManyMealInputEnvelopeObjectSchema: z.ZodType<Prisma.MealSearchHitCreateManyMealInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitCreateManyMealInputEnvelope>;
export const MealSearchHitCreateManyMealInputEnvelopeObjectZodSchema = makeSchema();
