import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealInteractionSelectObjectSchema as MealInteractionSelectObjectSchema } from './objects/MealInteractionSelect.schema';
import { MealInteractionIncludeObjectSchema as MealInteractionIncludeObjectSchema } from './objects/MealInteractionInclude.schema';
import { MealInteractionUpdateInputObjectSchema as MealInteractionUpdateInputObjectSchema } from './objects/MealInteractionUpdateInput.schema';
import { MealInteractionUncheckedUpdateInputObjectSchema as MealInteractionUncheckedUpdateInputObjectSchema } from './objects/MealInteractionUncheckedUpdateInput.schema';
import { MealInteractionWhereUniqueInputObjectSchema as MealInteractionWhereUniqueInputObjectSchema } from './objects/MealInteractionWhereUniqueInput.schema';

export const MealInteractionUpdateOneSchema: z.ZodType<Prisma.MealInteractionUpdateArgs> = z.object({ select: MealInteractionSelectObjectSchema.optional(), include: MealInteractionIncludeObjectSchema.optional(), data: z.union([MealInteractionUpdateInputObjectSchema, MealInteractionUncheckedUpdateInputObjectSchema]), where: MealInteractionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MealInteractionUpdateArgs>;

export const MealInteractionUpdateOneZodSchema = z.object({ select: MealInteractionSelectObjectSchema.optional(), include: MealInteractionIncludeObjectSchema.optional(), data: z.union([MealInteractionUpdateInputObjectSchema, MealInteractionUncheckedUpdateInputObjectSchema]), where: MealInteractionWhereUniqueInputObjectSchema }).strict();