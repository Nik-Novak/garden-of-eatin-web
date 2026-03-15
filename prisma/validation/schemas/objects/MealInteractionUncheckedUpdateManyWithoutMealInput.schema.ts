import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InteractionTypeSchema } from '../enums/InteractionType.schema';
import { EnumInteractionTypeFieldUpdateOperationsInputObjectSchema as EnumInteractionTypeFieldUpdateOperationsInputObjectSchema } from './EnumInteractionTypeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PointUpdateEnvelopeInputObjectSchema as PointUpdateEnvelopeInputObjectSchema } from './PointUpdateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  interaction_type: z.union([InteractionTypeSchema, z.lazy(() => EnumInteractionTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  device_id: z.union([z.string().max(24), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_location: z.union([z.lazy(() => PointUpdateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MealInteractionUncheckedUpdateManyWithoutMealInputObjectSchema: z.ZodType<Prisma.MealInteractionUncheckedUpdateManyWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionUncheckedUpdateManyWithoutMealInput>;
export const MealInteractionUncheckedUpdateManyWithoutMealInputObjectZodSchema = makeSchema();
