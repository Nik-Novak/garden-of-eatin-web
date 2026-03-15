import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MealOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInputObjectSchema as MealOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInputObjectSchema } from './MealOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInput.schema'

const makeSchema = () => z.object({
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  search: z.lazy(() => MealOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInputObjectSchema).optional()
}).strict();
export const MealSearchHitUpdateWithoutMealInputObjectSchema: z.ZodType<Prisma.MealSearchHitUpdateWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitUpdateWithoutMealInput>;
export const MealSearchHitUpdateWithoutMealInputObjectZodSchema = makeSchema();
