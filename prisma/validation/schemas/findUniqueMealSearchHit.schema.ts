import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealSearchHitSelectObjectSchema as MealSearchHitSelectObjectSchema } from './objects/MealSearchHitSelect.schema';
import { MealSearchHitIncludeObjectSchema as MealSearchHitIncludeObjectSchema } from './objects/MealSearchHitInclude.schema';
import { MealSearchHitWhereUniqueInputObjectSchema as MealSearchHitWhereUniqueInputObjectSchema } from './objects/MealSearchHitWhereUniqueInput.schema';

export const MealSearchHitFindUniqueSchema: z.ZodType<Prisma.MealSearchHitFindUniqueArgs> = z.object({ select: MealSearchHitSelectObjectSchema.optional(), include: MealSearchHitIncludeObjectSchema.optional(), where: MealSearchHitWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MealSearchHitFindUniqueArgs>;

export const MealSearchHitFindUniqueZodSchema = z.object({ select: MealSearchHitSelectObjectSchema.optional(), include: MealSearchHitIncludeObjectSchema.optional(), where: MealSearchHitWhereUniqueInputObjectSchema }).strict();