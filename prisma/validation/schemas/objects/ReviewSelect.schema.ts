import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { MealArgsObjectSchema as MealArgsObjectSchema } from './MealArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  overall: z.boolean().optional(),
  facet_reviews: z.boolean().optional(),
  feature_reviews: z.boolean().optional(),
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  device_id: z.boolean().optional(),
  meal: z.union([z.boolean(), z.lazy(() => MealArgsObjectSchema)]).optional(),
  meal_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional()
}).strict();
export const ReviewSelectObjectSchema: z.ZodType<Prisma.ReviewSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReviewSelect>;
export const ReviewSelectObjectZodSchema = makeSchema();
