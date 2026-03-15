import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCreateWithoutMeal_search_hitsInputObjectSchema as MealCreateWithoutMeal_search_hitsInputObjectSchema } from './MealCreateWithoutMeal_search_hitsInput.schema';
import { MealUncheckedCreateWithoutMeal_search_hitsInputObjectSchema as MealUncheckedCreateWithoutMeal_search_hitsInputObjectSchema } from './MealUncheckedCreateWithoutMeal_search_hitsInput.schema';
import { MealCreateOrConnectWithoutMeal_search_hitsInputObjectSchema as MealCreateOrConnectWithoutMeal_search_hitsInputObjectSchema } from './MealCreateOrConnectWithoutMeal_search_hitsInput.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealCreateWithoutMeal_search_hitsInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutMeal_search_hitsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MealCreateOrConnectWithoutMeal_search_hitsInputObjectSchema).optional(),
  connect: z.lazy(() => MealWhereUniqueInputObjectSchema).optional()
}).strict();
export const MealCreateNestedOneWithoutMeal_search_hitsInputObjectSchema: z.ZodType<Prisma.MealCreateNestedOneWithoutMeal_search_hitsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreateNestedOneWithoutMeal_search_hitsInput>;
export const MealCreateNestedOneWithoutMeal_search_hitsInputObjectZodSchema = makeSchema();
