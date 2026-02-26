import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServiceSchema } from '../enums/Service.schema'

const makeSchema = () => z.object({
  set: ServiceSchema.optional(),
  unset: z.boolean().optional()
}).strict();
export const NullableEnumServiceFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumServiceFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumServiceFieldUpdateOperationsInput>;
export const NullableEnumServiceFieldUpdateOperationsInputObjectZodSchema = makeSchema();
