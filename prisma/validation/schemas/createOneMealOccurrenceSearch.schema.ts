import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealOccurrenceSearchSelectObjectSchema as MealOccurrenceSearchSelectObjectSchema } from './objects/MealOccurrenceSearchSelect.schema';
import { MealOccurrenceSearchIncludeObjectSchema as MealOccurrenceSearchIncludeObjectSchema } from './objects/MealOccurrenceSearchInclude.schema';
import { MealOccurrenceSearchCreateInputObjectSchema as MealOccurrenceSearchCreateInputObjectSchema } from './objects/MealOccurrenceSearchCreateInput.schema';
import { MealOccurrenceSearchUncheckedCreateInputObjectSchema as MealOccurrenceSearchUncheckedCreateInputObjectSchema } from './objects/MealOccurrenceSearchUncheckedCreateInput.schema';

export const MealOccurrenceSearchCreateOneSchema: z.ZodType<Prisma.MealOccurrenceSearchCreateArgs> = z.object({ select: MealOccurrenceSearchSelectObjectSchema.optional(), include: MealOccurrenceSearchIncludeObjectSchema.optional(), data: z.union([MealOccurrenceSearchCreateInputObjectSchema, MealOccurrenceSearchUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceSearchCreateArgs>;

export const MealOccurrenceSearchCreateOneZodSchema = z.object({ select: MealOccurrenceSearchSelectObjectSchema.optional(), include: MealOccurrenceSearchIncludeObjectSchema.optional(), data: z.union([MealOccurrenceSearchCreateInputObjectSchema, MealOccurrenceSearchUncheckedCreateInputObjectSchema]) }).strict();