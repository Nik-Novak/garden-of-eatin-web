import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealOccurrenceSearchUpdateManyMutationInputObjectSchema as MealOccurrenceSearchUpdateManyMutationInputObjectSchema } from './objects/MealOccurrenceSearchUpdateManyMutationInput.schema';
import { MealOccurrenceSearchWhereInputObjectSchema as MealOccurrenceSearchWhereInputObjectSchema } from './objects/MealOccurrenceSearchWhereInput.schema';

export const MealOccurrenceSearchUpdateManySchema: z.ZodType<Prisma.MealOccurrenceSearchUpdateManyArgs> = z.object({ data: MealOccurrenceSearchUpdateManyMutationInputObjectSchema, where: MealOccurrenceSearchWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUpdateManyArgs>;

export const MealOccurrenceSearchUpdateManyZodSchema = z.object({ data: MealOccurrenceSearchUpdateManyMutationInputObjectSchema, where: MealOccurrenceSearchWhereInputObjectSchema.optional() }).strict();