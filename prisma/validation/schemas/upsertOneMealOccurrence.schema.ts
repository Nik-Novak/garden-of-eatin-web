import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MealOccurrenceSelectObjectSchema as MealOccurrenceSelectObjectSchema } from './objects/MealOccurrenceSelect.schema';
import { MealOccurrenceIncludeObjectSchema as MealOccurrenceIncludeObjectSchema } from './objects/MealOccurrenceInclude.schema';
import { MealOccurrenceWhereUniqueInputObjectSchema as MealOccurrenceWhereUniqueInputObjectSchema } from './objects/MealOccurrenceWhereUniqueInput.schema';
import { MealOccurrenceCreateInputObjectSchema as MealOccurrenceCreateInputObjectSchema } from './objects/MealOccurrenceCreateInput.schema';
import { MealOccurrenceUncheckedCreateInputObjectSchema as MealOccurrenceUncheckedCreateInputObjectSchema } from './objects/MealOccurrenceUncheckedCreateInput.schema';
import { MealOccurrenceUpdateInputObjectSchema as MealOccurrenceUpdateInputObjectSchema } from './objects/MealOccurrenceUpdateInput.schema';
import { MealOccurrenceUncheckedUpdateInputObjectSchema as MealOccurrenceUncheckedUpdateInputObjectSchema } from './objects/MealOccurrenceUncheckedUpdateInput.schema';

export const MealOccurrenceUpsertOneSchema: z.ZodType<Prisma.MealOccurrenceUpsertArgs> = z.object({ select: MealOccurrenceSelectObjectSchema.optional(), include: MealOccurrenceIncludeObjectSchema.optional(), where: MealOccurrenceWhereUniqueInputObjectSchema, create: z.union([ MealOccurrenceCreateInputObjectSchema, MealOccurrenceUncheckedCreateInputObjectSchema ]), update: z.union([ MealOccurrenceUpdateInputObjectSchema, MealOccurrenceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceUpsertArgs>;

export const MealOccurrenceUpsertOneZodSchema = z.object({ select: MealOccurrenceSelectObjectSchema.optional(), include: MealOccurrenceIncludeObjectSchema.optional(), where: MealOccurrenceWhereUniqueInputObjectSchema, create: z.union([ MealOccurrenceCreateInputObjectSchema, MealOccurrenceUncheckedCreateInputObjectSchema ]), update: z.union([ MealOccurrenceUpdateInputObjectSchema, MealOccurrenceUncheckedUpdateInputObjectSchema ]) }).strict();