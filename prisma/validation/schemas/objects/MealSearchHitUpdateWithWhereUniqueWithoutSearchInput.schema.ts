import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitWhereUniqueInputObjectSchema as MealSearchHitWhereUniqueInputObjectSchema } from './MealSearchHitWhereUniqueInput.schema';
import { MealSearchHitUpdateWithoutSearchInputObjectSchema as MealSearchHitUpdateWithoutSearchInputObjectSchema } from './MealSearchHitUpdateWithoutSearchInput.schema';
import { MealSearchHitUncheckedUpdateWithoutSearchInputObjectSchema as MealSearchHitUncheckedUpdateWithoutSearchInputObjectSchema } from './MealSearchHitUncheckedUpdateWithoutSearchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MealSearchHitUpdateWithoutSearchInputObjectSchema), z.lazy(() => MealSearchHitUncheckedUpdateWithoutSearchInputObjectSchema)])
}).strict();
export const MealSearchHitUpdateWithWhereUniqueWithoutSearchInputObjectSchema: z.ZodType<Prisma.MealSearchHitUpdateWithWhereUniqueWithoutSearchInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitUpdateWithWhereUniqueWithoutSearchInput>;
export const MealSearchHitUpdateWithWhereUniqueWithoutSearchInputObjectZodSchema = makeSchema();
