import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealSelectObjectSchema as MealSelectObjectSchema } from './objects/MealSelect.schema';
import { MealIncludeObjectSchema as MealIncludeObjectSchema } from './objects/MealInclude.schema';
import { MealCreateInputObjectSchema as MealCreateInputObjectSchema } from './objects/MealCreateInput.schema';
import { MealUncheckedCreateInputObjectSchema as MealUncheckedCreateInputObjectSchema } from './objects/MealUncheckedCreateInput.schema';

export const MealCreateOneSchema: z.ZodType<Prisma.MealCreateArgs> = z.object({ select: MealSelectObjectSchema.optional(), include: MealIncludeObjectSchema.optional(), data: z.union([MealCreateInputObjectSchema, MealUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MealCreateArgs>;

export const MealCreateOneZodSchema = z.object({ select: MealSelectObjectSchema.optional(), include: MealIncludeObjectSchema.optional(), data: z.union([MealCreateInputObjectSchema, MealUncheckedCreateInputObjectSchema]) }).strict();