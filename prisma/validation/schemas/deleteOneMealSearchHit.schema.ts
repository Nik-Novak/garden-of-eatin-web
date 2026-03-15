import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealSearchHitSelectObjectSchema as MealSearchHitSelectObjectSchema } from './objects/MealSearchHitSelect.schema';
import { MealSearchHitIncludeObjectSchema as MealSearchHitIncludeObjectSchema } from './objects/MealSearchHitInclude.schema';
import { MealSearchHitWhereUniqueInputObjectSchema as MealSearchHitWhereUniqueInputObjectSchema } from './objects/MealSearchHitWhereUniqueInput.schema';

export const MealSearchHitDeleteOneSchema: z.ZodType<Prisma.MealSearchHitDeleteArgs> = z.object({ select: MealSearchHitSelectObjectSchema.optional(), include: MealSearchHitIncludeObjectSchema.optional(), where: MealSearchHitWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MealSearchHitDeleteArgs>;

export const MealSearchHitDeleteOneZodSchema = z.object({ select: MealSearchHitSelectObjectSchema.optional(), include: MealSearchHitIncludeObjectSchema.optional(), where: MealSearchHitWhereUniqueInputObjectSchema }).strict();