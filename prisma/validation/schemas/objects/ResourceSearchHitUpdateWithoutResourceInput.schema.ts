import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ResourceOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInputObjectSchema as ResourceOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInputObjectSchema } from './ResourceOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInput.schema'

const makeSchema = () => z.object({
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  search: z.lazy(() => ResourceOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInputObjectSchema).optional()
}).strict();
export const ResourceSearchHitUpdateWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitUpdateWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitUpdateWithoutResourceInput>;
export const ResourceSearchHitUpdateWithoutResourceInputObjectZodSchema = makeSchema();
