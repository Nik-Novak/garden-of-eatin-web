import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { TravelModeSchema } from '../enums/TravelMode.schema'

const makeSchema = () => z.object({
  set: TravelModeSchema.optional(),
  unset: z.boolean().optional()
}).strict();
export const NullableEnumTravelModeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumTravelModeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumTravelModeFieldUpdateOperationsInput>;
export const NullableEnumTravelModeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
