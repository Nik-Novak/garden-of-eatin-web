import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PointUpdateEnvelopeInputObjectSchema as PointUpdateEnvelopeInputObjectSchema } from './PointUpdateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { ResourceUpdateOneRequiredWithoutResource_occurrencesNestedInputObjectSchema as ResourceUpdateOneRequiredWithoutResource_occurrencesNestedInputObjectSchema } from './ResourceUpdateOneRequiredWithoutResource_occurrencesNestedInput.schema'

const makeSchema = () => z.object({
  start: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  end: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  timezone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  location: z.union([z.lazy(() => PointUpdateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.lazy(() => ResourceUpdateOneRequiredWithoutResource_occurrencesNestedInputObjectSchema).optional()
}).strict();
export const ResourceOccurrenceUpdateInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceUpdateInput>;
export const ResourceOccurrenceUpdateInputObjectZodSchema = makeSchema();
