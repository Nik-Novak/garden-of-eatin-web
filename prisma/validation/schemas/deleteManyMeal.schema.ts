import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './objects/MealWhereInput.schema';

export const MealDeleteManySchema: z.ZodType<Prisma.MealDeleteManyArgs> = z.object({ where: MealWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MealDeleteManyArgs>;

export const MealDeleteManyZodSchema = z.object({ where: MealWhereInputObjectSchema.optional() }).strict();