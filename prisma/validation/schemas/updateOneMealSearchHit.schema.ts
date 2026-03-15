import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealSearchHitSelectObjectSchema as MealSearchHitSelectObjectSchema } from './objects/MealSearchHitSelect.schema';
import { MealSearchHitIncludeObjectSchema as MealSearchHitIncludeObjectSchema } from './objects/MealSearchHitInclude.schema';
import { MealSearchHitUpdateInputObjectSchema as MealSearchHitUpdateInputObjectSchema } from './objects/MealSearchHitUpdateInput.schema';
import { MealSearchHitUncheckedUpdateInputObjectSchema as MealSearchHitUncheckedUpdateInputObjectSchema } from './objects/MealSearchHitUncheckedUpdateInput.schema';
import { MealSearchHitWhereUniqueInputObjectSchema as MealSearchHitWhereUniqueInputObjectSchema } from './objects/MealSearchHitWhereUniqueInput.schema';

export const MealSearchHitUpdateOneSchema: z.ZodType<Prisma.MealSearchHitUpdateArgs> = z.object({ select: MealSearchHitSelectObjectSchema.optional(), include: MealSearchHitIncludeObjectSchema.optional(), data: z.union([MealSearchHitUpdateInputObjectSchema, MealSearchHitUncheckedUpdateInputObjectSchema]), where: MealSearchHitWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MealSearchHitUpdateArgs>;

export const MealSearchHitUpdateOneZodSchema = z.object({ select: MealSearchHitSelectObjectSchema.optional(), include: MealSearchHitIncludeObjectSchema.optional(), data: z.union([MealSearchHitUpdateInputObjectSchema, MealSearchHitUncheckedUpdateInputObjectSchema]), where: MealSearchHitWhereUniqueInputObjectSchema }).strict();