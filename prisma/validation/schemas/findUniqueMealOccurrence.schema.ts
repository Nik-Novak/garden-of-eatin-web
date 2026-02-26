import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MealOccurrenceSelectObjectSchema as MealOccurrenceSelectObjectSchema } from './objects/MealOccurrenceSelect.schema';
import { MealOccurrenceIncludeObjectSchema as MealOccurrenceIncludeObjectSchema } from './objects/MealOccurrenceInclude.schema';
import { MealOccurrenceWhereUniqueInputObjectSchema as MealOccurrenceWhereUniqueInputObjectSchema } from './objects/MealOccurrenceWhereUniqueInput.schema';

export const MealOccurrenceFindUniqueSchema: z.ZodType<Prisma.MealOccurrenceFindUniqueArgs> = z.object({ select: MealOccurrenceSelectObjectSchema.optional(), include: MealOccurrenceIncludeObjectSchema.optional(), where: MealOccurrenceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceFindUniqueArgs>;

export const MealOccurrenceFindUniqueZodSchema = z.object({ select: MealOccurrenceSelectObjectSchema.optional(), include: MealOccurrenceIncludeObjectSchema.optional(), where: MealOccurrenceWhereUniqueInputObjectSchema }).strict();