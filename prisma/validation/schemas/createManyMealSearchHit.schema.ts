import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MealSearchHitCreateManyInputObjectSchema as MealSearchHitCreateManyInputObjectSchema } from './objects/MealSearchHitCreateManyInput.schema';

export const MealSearchHitCreateManySchema: z.ZodType<Prisma.MealSearchHitCreateManyArgs> = z.object({ data: z.union([ MealSearchHitCreateManyInputObjectSchema, z.array(MealSearchHitCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.MealSearchHitCreateManyArgs>;

export const MealSearchHitCreateManyZodSchema = z.object({ data: z.union([ MealSearchHitCreateManyInputObjectSchema, z.array(MealSearchHitCreateManyInputObjectSchema) ]),  }).strict();