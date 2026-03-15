import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealUpdateWithoutMeal_interactionsInputObjectSchema as MealUpdateWithoutMeal_interactionsInputObjectSchema } from './MealUpdateWithoutMeal_interactionsInput.schema';
import { MealUncheckedUpdateWithoutMeal_interactionsInputObjectSchema as MealUncheckedUpdateWithoutMeal_interactionsInputObjectSchema } from './MealUncheckedUpdateWithoutMeal_interactionsInput.schema';
import { MealCreateWithoutMeal_interactionsInputObjectSchema as MealCreateWithoutMeal_interactionsInputObjectSchema } from './MealCreateWithoutMeal_interactionsInput.schema';
import { MealUncheckedCreateWithoutMeal_interactionsInputObjectSchema as MealUncheckedCreateWithoutMeal_interactionsInputObjectSchema } from './MealUncheckedCreateWithoutMeal_interactionsInput.schema';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MealUpdateWithoutMeal_interactionsInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutMeal_interactionsInputObjectSchema)]),
  create: z.union([z.lazy(() => MealCreateWithoutMeal_interactionsInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutMeal_interactionsInputObjectSchema)]),
  where: z.lazy(() => MealWhereInputObjectSchema).optional()
}).strict();
export const MealUpsertWithoutMeal_interactionsInputObjectSchema: z.ZodType<Prisma.MealUpsertWithoutMeal_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpsertWithoutMeal_interactionsInput>;
export const MealUpsertWithoutMeal_interactionsInputObjectZodSchema = makeSchema();
