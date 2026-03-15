import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealArgsObjectSchema as MealArgsObjectSchema } from './MealArgs.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema'

const makeSchema = () => z.object({
  meal: z.union([z.boolean(), z.lazy(() => MealArgsObjectSchema)]).optional(),
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional()
}).strict();
export const MealInteractionIncludeObjectSchema: z.ZodType<Prisma.MealInteractionInclude> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionInclude>;
export const MealInteractionIncludeObjectZodSchema = makeSchema();
