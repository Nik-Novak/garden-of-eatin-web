import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealOccurrenceSelectObjectSchema as MealOccurrenceSelectObjectSchema } from './objects/MealOccurrenceSelect.schema';
import { MealOccurrenceIncludeObjectSchema as MealOccurrenceIncludeObjectSchema } from './objects/MealOccurrenceInclude.schema';
import { MealOccurrenceCreateInputObjectSchema as MealOccurrenceCreateInputObjectSchema } from './objects/MealOccurrenceCreateInput.schema';
import { MealOccurrenceUncheckedCreateInputObjectSchema as MealOccurrenceUncheckedCreateInputObjectSchema } from './objects/MealOccurrenceUncheckedCreateInput.schema';

export const MealOccurrenceCreateOneSchema: z.ZodType<Prisma.MealOccurrenceCreateArgs> = z.object({ select: MealOccurrenceSelectObjectSchema.optional(), include: MealOccurrenceIncludeObjectSchema.optional(), data: z.union([MealOccurrenceCreateInputObjectSchema, MealOccurrenceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceCreateArgs>;

export const MealOccurrenceCreateOneZodSchema = z.object({ select: MealOccurrenceSelectObjectSchema.optional(), include: MealOccurrenceIncludeObjectSchema.optional(), data: z.union([MealOccurrenceCreateInputObjectSchema, MealOccurrenceUncheckedCreateInputObjectSchema]) }).strict();