import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitWhereUniqueInputObjectSchema as MealSearchHitWhereUniqueInputObjectSchema } from './MealSearchHitWhereUniqueInput.schema';
import { MealSearchHitCreateWithoutMealInputObjectSchema as MealSearchHitCreateWithoutMealInputObjectSchema } from './MealSearchHitCreateWithoutMealInput.schema';
import { MealSearchHitUncheckedCreateWithoutMealInputObjectSchema as MealSearchHitUncheckedCreateWithoutMealInputObjectSchema } from './MealSearchHitUncheckedCreateWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MealSearchHitCreateWithoutMealInputObjectSchema), z.lazy(() => MealSearchHitUncheckedCreateWithoutMealInputObjectSchema)])
}).strict();
export const MealSearchHitCreateOrConnectWithoutMealInputObjectSchema: z.ZodType<Prisma.MealSearchHitCreateOrConnectWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitCreateOrConnectWithoutMealInput>;
export const MealSearchHitCreateOrConnectWithoutMealInputObjectZodSchema = makeSchema();
