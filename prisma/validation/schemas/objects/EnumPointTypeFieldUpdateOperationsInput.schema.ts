import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { PointTypeSchema } from '../enums/PointType.schema'

const makeSchema = () => z.object({
  set: PointTypeSchema.optional()
}).strict();
export const EnumPointTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumPointTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumPointTypeFieldUpdateOperationsInput>;
export const EnumPointTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
