import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealOccurrenceSearchSelectObjectSchema as MealOccurrenceSearchSelectObjectSchema } from './objects/MealOccurrenceSearchSelect.schema';
import { MealOccurrenceSearchIncludeObjectSchema as MealOccurrenceSearchIncludeObjectSchema } from './objects/MealOccurrenceSearchInclude.schema';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './objects/MealOccurrenceSearchWhereUniqueInput.schema';

export const MealOccurrenceSearchDeleteOneSchema: z.ZodType<Prisma.MealOccurrenceSearchDeleteArgs> = z.object({ select: MealOccurrenceSearchSelectObjectSchema.optional(), include: MealOccurrenceSearchIncludeObjectSchema.optional(), where: MealOccurrenceSearchWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceSearchDeleteArgs>;

export const MealOccurrenceSearchDeleteOneZodSchema = z.object({ select: MealOccurrenceSearchSelectObjectSchema.optional(), include: MealOccurrenceSearchIncludeObjectSchema.optional(), where: MealOccurrenceSearchWhereUniqueInputObjectSchema }).strict();