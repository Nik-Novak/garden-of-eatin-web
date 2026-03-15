import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitWhereUniqueInputObjectSchema as MealSearchHitWhereUniqueInputObjectSchema } from './MealSearchHitWhereUniqueInput.schema';
import { MealSearchHitUpdateWithoutSearchInputObjectSchema as MealSearchHitUpdateWithoutSearchInputObjectSchema } from './MealSearchHitUpdateWithoutSearchInput.schema';
import { MealSearchHitUncheckedUpdateWithoutSearchInputObjectSchema as MealSearchHitUncheckedUpdateWithoutSearchInputObjectSchema } from './MealSearchHitUncheckedUpdateWithoutSearchInput.schema';
import { MealSearchHitCreateWithoutSearchInputObjectSchema as MealSearchHitCreateWithoutSearchInputObjectSchema } from './MealSearchHitCreateWithoutSearchInput.schema';
import { MealSearchHitUncheckedCreateWithoutSearchInputObjectSchema as MealSearchHitUncheckedCreateWithoutSearchInputObjectSchema } from './MealSearchHitUncheckedCreateWithoutSearchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MealSearchHitUpdateWithoutSearchInputObjectSchema), z.lazy(() => MealSearchHitUncheckedUpdateWithoutSearchInputObjectSchema)]),
  create: z.union([z.lazy(() => MealSearchHitCreateWithoutSearchInputObjectSchema), z.lazy(() => MealSearchHitUncheckedCreateWithoutSearchInputObjectSchema)])
}).strict();
export const MealSearchHitUpsertWithWhereUniqueWithoutSearchInputObjectSchema: z.ZodType<Prisma.MealSearchHitUpsertWithWhereUniqueWithoutSearchInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitUpsertWithWhereUniqueWithoutSearchInput>;
export const MealSearchHitUpsertWithWhereUniqueWithoutSearchInputObjectZodSchema = makeSchema();
