import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  dark_mode: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  max_meal_radius_mi: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  max_meals_per_day: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const FlyerPrintSettingsUpdateInputObjectSchema: z.ZodType<Prisma.FlyerPrintSettingsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.FlyerPrintSettingsUpdateInput>;
export const FlyerPrintSettingsUpdateInputObjectZodSchema = makeSchema();
