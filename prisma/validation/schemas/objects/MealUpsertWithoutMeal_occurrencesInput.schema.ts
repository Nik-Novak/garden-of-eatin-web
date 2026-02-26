import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealUpdateWithoutMeal_occurrencesInputObjectSchema as MealUpdateWithoutMeal_occurrencesInputObjectSchema } from './MealUpdateWithoutMeal_occurrencesInput.schema';
import { MealUncheckedUpdateWithoutMeal_occurrencesInputObjectSchema as MealUncheckedUpdateWithoutMeal_occurrencesInputObjectSchema } from './MealUncheckedUpdateWithoutMeal_occurrencesInput.schema';
import { MealCreateWithoutMeal_occurrencesInputObjectSchema as MealCreateWithoutMeal_occurrencesInputObjectSchema } from './MealCreateWithoutMeal_occurrencesInput.schema';
import { MealUncheckedCreateWithoutMeal_occurrencesInputObjectSchema as MealUncheckedCreateWithoutMeal_occurrencesInputObjectSchema } from './MealUncheckedCreateWithoutMeal_occurrencesInput.schema';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MealUpdateWithoutMeal_occurrencesInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutMeal_occurrencesInputObjectSchema)]),
  create: z.union([z.lazy(() => MealCreateWithoutMeal_occurrencesInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutMeal_occurrencesInputObjectSchema)]),
  where: z.lazy(() => MealWhereInputObjectSchema).optional()
}).strict();
export const MealUpsertWithoutMeal_occurrencesInputObjectSchema: z.ZodType<Prisma.MealUpsertWithoutMeal_occurrencesInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpsertWithoutMeal_occurrencesInput>;
export const MealUpsertWithoutMeal_occurrencesInputObjectZodSchema = makeSchema();
