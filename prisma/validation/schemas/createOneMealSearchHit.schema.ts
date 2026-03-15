import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealSearchHitSelectObjectSchema as MealSearchHitSelectObjectSchema } from './objects/MealSearchHitSelect.schema';
import { MealSearchHitIncludeObjectSchema as MealSearchHitIncludeObjectSchema } from './objects/MealSearchHitInclude.schema';
import { MealSearchHitCreateInputObjectSchema as MealSearchHitCreateInputObjectSchema } from './objects/MealSearchHitCreateInput.schema';
import { MealSearchHitUncheckedCreateInputObjectSchema as MealSearchHitUncheckedCreateInputObjectSchema } from './objects/MealSearchHitUncheckedCreateInput.schema';

export const MealSearchHitCreateOneSchema: z.ZodType<Prisma.MealSearchHitCreateArgs> = z.object({ select: MealSearchHitSelectObjectSchema.optional(), include: MealSearchHitIncludeObjectSchema.optional(), data: z.union([MealSearchHitCreateInputObjectSchema, MealSearchHitUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MealSearchHitCreateArgs>;

export const MealSearchHitCreateOneZodSchema = z.object({ select: MealSearchHitSelectObjectSchema.optional(), include: MealSearchHitIncludeObjectSchema.optional(), data: z.union([MealSearchHitCreateInputObjectSchema, MealSearchHitUncheckedCreateInputObjectSchema]) }).strict();