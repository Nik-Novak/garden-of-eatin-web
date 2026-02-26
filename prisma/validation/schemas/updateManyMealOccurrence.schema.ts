import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { MealOccurrenceUpdateManyMutationInputObjectSchema as MealOccurrenceUpdateManyMutationInputObjectSchema } from './objects/MealOccurrenceUpdateManyMutationInput.schema';
import { MealOccurrenceWhereInputObjectSchema as MealOccurrenceWhereInputObjectSchema } from './objects/MealOccurrenceWhereInput.schema';

export const MealOccurrenceUpdateManySchema: z.ZodType<Prisma.MealOccurrenceUpdateManyArgs> = z.object({ data: MealOccurrenceUpdateManyMutationInputObjectSchema, where: MealOccurrenceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MealOccurrenceUpdateManyArgs>;

export const MealOccurrenceUpdateManyZodSchema = z.object({ data: MealOccurrenceUpdateManyMutationInputObjectSchema, where: MealOccurrenceWhereInputObjectSchema.optional() }).strict();