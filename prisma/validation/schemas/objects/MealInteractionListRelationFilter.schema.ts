import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionWhereInputObjectSchema as MealInteractionWhereInputObjectSchema } from './MealInteractionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MealInteractionWhereInputObjectSchema).optional(),
  some: z.lazy(() => MealInteractionWhereInputObjectSchema).optional(),
  none: z.lazy(() => MealInteractionWhereInputObjectSchema).optional()
}).strict();
export const MealInteractionListRelationFilterObjectSchema: z.ZodType<Prisma.MealInteractionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionListRelationFilter>;
export const MealInteractionListRelationFilterObjectZodSchema = makeSchema();
