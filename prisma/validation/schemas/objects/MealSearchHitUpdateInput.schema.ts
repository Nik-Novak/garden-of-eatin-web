import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MealUpdateOneRequiredWithoutMeal_search_hitsNestedInputObjectSchema as MealUpdateOneRequiredWithoutMeal_search_hitsNestedInputObjectSchema } from './MealUpdateOneRequiredWithoutMeal_search_hitsNestedInput.schema';
import { MealOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInputObjectSchema as MealOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInputObjectSchema } from './MealOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInput.schema'

const makeSchema = () => z.object({
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  meal: z.lazy(() => MealUpdateOneRequiredWithoutMeal_search_hitsNestedInputObjectSchema).optional(),
  search: z.lazy(() => MealOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInputObjectSchema).optional()
}).strict();
export const MealSearchHitUpdateInputObjectSchema: z.ZodType<Prisma.MealSearchHitUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitUpdateInput>;
export const MealSearchHitUpdateInputObjectZodSchema = makeSchema();
