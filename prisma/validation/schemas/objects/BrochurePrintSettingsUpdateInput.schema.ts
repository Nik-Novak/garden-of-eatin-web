import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  max_meal_radius_mi: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  max_meals_per_day: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const BrochurePrintSettingsUpdateInputObjectSchema: z.ZodType<Prisma.BrochurePrintSettingsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.BrochurePrintSettingsUpdateInput>;
export const BrochurePrintSettingsUpdateInputObjectZodSchema = makeSchema();
