import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchTypeSchema } from '../enums/ResourceSearchType.schema';
import { EnumResourceSearchTypeFieldUpdateOperationsInputObjectSchema as EnumResourceSearchTypeFieldUpdateOperationsInputObjectSchema } from './EnumResourceSearchTypeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { PointUpdateEnvelopeInputObjectSchema as PointUpdateEnvelopeInputObjectSchema } from './PointUpdateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ResourceSearchHitUpdateManyWithoutSearchNestedInputObjectSchema as ResourceSearchHitUpdateManyWithoutSearchNestedInputObjectSchema } from './ResourceSearchHitUpdateManyWithoutSearchNestedInput.schema';
import { DeviceUpdateOneRequiredWithoutResource_occurrence_searchesNestedInputObjectSchema as DeviceUpdateOneRequiredWithoutResource_occurrence_searchesNestedInputObjectSchema } from './DeviceUpdateOneRequiredWithoutResource_occurrence_searchesNestedInput.schema'

const makeSchema = () => z.object({
  search_type: z.union([ResourceSearchTypeSchema, z.lazy(() => EnumResourceSearchTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  start: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  end: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  radius_mi: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_location: z.union([z.lazy(() => PointUpdateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  hits: z.lazy(() => ResourceSearchHitUpdateManyWithoutSearchNestedInputObjectSchema).optional(),
  device: z.lazy(() => DeviceUpdateOneRequiredWithoutResource_occurrence_searchesNestedInputObjectSchema).optional()
}).strict();
export const ResourceOccurrenceSearchUpdateInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchUpdateInput>;
export const ResourceOccurrenceSearchUpdateInputObjectZodSchema = makeSchema();
