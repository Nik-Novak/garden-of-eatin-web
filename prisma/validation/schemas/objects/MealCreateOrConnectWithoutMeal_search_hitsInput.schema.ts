import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealCreateWithoutMeal_search_hitsInputObjectSchema as MealCreateWithoutMeal_search_hitsInputObjectSchema } from './MealCreateWithoutMeal_search_hitsInput.schema';
import { MealUncheckedCreateWithoutMeal_search_hitsInputObjectSchema as MealUncheckedCreateWithoutMeal_search_hitsInputObjectSchema } from './MealUncheckedCreateWithoutMeal_search_hitsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MealCreateWithoutMeal_search_hitsInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutMeal_search_hitsInputObjectSchema)])
}).strict();
export const MealCreateOrConnectWithoutMeal_search_hitsInputObjectSchema: z.ZodType<Prisma.MealCreateOrConnectWithoutMeal_search_hitsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreateOrConnectWithoutMeal_search_hitsInput>;
export const MealCreateOrConnectWithoutMeal_search_hitsInputObjectZodSchema = makeSchema();
