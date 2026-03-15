import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealSearchHitWhereInputObjectSchema as MealSearchHitWhereInputObjectSchema } from './objects/MealSearchHitWhereInput.schema';

export const MealSearchHitDeleteManySchema: z.ZodType<Prisma.MealSearchHitDeleteManyArgs> = z.object({ where: MealSearchHitWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MealSearchHitDeleteManyArgs>;

export const MealSearchHitDeleteManyZodSchema = z.object({ where: MealSearchHitWhereInputObjectSchema.optional() }).strict();