import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitScalarWhereInputObjectSchema as MealSearchHitScalarWhereInputObjectSchema } from './MealSearchHitScalarWhereInput.schema';
import { MealSearchHitUpdateManyMutationInputObjectSchema as MealSearchHitUpdateManyMutationInputObjectSchema } from './MealSearchHitUpdateManyMutationInput.schema';
import { MealSearchHitUncheckedUpdateManyWithoutSearchInputObjectSchema as MealSearchHitUncheckedUpdateManyWithoutSearchInputObjectSchema } from './MealSearchHitUncheckedUpdateManyWithoutSearchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealSearchHitScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MealSearchHitUpdateManyMutationInputObjectSchema), z.lazy(() => MealSearchHitUncheckedUpdateManyWithoutSearchInputObjectSchema)])
}).strict();
export const MealSearchHitUpdateManyWithWhereWithoutSearchInputObjectSchema: z.ZodType<Prisma.MealSearchHitUpdateManyWithWhereWithoutSearchInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitUpdateManyWithWhereWithoutSearchInput>;
export const MealSearchHitUpdateManyWithWhereWithoutSearchInputObjectZodSchema = makeSchema();
