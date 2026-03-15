import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealInteractionCreateManyInputObjectSchema as MealInteractionCreateManyInputObjectSchema } from './objects/MealInteractionCreateManyInput.schema';

export const MealInteractionCreateManySchema: z.ZodType<Prisma.MealInteractionCreateManyArgs> = z.object({ data: z.union([ MealInteractionCreateManyInputObjectSchema, z.array(MealInteractionCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.MealInteractionCreateManyArgs>;

export const MealInteractionCreateManyZodSchema = z.object({ data: z.union([ MealInteractionCreateManyInputObjectSchema, z.array(MealInteractionCreateManyInputObjectSchema) ]),  }).strict();