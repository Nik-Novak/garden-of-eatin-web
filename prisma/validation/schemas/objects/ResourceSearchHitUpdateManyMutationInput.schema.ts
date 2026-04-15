import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ResourceSearchHitUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitUpdateManyMutationInput>;
export const ResourceSearchHitUpdateManyMutationInputObjectZodSchema = makeSchema();
