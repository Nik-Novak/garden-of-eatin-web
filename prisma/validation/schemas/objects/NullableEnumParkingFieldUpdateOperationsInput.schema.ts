import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ParkingSchema } from '../enums/Parking.schema'

const makeSchema = () => z.object({
  set: ParkingSchema.optional(),
  unset: z.boolean().optional()
}).strict();
export const NullableEnumParkingFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumParkingFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumParkingFieldUpdateOperationsInput>;
export const NullableEnumParkingFieldUpdateOperationsInputObjectZodSchema = makeSchema();
