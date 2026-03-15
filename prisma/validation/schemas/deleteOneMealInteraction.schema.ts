import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealInteractionSelectObjectSchema as MealInteractionSelectObjectSchema } from './objects/MealInteractionSelect.schema';
import { MealInteractionIncludeObjectSchema as MealInteractionIncludeObjectSchema } from './objects/MealInteractionInclude.schema';
import { MealInteractionWhereUniqueInputObjectSchema as MealInteractionWhereUniqueInputObjectSchema } from './objects/MealInteractionWhereUniqueInput.schema';

export const MealInteractionDeleteOneSchema: z.ZodType<Prisma.MealInteractionDeleteArgs> = z.object({ select: MealInteractionSelectObjectSchema.optional(), include: MealInteractionIncludeObjectSchema.optional(), where: MealInteractionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MealInteractionDeleteArgs>;

export const MealInteractionDeleteOneZodSchema = z.object({ select: MealInteractionSelectObjectSchema.optional(), include: MealInteractionIncludeObjectSchema.optional(), where: MealInteractionWhereUniqueInputObjectSchema }).strict();