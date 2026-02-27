import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealSelectObjectSchema as MealSelectObjectSchema } from './objects/MealSelect.schema';
import { MealIncludeObjectSchema as MealIncludeObjectSchema } from './objects/MealInclude.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './objects/MealWhereUniqueInput.schema';

export const MealFindUniqueOrThrowSchema: z.ZodType<Prisma.MealFindUniqueOrThrowArgs> = z.object({ select: MealSelectObjectSchema.optional(), include: MealIncludeObjectSchema.optional(), where: MealWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MealFindUniqueOrThrowArgs>;

export const MealFindUniqueOrThrowZodSchema = z.object({ select: MealSelectObjectSchema.optional(), include: MealIncludeObjectSchema.optional(), where: MealWhereUniqueInputObjectSchema }).strict();