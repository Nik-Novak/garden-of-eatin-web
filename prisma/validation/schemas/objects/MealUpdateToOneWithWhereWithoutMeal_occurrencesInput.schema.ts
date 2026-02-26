import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema';
import { MealUpdateWithoutMeal_occurrencesInputObjectSchema as MealUpdateWithoutMeal_occurrencesInputObjectSchema } from './MealUpdateWithoutMeal_occurrencesInput.schema';
import { MealUncheckedUpdateWithoutMeal_occurrencesInputObjectSchema as MealUncheckedUpdateWithoutMeal_occurrencesInputObjectSchema } from './MealUncheckedUpdateWithoutMeal_occurrencesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MealUpdateWithoutMeal_occurrencesInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutMeal_occurrencesInputObjectSchema)])
}).strict();
export const MealUpdateToOneWithWhereWithoutMeal_occurrencesInputObjectSchema: z.ZodType<Prisma.MealUpdateToOneWithWhereWithoutMeal_occurrencesInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdateToOneWithWhereWithoutMeal_occurrencesInput>;
export const MealUpdateToOneWithWhereWithoutMeal_occurrencesInputObjectZodSchema = makeSchema();
