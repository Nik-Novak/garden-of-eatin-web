import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCreateWithoutMeal_interactionsInputObjectSchema as MealCreateWithoutMeal_interactionsInputObjectSchema } from './MealCreateWithoutMeal_interactionsInput.schema';
import { MealUncheckedCreateWithoutMeal_interactionsInputObjectSchema as MealUncheckedCreateWithoutMeal_interactionsInputObjectSchema } from './MealUncheckedCreateWithoutMeal_interactionsInput.schema';
import { MealCreateOrConnectWithoutMeal_interactionsInputObjectSchema as MealCreateOrConnectWithoutMeal_interactionsInputObjectSchema } from './MealCreateOrConnectWithoutMeal_interactionsInput.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealCreateWithoutMeal_interactionsInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutMeal_interactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MealCreateOrConnectWithoutMeal_interactionsInputObjectSchema).optional(),
  connect: z.lazy(() => MealWhereUniqueInputObjectSchema).optional()
}).strict();
export const MealCreateNestedOneWithoutMeal_interactionsInputObjectSchema: z.ZodType<Prisma.MealCreateNestedOneWithoutMeal_interactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreateNestedOneWithoutMeal_interactionsInput>;
export const MealCreateNestedOneWithoutMeal_interactionsInputObjectZodSchema = makeSchema();
