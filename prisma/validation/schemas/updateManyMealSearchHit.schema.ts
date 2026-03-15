import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealSearchHitUpdateManyMutationInputObjectSchema as MealSearchHitUpdateManyMutationInputObjectSchema } from './objects/MealSearchHitUpdateManyMutationInput.schema';
import { MealSearchHitWhereInputObjectSchema as MealSearchHitWhereInputObjectSchema } from './objects/MealSearchHitWhereInput.schema';

export const MealSearchHitUpdateManySchema: z.ZodType<Prisma.MealSearchHitUpdateManyArgs> = z.object({ data: MealSearchHitUpdateManyMutationInputObjectSchema, where: MealSearchHitWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MealSearchHitUpdateManyArgs>;

export const MealSearchHitUpdateManyZodSchema = z.object({ data: MealSearchHitUpdateManyMutationInputObjectSchema, where: MealSearchHitWhereInputObjectSchema.optional() }).strict();