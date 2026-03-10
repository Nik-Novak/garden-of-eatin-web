import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealOccurrenceSearchWhereInputObjectSchema as MealOccurrenceSearchWhereInputObjectSchema } from './objects/MealOccurrenceSearchWhereInput.schema';

export const MealOccurrenceSearchDeleteManySchema: z.ZodType<Prisma.MealOccurrenceSearchDeleteManyArgs> = z.object({ where: MealOccurrenceSearchWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceSearchDeleteManyArgs>;

export const MealOccurrenceSearchDeleteManyZodSchema = z.object({ where: MealOccurrenceSearchWhereInputObjectSchema.optional() }).strict();