import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionWhereInputObjectSchema as MealInteractionWhereInputObjectSchema } from './MealInteractionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealInteractionWhereInputObjectSchema).optional()
}).strict();
export const DeviceCountOutputTypeCountMealInteractionsArgsObjectSchema = makeSchema();
export const DeviceCountOutputTypeCountMealInteractionsArgsObjectZodSchema = makeSchema();
