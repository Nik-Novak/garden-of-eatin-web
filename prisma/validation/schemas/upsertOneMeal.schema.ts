import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MealSelectObjectSchema as MealSelectObjectSchema } from './objects/MealSelect.schema';
import { MealIncludeObjectSchema as MealIncludeObjectSchema } from './objects/MealInclude.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './objects/MealWhereUniqueInput.schema';
import { MealCreateInputObjectSchema as MealCreateInputObjectSchema } from './objects/MealCreateInput.schema';
import { MealUncheckedCreateInputObjectSchema as MealUncheckedCreateInputObjectSchema } from './objects/MealUncheckedCreateInput.schema';
import { MealUpdateInputObjectSchema as MealUpdateInputObjectSchema } from './objects/MealUpdateInput.schema';
import { MealUncheckedUpdateInputObjectSchema as MealUncheckedUpdateInputObjectSchema } from './objects/MealUncheckedUpdateInput.schema';

export const MealUpsertOneSchema: z.ZodType<Prisma.MealUpsertArgs> = z.object({ select: MealSelectObjectSchema.optional(), include: MealIncludeObjectSchema.optional(), where: MealWhereUniqueInputObjectSchema, create: z.union([ MealCreateInputObjectSchema, MealUncheckedCreateInputObjectSchema ]), update: z.union([ MealUpdateInputObjectSchema, MealUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MealUpsertArgs>;

export const MealUpsertOneZodSchema = z.object({ select: MealSelectObjectSchema.optional(), include: MealIncludeObjectSchema.optional(), where: MealWhereUniqueInputObjectSchema, create: z.union([ MealCreateInputObjectSchema, MealUncheckedCreateInputObjectSchema ]), update: z.union([ MealUpdateInputObjectSchema, MealUncheckedUpdateInputObjectSchema ]) }).strict();