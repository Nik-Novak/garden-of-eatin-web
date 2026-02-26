import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MealOccurrenceCreateManyInputObjectSchema as MealOccurrenceCreateManyInputObjectSchema } from './objects/MealOccurrenceCreateManyInput.schema';

export const MealOccurrenceCreateManySchema: z.ZodType<Prisma.MealOccurrenceCreateManyArgs> = z.object({ data: z.union([ MealOccurrenceCreateManyInputObjectSchema, z.array(MealOccurrenceCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceCreateManyArgs>;

export const MealOccurrenceCreateManyZodSchema = z.object({ data: z.union([ MealOccurrenceCreateManyInputObjectSchema, z.array(MealOccurrenceCreateManyInputObjectSchema) ]),  }).strict();