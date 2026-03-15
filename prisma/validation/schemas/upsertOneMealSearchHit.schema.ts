import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealSearchHitSelectObjectSchema as MealSearchHitSelectObjectSchema } from './objects/MealSearchHitSelect.schema';
import { MealSearchHitIncludeObjectSchema as MealSearchHitIncludeObjectSchema } from './objects/MealSearchHitInclude.schema';
import { MealSearchHitWhereUniqueInputObjectSchema as MealSearchHitWhereUniqueInputObjectSchema } from './objects/MealSearchHitWhereUniqueInput.schema';
import { MealSearchHitCreateInputObjectSchema as MealSearchHitCreateInputObjectSchema } from './objects/MealSearchHitCreateInput.schema';
import { MealSearchHitUncheckedCreateInputObjectSchema as MealSearchHitUncheckedCreateInputObjectSchema } from './objects/MealSearchHitUncheckedCreateInput.schema';
import { MealSearchHitUpdateInputObjectSchema as MealSearchHitUpdateInputObjectSchema } from './objects/MealSearchHitUpdateInput.schema';
import { MealSearchHitUncheckedUpdateInputObjectSchema as MealSearchHitUncheckedUpdateInputObjectSchema } from './objects/MealSearchHitUncheckedUpdateInput.schema';

export const MealSearchHitUpsertOneSchema: z.ZodType<Prisma.MealSearchHitUpsertArgs> = z.object({ select: MealSearchHitSelectObjectSchema.optional(), include: MealSearchHitIncludeObjectSchema.optional(), where: MealSearchHitWhereUniqueInputObjectSchema, create: z.union([ MealSearchHitCreateInputObjectSchema, MealSearchHitUncheckedCreateInputObjectSchema ]), update: z.union([ MealSearchHitUpdateInputObjectSchema, MealSearchHitUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MealSearchHitUpsertArgs>;

export const MealSearchHitUpsertOneZodSchema = z.object({ select: MealSearchHitSelectObjectSchema.optional(), include: MealSearchHitIncludeObjectSchema.optional(), where: MealSearchHitWhereUniqueInputObjectSchema, create: z.union([ MealSearchHitCreateInputObjectSchema, MealSearchHitUncheckedCreateInputObjectSchema ]), update: z.union([ MealSearchHitUpdateInputObjectSchema, MealSearchHitUncheckedUpdateInputObjectSchema ]) }).strict();