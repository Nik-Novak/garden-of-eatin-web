import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereInputObjectSchema).optional()
}).strict();
export const DeviceCountOutputTypeCountSubmittedMealsArgsObjectSchema = makeSchema();
export const DeviceCountOutputTypeCountSubmittedMealsArgsObjectZodSchema = makeSchema();
