import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealInteractionWhereInputObjectSchema as MealInteractionWhereInputObjectSchema } from './objects/MealInteractionWhereInput.schema';

export const MealInteractionDeleteManySchema: z.ZodType<Prisma.MealInteractionDeleteManyArgs> = z.object({ where: MealInteractionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MealInteractionDeleteManyArgs>;

export const MealInteractionDeleteManyZodSchema = z.object({ where: MealInteractionWhereInputObjectSchema.optional() }).strict();