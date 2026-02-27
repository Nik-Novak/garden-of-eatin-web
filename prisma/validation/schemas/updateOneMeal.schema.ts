import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealSelectObjectSchema as MealSelectObjectSchema } from './objects/MealSelect.schema';
import { MealIncludeObjectSchema as MealIncludeObjectSchema } from './objects/MealInclude.schema';
import { MealUpdateInputObjectSchema as MealUpdateInputObjectSchema } from './objects/MealUpdateInput.schema';
import { MealUncheckedUpdateInputObjectSchema as MealUncheckedUpdateInputObjectSchema } from './objects/MealUncheckedUpdateInput.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './objects/MealWhereUniqueInput.schema';

export const MealUpdateOneSchema: z.ZodType<Prisma.MealUpdateArgs> = z.object({ select: MealSelectObjectSchema.optional(), include: MealIncludeObjectSchema.optional(), data: z.union([MealUpdateInputObjectSchema, MealUncheckedUpdateInputObjectSchema]), where: MealWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MealUpdateArgs>;

export const MealUpdateOneZodSchema = z.object({ select: MealSelectObjectSchema.optional(), include: MealIncludeObjectSchema.optional(), data: z.union([MealUpdateInputObjectSchema, MealUncheckedUpdateInputObjectSchema]), where: MealWhereUniqueInputObjectSchema }).strict();