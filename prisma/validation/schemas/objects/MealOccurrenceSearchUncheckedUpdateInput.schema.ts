import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SearchTypeSchema } from '../enums/SearchType.schema';
import { EnumSearchTypeFieldUpdateOperationsInputObjectSchema as EnumSearchTypeFieldUpdateOperationsInputObjectSchema } from './EnumSearchTypeFieldUpdateOperationsInput.schema';
import { MealOccurrenceSearchUpdatemeal_idsInputObjectSchema as MealOccurrenceSearchUpdatemeal_idsInputObjectSchema } from './MealOccurrenceSearchUpdatemeal_idsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { PointUpdateEnvelopeInputObjectSchema as PointUpdateEnvelopeInputObjectSchema } from './PointUpdateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MealUncheckedUpdateManyWithoutMeal_occurrence_searchesNestedInputObjectSchema as MealUncheckedUpdateManyWithoutMeal_occurrence_searchesNestedInputObjectSchema } from './MealUncheckedUpdateManyWithoutMeal_occurrence_searchesNestedInput.schema'

const makeSchema = () => z.object({
  search_type: z.union([SearchTypeSchema, z.lazy(() => EnumSearchTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  meal_ids: z.union([z.lazy(() => MealOccurrenceSearchUpdatemeal_idsInputObjectSchema), z.string().max(24).array()]).optional(),
  start: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  end: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  radius_mi: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_location: z.union([z.lazy(() => PointUpdateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  meals: z.lazy(() => MealUncheckedUpdateManyWithoutMeal_occurrence_searchesNestedInputObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUncheckedUpdateInput>;
export const MealOccurrenceSearchUncheckedUpdateInputObjectZodSchema = makeSchema();
