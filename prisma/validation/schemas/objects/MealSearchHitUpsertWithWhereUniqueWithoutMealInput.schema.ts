import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitWhereUniqueInputObjectSchema as MealSearchHitWhereUniqueInputObjectSchema } from './MealSearchHitWhereUniqueInput.schema';
import { MealSearchHitUpdateWithoutMealInputObjectSchema as MealSearchHitUpdateWithoutMealInputObjectSchema } from './MealSearchHitUpdateWithoutMealInput.schema';
import { MealSearchHitUncheckedUpdateWithoutMealInputObjectSchema as MealSearchHitUncheckedUpdateWithoutMealInputObjectSchema } from './MealSearchHitUncheckedUpdateWithoutMealInput.schema';
import { MealSearchHitCreateWithoutMealInputObjectSchema as MealSearchHitCreateWithoutMealInputObjectSchema } from './MealSearchHitCreateWithoutMealInput.schema';
import { MealSearchHitUncheckedCreateWithoutMealInputObjectSchema as MealSearchHitUncheckedCreateWithoutMealInputObjectSchema } from './MealSearchHitUncheckedCreateWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MealSearchHitUpdateWithoutMealInputObjectSchema), z.lazy(() => MealSearchHitUncheckedUpdateWithoutMealInputObjectSchema)]),
  create: z.union([z.lazy(() => MealSearchHitCreateWithoutMealInputObjectSchema), z.lazy(() => MealSearchHitUncheckedCreateWithoutMealInputObjectSchema)])
}).strict();
export const MealSearchHitUpsertWithWhereUniqueWithoutMealInputObjectSchema: z.ZodType<Prisma.MealSearchHitUpsertWithWhereUniqueWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitUpsertWithWhereUniqueWithoutMealInput>;
export const MealSearchHitUpsertWithWhereUniqueWithoutMealInputObjectZodSchema = makeSchema();
