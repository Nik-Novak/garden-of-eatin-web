import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MealWhereInputObjectSchema).optional(),
  some: z.lazy(() => MealWhereInputObjectSchema).optional(),
  none: z.lazy(() => MealWhereInputObjectSchema).optional()
}).strict();
export const MealListRelationFilterObjectSchema: z.ZodType<Prisma.MealListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MealListRelationFilter>;
export const MealListRelationFilterObjectZodSchema = makeSchema();
