import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealCreateWithoutMeal_interactionsInputObjectSchema as MealCreateWithoutMeal_interactionsInputObjectSchema } from './MealCreateWithoutMeal_interactionsInput.schema';
import { MealUncheckedCreateWithoutMeal_interactionsInputObjectSchema as MealUncheckedCreateWithoutMeal_interactionsInputObjectSchema } from './MealUncheckedCreateWithoutMeal_interactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MealCreateWithoutMeal_interactionsInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutMeal_interactionsInputObjectSchema)])
}).strict();
export const MealCreateOrConnectWithoutMeal_interactionsInputObjectSchema: z.ZodType<Prisma.MealCreateOrConnectWithoutMeal_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreateOrConnectWithoutMeal_interactionsInput>;
export const MealCreateOrConnectWithoutMeal_interactionsInputObjectZodSchema = makeSchema();
