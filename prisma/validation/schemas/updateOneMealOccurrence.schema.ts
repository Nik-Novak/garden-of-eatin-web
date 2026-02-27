import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealOccurrenceSelectObjectSchema as MealOccurrenceSelectObjectSchema } from './objects/MealOccurrenceSelect.schema';
import { MealOccurrenceIncludeObjectSchema as MealOccurrenceIncludeObjectSchema } from './objects/MealOccurrenceInclude.schema';
import { MealOccurrenceUpdateInputObjectSchema as MealOccurrenceUpdateInputObjectSchema } from './objects/MealOccurrenceUpdateInput.schema';
import { MealOccurrenceUncheckedUpdateInputObjectSchema as MealOccurrenceUncheckedUpdateInputObjectSchema } from './objects/MealOccurrenceUncheckedUpdateInput.schema';
import { MealOccurrenceWhereUniqueInputObjectSchema as MealOccurrenceWhereUniqueInputObjectSchema } from './objects/MealOccurrenceWhereUniqueInput.schema';

export const MealOccurrenceUpdateOneSchema: z.ZodType<Prisma.MealOccurrenceUpdateArgs> = z.object({ select: MealOccurrenceSelectObjectSchema.optional(), include: MealOccurrenceIncludeObjectSchema.optional(), data: z.union([MealOccurrenceUpdateInputObjectSchema, MealOccurrenceUncheckedUpdateInputObjectSchema]), where: MealOccurrenceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceUpdateArgs>;

export const MealOccurrenceUpdateOneZodSchema = z.object({ select: MealOccurrenceSelectObjectSchema.optional(), include: MealOccurrenceIncludeObjectSchema.optional(), data: z.union([MealOccurrenceUpdateInputObjectSchema, MealOccurrenceUncheckedUpdateInputObjectSchema]), where: MealOccurrenceWhereUniqueInputObjectSchema }).strict();