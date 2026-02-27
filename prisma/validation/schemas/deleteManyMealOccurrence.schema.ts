import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealOccurrenceWhereInputObjectSchema as MealOccurrenceWhereInputObjectSchema } from './objects/MealOccurrenceWhereInput.schema';

export const MealOccurrenceDeleteManySchema: z.ZodType<Prisma.MealOccurrenceDeleteManyArgs> = z.object({ where: MealOccurrenceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceDeleteManyArgs>;

export const MealOccurrenceDeleteManyZodSchema = z.object({ where: MealOccurrenceWhereInputObjectSchema.optional() }).strict();