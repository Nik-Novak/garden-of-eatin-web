import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitWhereUniqueInputObjectSchema as MealSearchHitWhereUniqueInputObjectSchema } from './MealSearchHitWhereUniqueInput.schema';
import { MealSearchHitCreateWithoutSearchInputObjectSchema as MealSearchHitCreateWithoutSearchInputObjectSchema } from './MealSearchHitCreateWithoutSearchInput.schema';
import { MealSearchHitUncheckedCreateWithoutSearchInputObjectSchema as MealSearchHitUncheckedCreateWithoutSearchInputObjectSchema } from './MealSearchHitUncheckedCreateWithoutSearchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealSearchHitWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MealSearchHitCreateWithoutSearchInputObjectSchema), z.lazy(() => MealSearchHitUncheckedCreateWithoutSearchInputObjectSchema)])
}).strict();
export const MealSearchHitCreateOrConnectWithoutSearchInputObjectSchema: z.ZodType<Prisma.MealSearchHitCreateOrConnectWithoutSearchInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitCreateOrConnectWithoutSearchInput>;
export const MealSearchHitCreateOrConnectWithoutSearchInputObjectZodSchema = makeSchema();
