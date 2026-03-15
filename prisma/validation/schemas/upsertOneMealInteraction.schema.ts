import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealInteractionSelectObjectSchema as MealInteractionSelectObjectSchema } from './objects/MealInteractionSelect.schema';
import { MealInteractionIncludeObjectSchema as MealInteractionIncludeObjectSchema } from './objects/MealInteractionInclude.schema';
import { MealInteractionWhereUniqueInputObjectSchema as MealInteractionWhereUniqueInputObjectSchema } from './objects/MealInteractionWhereUniqueInput.schema';
import { MealInteractionCreateInputObjectSchema as MealInteractionCreateInputObjectSchema } from './objects/MealInteractionCreateInput.schema';
import { MealInteractionUncheckedCreateInputObjectSchema as MealInteractionUncheckedCreateInputObjectSchema } from './objects/MealInteractionUncheckedCreateInput.schema';
import { MealInteractionUpdateInputObjectSchema as MealInteractionUpdateInputObjectSchema } from './objects/MealInteractionUpdateInput.schema';
import { MealInteractionUncheckedUpdateInputObjectSchema as MealInteractionUncheckedUpdateInputObjectSchema } from './objects/MealInteractionUncheckedUpdateInput.schema';

export const MealInteractionUpsertOneSchema: z.ZodType<Prisma.MealInteractionUpsertArgs> = z.object({ select: MealInteractionSelectObjectSchema.optional(), include: MealInteractionIncludeObjectSchema.optional(), where: MealInteractionWhereUniqueInputObjectSchema, create: z.union([ MealInteractionCreateInputObjectSchema, MealInteractionUncheckedCreateInputObjectSchema ]), update: z.union([ MealInteractionUpdateInputObjectSchema, MealInteractionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MealInteractionUpsertArgs>;

export const MealInteractionUpsertOneZodSchema = z.object({ select: MealInteractionSelectObjectSchema.optional(), include: MealInteractionIncludeObjectSchema.optional(), where: MealInteractionWhereUniqueInputObjectSchema, create: z.union([ MealInteractionCreateInputObjectSchema, MealInteractionUncheckedCreateInputObjectSchema ]), update: z.union([ MealInteractionUpdateInputObjectSchema, MealInteractionUncheckedUpdateInputObjectSchema ]) }).strict();