import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitWhereInputObjectSchema as MealSearchHitWhereInputObjectSchema } from './MealSearchHitWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MealSearchHitWhereInputObjectSchema).optional(),
  some: z.lazy(() => MealSearchHitWhereInputObjectSchema).optional(),
  none: z.lazy(() => MealSearchHitWhereInputObjectSchema).optional()
}).strict();
export const MealSearchHitListRelationFilterObjectSchema: z.ZodType<Prisma.MealSearchHitListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitListRelationFilter>;
export const MealSearchHitListRelationFilterObjectZodSchema = makeSchema();
