import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ResourceUpdateOneRequiredWithoutResource_search_hitsNestedInputObjectSchema as ResourceUpdateOneRequiredWithoutResource_search_hitsNestedInputObjectSchema } from './ResourceUpdateOneRequiredWithoutResource_search_hitsNestedInput.schema';
import { ResourceOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInputObjectSchema as ResourceOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInputObjectSchema } from './ResourceOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInput.schema'

const makeSchema = () => z.object({
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.lazy(() => ResourceUpdateOneRequiredWithoutResource_search_hitsNestedInputObjectSchema).optional(),
  search: z.lazy(() => ResourceOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInputObjectSchema).optional()
}).strict();
export const ResourceSearchHitUpdateInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitUpdateInput>;
export const ResourceSearchHitUpdateInputObjectZodSchema = makeSchema();
