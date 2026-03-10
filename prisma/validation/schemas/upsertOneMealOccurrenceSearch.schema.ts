import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealOccurrenceSearchSelectObjectSchema as MealOccurrenceSearchSelectObjectSchema } from './objects/MealOccurrenceSearchSelect.schema';
import { MealOccurrenceSearchIncludeObjectSchema as MealOccurrenceSearchIncludeObjectSchema } from './objects/MealOccurrenceSearchInclude.schema';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './objects/MealOccurrenceSearchWhereUniqueInput.schema';
import { MealOccurrenceSearchCreateInputObjectSchema as MealOccurrenceSearchCreateInputObjectSchema } from './objects/MealOccurrenceSearchCreateInput.schema';
import { MealOccurrenceSearchUncheckedCreateInputObjectSchema as MealOccurrenceSearchUncheckedCreateInputObjectSchema } from './objects/MealOccurrenceSearchUncheckedCreateInput.schema';
import { MealOccurrenceSearchUpdateInputObjectSchema as MealOccurrenceSearchUpdateInputObjectSchema } from './objects/MealOccurrenceSearchUpdateInput.schema';
import { MealOccurrenceSearchUncheckedUpdateInputObjectSchema as MealOccurrenceSearchUncheckedUpdateInputObjectSchema } from './objects/MealOccurrenceSearchUncheckedUpdateInput.schema';

export const MealOccurrenceSearchUpsertOneSchema: z.ZodType<Prisma.MealOccurrenceSearchUpsertArgs> = z.object({ select: MealOccurrenceSearchSelectObjectSchema.optional(), include: MealOccurrenceSearchIncludeObjectSchema.optional(), where: MealOccurrenceSearchWhereUniqueInputObjectSchema, create: z.union([ MealOccurrenceSearchCreateInputObjectSchema, MealOccurrenceSearchUncheckedCreateInputObjectSchema ]), update: z.union([ MealOccurrenceSearchUpdateInputObjectSchema, MealOccurrenceSearchUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUpsertArgs>;

export const MealOccurrenceSearchUpsertOneZodSchema = z.object({ select: MealOccurrenceSearchSelectObjectSchema.optional(), include: MealOccurrenceSearchIncludeObjectSchema.optional(), where: MealOccurrenceSearchWhereUniqueInputObjectSchema, create: z.union([ MealOccurrenceSearchCreateInputObjectSchema, MealOccurrenceSearchUncheckedCreateInputObjectSchema ]), update: z.union([ MealOccurrenceSearchUpdateInputObjectSchema, MealOccurrenceSearchUncheckedUpdateInputObjectSchema ]) }).strict();