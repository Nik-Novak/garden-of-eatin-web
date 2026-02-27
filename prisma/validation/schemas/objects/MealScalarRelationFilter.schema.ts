import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => MealWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => MealWhereInputObjectSchema).optional()
}).strict();
export const MealScalarRelationFilterObjectSchema: z.ZodType<Prisma.MealScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MealScalarRelationFilter>;
export const MealScalarRelationFilterObjectZodSchema = makeSchema();
