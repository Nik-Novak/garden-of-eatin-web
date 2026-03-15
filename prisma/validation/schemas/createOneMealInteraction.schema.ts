import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealInteractionSelectObjectSchema as MealInteractionSelectObjectSchema } from './objects/MealInteractionSelect.schema';
import { MealInteractionIncludeObjectSchema as MealInteractionIncludeObjectSchema } from './objects/MealInteractionInclude.schema';
import { MealInteractionCreateInputObjectSchema as MealInteractionCreateInputObjectSchema } from './objects/MealInteractionCreateInput.schema';
import { MealInteractionUncheckedCreateInputObjectSchema as MealInteractionUncheckedCreateInputObjectSchema } from './objects/MealInteractionUncheckedCreateInput.schema';

export const MealInteractionCreateOneSchema: z.ZodType<Prisma.MealInteractionCreateArgs> = z.object({ select: MealInteractionSelectObjectSchema.optional(), include: MealInteractionIncludeObjectSchema.optional(), data: z.union([MealInteractionCreateInputObjectSchema, MealInteractionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MealInteractionCreateArgs>;

export const MealInteractionCreateOneZodSchema = z.object({ select: MealInteractionSelectObjectSchema.optional(), include: MealInteractionIncludeObjectSchema.optional(), data: z.union([MealInteractionCreateInputObjectSchema, MealInteractionUncheckedCreateInputObjectSchema]) }).strict();