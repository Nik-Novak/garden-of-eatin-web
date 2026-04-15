import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  search_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ResourceSearchHitUncheckedUpdateWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitUncheckedUpdateWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitUncheckedUpdateWithoutResourceInput>;
export const ResourceSearchHitUncheckedUpdateWithoutResourceInputObjectZodSchema = makeSchema();
