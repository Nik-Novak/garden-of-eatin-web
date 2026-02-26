import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MealSelectObjectSchema as MealSelectObjectSchema } from './objects/MealSelect.schema';
import { MealIncludeObjectSchema as MealIncludeObjectSchema } from './objects/MealInclude.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './objects/MealWhereUniqueInput.schema';

export const MealDeleteOneSchema: z.ZodType<Prisma.MealDeleteArgs> = z.object({ select: MealSelectObjectSchema.optional(), include: MealIncludeObjectSchema.optional(), where: MealWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MealDeleteArgs>;

export const MealDeleteOneZodSchema = z.object({ select: MealSelectObjectSchema.optional(), include: MealIncludeObjectSchema.optional(), where: MealWhereUniqueInputObjectSchema }).strict();