import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleTypeSchema } from '../enums/VehicleType.schema'

const makeSchema = () => z.object({
  equals: VehicleTypeSchema.array().optional().nullable(),
  has: VehicleTypeSchema.optional().nullable(),
  hasEvery: VehicleTypeSchema.array().optional(),
  hasSome: VehicleTypeSchema.array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const EnumVehicleTypeNullableListFilterObjectSchema: z.ZodType<Prisma.EnumVehicleTypeNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumVehicleTypeNullableListFilter>;
export const EnumVehicleTypeNullableListFilterObjectZodSchema = makeSchema();
