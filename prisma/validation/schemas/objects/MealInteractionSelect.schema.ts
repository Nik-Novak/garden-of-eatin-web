import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealArgsObjectSchema as MealArgsObjectSchema } from './MealArgs.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  interaction_type: z.boolean().optional(),
  meal: z.union([z.boolean(), z.lazy(() => MealArgsObjectSchema)]).optional(),
  meal_id: z.boolean().optional(),
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  device_id: z.boolean().optional(),
  user_location: z.boolean().optional(),
  created_at: z.boolean().optional()
}).strict();
export const MealInteractionSelectObjectSchema: z.ZodType<Prisma.MealInteractionSelect> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionSelect>;
export const MealInteractionSelectObjectZodSchema = makeSchema();
