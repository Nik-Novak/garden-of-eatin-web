import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema';
import { MealUpdateWithoutMeal_interactionsInputObjectSchema as MealUpdateWithoutMeal_interactionsInputObjectSchema } from './MealUpdateWithoutMeal_interactionsInput.schema';
import { MealUncheckedUpdateWithoutMeal_interactionsInputObjectSchema as MealUncheckedUpdateWithoutMeal_interactionsInputObjectSchema } from './MealUncheckedUpdateWithoutMeal_interactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MealUpdateWithoutMeal_interactionsInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutMeal_interactionsInputObjectSchema)])
}).strict();
export const MealUpdateToOneWithWhereWithoutMeal_interactionsInputObjectSchema: z.ZodType<Prisma.MealUpdateToOneWithWhereWithoutMeal_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdateToOneWithWhereWithoutMeal_interactionsInput>;
export const MealUpdateToOneWithWhereWithoutMeal_interactionsInputObjectZodSchema = makeSchema();
