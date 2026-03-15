import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SearchTypeSchema } from '../enums/SearchType.schema';
import { EnumSearchTypeFieldUpdateOperationsInputObjectSchema as EnumSearchTypeFieldUpdateOperationsInputObjectSchema } from './EnumSearchTypeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { PointUpdateEnvelopeInputObjectSchema as PointUpdateEnvelopeInputObjectSchema } from './PointUpdateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MealSearchHitUpdateManyWithoutSearchNestedInputObjectSchema as MealSearchHitUpdateManyWithoutSearchNestedInputObjectSchema } from './MealSearchHitUpdateManyWithoutSearchNestedInput.schema'

const makeSchema = () => z.object({
  search_type: z.union([SearchTypeSchema, z.lazy(() => EnumSearchTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  start: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  end: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  radius_mi: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_location: z.union([z.lazy(() => PointUpdateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  hits: z.lazy(() => MealSearchHitUpdateManyWithoutSearchNestedInputObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchUpdateWithoutDeviceInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUpdateWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUpdateWithoutDeviceInput>;
export const MealOccurrenceSearchUpdateWithoutDeviceInputObjectZodSchema = makeSchema();
