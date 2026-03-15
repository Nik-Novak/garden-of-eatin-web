import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MealUpdateOneRequiredWithoutMeal_search_hitsNestedInputObjectSchema as MealUpdateOneRequiredWithoutMeal_search_hitsNestedInputObjectSchema } from './MealUpdateOneRequiredWithoutMeal_search_hitsNestedInput.schema'

const makeSchema = () => z.object({
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  meal: z.lazy(() => MealUpdateOneRequiredWithoutMeal_search_hitsNestedInputObjectSchema).optional()
}).strict();
export const MealSearchHitUpdateWithoutSearchInputObjectSchema: z.ZodType<Prisma.MealSearchHitUpdateWithoutSearchInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitUpdateWithoutSearchInput>;
export const MealSearchHitUpdateWithoutSearchInputObjectZodSchema = makeSchema();
