import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealOccurrenceSearchSelectObjectSchema as MealOccurrenceSearchSelectObjectSchema } from './objects/MealOccurrenceSearchSelect.schema';
import { MealOccurrenceSearchIncludeObjectSchema as MealOccurrenceSearchIncludeObjectSchema } from './objects/MealOccurrenceSearchInclude.schema';
import { MealOccurrenceSearchUpdateInputObjectSchema as MealOccurrenceSearchUpdateInputObjectSchema } from './objects/MealOccurrenceSearchUpdateInput.schema';
import { MealOccurrenceSearchUncheckedUpdateInputObjectSchema as MealOccurrenceSearchUncheckedUpdateInputObjectSchema } from './objects/MealOccurrenceSearchUncheckedUpdateInput.schema';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './objects/MealOccurrenceSearchWhereUniqueInput.schema';

export const MealOccurrenceSearchUpdateOneSchema: z.ZodType<Prisma.MealOccurrenceSearchUpdateArgs> = z.object({ select: MealOccurrenceSearchSelectObjectSchema.optional(), include: MealOccurrenceSearchIncludeObjectSchema.optional(), data: z.union([MealOccurrenceSearchUpdateInputObjectSchema, MealOccurrenceSearchUncheckedUpdateInputObjectSchema]), where: MealOccurrenceSearchWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUpdateArgs>;

export const MealOccurrenceSearchUpdateOneZodSchema = z.object({ select: MealOccurrenceSearchSelectObjectSchema.optional(), include: MealOccurrenceSearchIncludeObjectSchema.optional(), data: z.union([MealOccurrenceSearchUpdateInputObjectSchema, MealOccurrenceSearchUncheckedUpdateInputObjectSchema]), where: MealOccurrenceSearchWhereUniqueInputObjectSchema }).strict();