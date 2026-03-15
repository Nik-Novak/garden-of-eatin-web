import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCreateWithoutMeal_search_hitsInputObjectSchema as MealCreateWithoutMeal_search_hitsInputObjectSchema } from './MealCreateWithoutMeal_search_hitsInput.schema';
import { MealUncheckedCreateWithoutMeal_search_hitsInputObjectSchema as MealUncheckedCreateWithoutMeal_search_hitsInputObjectSchema } from './MealUncheckedCreateWithoutMeal_search_hitsInput.schema';
import { MealCreateOrConnectWithoutMeal_search_hitsInputObjectSchema as MealCreateOrConnectWithoutMeal_search_hitsInputObjectSchema } from './MealCreateOrConnectWithoutMeal_search_hitsInput.schema';
import { MealUpsertWithoutMeal_search_hitsInputObjectSchema as MealUpsertWithoutMeal_search_hitsInputObjectSchema } from './MealUpsertWithoutMeal_search_hitsInput.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealUpdateToOneWithWhereWithoutMeal_search_hitsInputObjectSchema as MealUpdateToOneWithWhereWithoutMeal_search_hitsInputObjectSchema } from './MealUpdateToOneWithWhereWithoutMeal_search_hitsInput.schema';
import { MealUpdateWithoutMeal_search_hitsInputObjectSchema as MealUpdateWithoutMeal_search_hitsInputObjectSchema } from './MealUpdateWithoutMeal_search_hitsInput.schema';
import { MealUncheckedUpdateWithoutMeal_search_hitsInputObjectSchema as MealUncheckedUpdateWithoutMeal_search_hitsInputObjectSchema } from './MealUncheckedUpdateWithoutMeal_search_hitsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealCreateWithoutMeal_search_hitsInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutMeal_search_hitsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MealCreateOrConnectWithoutMeal_search_hitsInputObjectSchema).optional(),
  upsert: z.lazy(() => MealUpsertWithoutMeal_search_hitsInputObjectSchema).optional(),
  connect: z.lazy(() => MealWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MealUpdateToOneWithWhereWithoutMeal_search_hitsInputObjectSchema), z.lazy(() => MealUpdateWithoutMeal_search_hitsInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutMeal_search_hitsInputObjectSchema)]).optional()
}).strict();
export const MealUpdateOneRequiredWithoutMeal_search_hitsNestedInputObjectSchema: z.ZodType<Prisma.MealUpdateOneRequiredWithoutMeal_search_hitsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdateOneRequiredWithoutMeal_search_hitsNestedInput>;
export const MealUpdateOneRequiredWithoutMeal_search_hitsNestedInputObjectZodSchema = makeSchema();
