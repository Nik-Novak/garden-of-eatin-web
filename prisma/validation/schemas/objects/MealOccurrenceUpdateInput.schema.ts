import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PointUpdateEnvelopeInputObjectSchema as PointUpdateEnvelopeInputObjectSchema } from './PointUpdateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { MealUpdateOneRequiredWithoutMeal_occurrencesNestedInputObjectSchema as MealUpdateOneRequiredWithoutMeal_occurrencesNestedInputObjectSchema } from './MealUpdateOneRequiredWithoutMeal_occurrencesNestedInput.schema'

const makeSchema = () => z.object({
  start: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  end: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  timezone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  location: z.union([z.lazy(() => PointUpdateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]).optional(),
  meal: z.lazy(() => MealUpdateOneRequiredWithoutMeal_occurrencesNestedInputObjectSchema).optional()
}).strict();
export const MealOccurrenceUpdateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceUpdateInput>;
export const MealOccurrenceUpdateInputObjectZodSchema = makeSchema();
