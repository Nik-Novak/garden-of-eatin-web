import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealCreateWithoutMeal_occurrencesInputObjectSchema as MealCreateWithoutMeal_occurrencesInputObjectSchema } from './MealCreateWithoutMeal_occurrencesInput.schema';
import { MealUncheckedCreateWithoutMeal_occurrencesInputObjectSchema as MealUncheckedCreateWithoutMeal_occurrencesInputObjectSchema } from './MealUncheckedCreateWithoutMeal_occurrencesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MealCreateWithoutMeal_occurrencesInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutMeal_occurrencesInputObjectSchema)])
}).strict();
export const MealCreateOrConnectWithoutMeal_occurrencesInputObjectSchema: z.ZodType<Prisma.MealCreateOrConnectWithoutMeal_occurrencesInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreateOrConnectWithoutMeal_occurrencesInput>;
export const MealCreateOrConnectWithoutMeal_occurrencesInputObjectZodSchema = makeSchema();
