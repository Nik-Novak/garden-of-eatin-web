import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCreateWithoutMeal_occurrencesInputObjectSchema as MealCreateWithoutMeal_occurrencesInputObjectSchema } from './MealCreateWithoutMeal_occurrencesInput.schema';
import { MealUncheckedCreateWithoutMeal_occurrencesInputObjectSchema as MealUncheckedCreateWithoutMeal_occurrencesInputObjectSchema } from './MealUncheckedCreateWithoutMeal_occurrencesInput.schema';
import { MealCreateOrConnectWithoutMeal_occurrencesInputObjectSchema as MealCreateOrConnectWithoutMeal_occurrencesInputObjectSchema } from './MealCreateOrConnectWithoutMeal_occurrencesInput.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealCreateWithoutMeal_occurrencesInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutMeal_occurrencesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MealCreateOrConnectWithoutMeal_occurrencesInputObjectSchema).optional(),
  connect: z.lazy(() => MealWhereUniqueInputObjectSchema).optional()
}).strict();
export const MealCreateNestedOneWithoutMeal_occurrencesInputObjectSchema: z.ZodType<Prisma.MealCreateNestedOneWithoutMeal_occurrencesInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreateNestedOneWithoutMeal_occurrencesInput>;
export const MealCreateNestedOneWithoutMeal_occurrencesInputObjectZodSchema = makeSchema();
