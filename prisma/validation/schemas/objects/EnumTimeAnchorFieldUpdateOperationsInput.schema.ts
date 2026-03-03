import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TimeAnchorSchema } from '../enums/TimeAnchor.schema'

const makeSchema = () => z.object({
  set: TimeAnchorSchema.optional()
}).strict();
export const EnumTimeAnchorFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumTimeAnchorFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumTimeAnchorFieldUpdateOperationsInput>;
export const EnumTimeAnchorFieldUpdateOperationsInputObjectZodSchema = makeSchema();
