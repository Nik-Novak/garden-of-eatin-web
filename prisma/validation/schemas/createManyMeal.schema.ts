import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MealCreateManyInputObjectSchema as MealCreateManyInputObjectSchema } from './objects/MealCreateManyInput.schema';

export const MealCreateManySchema: z.ZodType<Prisma.MealCreateManyArgs> = z.object({ data: z.union([ MealCreateManyInputObjectSchema, z.array(MealCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.MealCreateManyArgs>;

export const MealCreateManyZodSchema = z.object({ data: z.union([ MealCreateManyInputObjectSchema, z.array(MealCreateManyInputObjectSchema) ]),  }).strict();