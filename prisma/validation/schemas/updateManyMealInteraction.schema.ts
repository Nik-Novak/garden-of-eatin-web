import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealInteractionUpdateManyMutationInputObjectSchema as MealInteractionUpdateManyMutationInputObjectSchema } from './objects/MealInteractionUpdateManyMutationInput.schema';
import { MealInteractionWhereInputObjectSchema as MealInteractionWhereInputObjectSchema } from './objects/MealInteractionWhereInput.schema';

export const MealInteractionUpdateManySchema: z.ZodType<Prisma.MealInteractionUpdateManyArgs> = z.object({ data: MealInteractionUpdateManyMutationInputObjectSchema, where: MealInteractionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MealInteractionUpdateManyArgs>;

export const MealInteractionUpdateManyZodSchema = z.object({ data: MealInteractionUpdateManyMutationInputObjectSchema, where: MealInteractionWhereInputObjectSchema.optional() }).strict();