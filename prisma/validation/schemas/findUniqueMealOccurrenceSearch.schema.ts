import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealOccurrenceSearchSelectObjectSchema as MealOccurrenceSearchSelectObjectSchema } from './objects/MealOccurrenceSearchSelect.schema';
import { MealOccurrenceSearchIncludeObjectSchema as MealOccurrenceSearchIncludeObjectSchema } from './objects/MealOccurrenceSearchInclude.schema';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './objects/MealOccurrenceSearchWhereUniqueInput.schema';

export const MealOccurrenceSearchFindUniqueSchema: z.ZodType<Prisma.MealOccurrenceSearchFindUniqueArgs> = z.object({ select: MealOccurrenceSearchSelectObjectSchema.optional(), include: MealOccurrenceSearchIncludeObjectSchema.optional(), where: MealOccurrenceSearchWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceSearchFindUniqueArgs>;

export const MealOccurrenceSearchFindUniqueZodSchema = z.object({ select: MealOccurrenceSearchSelectObjectSchema.optional(), include: MealOccurrenceSearchIncludeObjectSchema.optional(), where: MealOccurrenceSearchWhereUniqueInputObjectSchema }).strict();