import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InteractionTypeSchema } from '../enums/InteractionType.schema';
import { EnumInteractionTypeFieldUpdateOperationsInputObjectSchema as EnumInteractionTypeFieldUpdateOperationsInputObjectSchema } from './EnumInteractionTypeFieldUpdateOperationsInput.schema';
import { PointUpdateEnvelopeInputObjectSchema as PointUpdateEnvelopeInputObjectSchema } from './PointUpdateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MealUpdateOneRequiredWithoutMeal_interactionsNestedInputObjectSchema as MealUpdateOneRequiredWithoutMeal_interactionsNestedInputObjectSchema } from './MealUpdateOneRequiredWithoutMeal_interactionsNestedInput.schema';
import { DeviceUpdateOneRequiredWithoutMeal_interactionsNestedInputObjectSchema as DeviceUpdateOneRequiredWithoutMeal_interactionsNestedInputObjectSchema } from './DeviceUpdateOneRequiredWithoutMeal_interactionsNestedInput.schema'

const makeSchema = () => z.object({
  interaction_type: z.union([InteractionTypeSchema, z.lazy(() => EnumInteractionTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_location: z.union([z.lazy(() => PointUpdateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  meal: z.lazy(() => MealUpdateOneRequiredWithoutMeal_interactionsNestedInputObjectSchema).optional(),
  device: z.lazy(() => DeviceUpdateOneRequiredWithoutMeal_interactionsNestedInputObjectSchema).optional()
}).strict();
export const MealInteractionUpdateInputObjectSchema: z.ZodType<Prisma.MealInteractionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionUpdateInput>;
export const MealInteractionUpdateInputObjectZodSchema = makeSchema();
