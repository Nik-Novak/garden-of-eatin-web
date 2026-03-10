import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealOccurrenceSearchCreateManyInputObjectSchema as MealOccurrenceSearchCreateManyInputObjectSchema } from './objects/MealOccurrenceSearchCreateManyInput.schema';

export const MealOccurrenceSearchCreateManySchema: z.ZodType<Prisma.MealOccurrenceSearchCreateManyArgs> = z.object({ data: z.union([ MealOccurrenceSearchCreateManyInputObjectSchema, z.array(MealOccurrenceSearchCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceSearchCreateManyArgs>;

export const MealOccurrenceSearchCreateManyZodSchema = z.object({ data: z.union([ MealOccurrenceSearchCreateManyInputObjectSchema, z.array(MealOccurrenceSearchCreateManyInputObjectSchema) ]),  }).strict();