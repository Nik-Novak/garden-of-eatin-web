import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealUpdateManyMutationInputObjectSchema as MealUpdateManyMutationInputObjectSchema } from './objects/MealUpdateManyMutationInput.schema';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './objects/MealWhereInput.schema';

export const MealUpdateManySchema: z.ZodType<Prisma.MealUpdateManyArgs> = z.object({ data: MealUpdateManyMutationInputObjectSchema, where: MealWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MealUpdateManyArgs>;

export const MealUpdateManyZodSchema = z.object({ data: MealUpdateManyMutationInputObjectSchema, where: MealWhereInputObjectSchema.optional() }).strict();