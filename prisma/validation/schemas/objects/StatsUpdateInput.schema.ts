import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  views: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  navigations: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const StatsUpdateInputObjectSchema: z.ZodType<Prisma.StatsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.StatsUpdateInput>;
export const StatsUpdateInputObjectZodSchema = makeSchema();
