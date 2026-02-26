import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ParkingSchema } from '../enums/Parking.schema';
import { NestedEnumParkingNullableFilterObjectSchema as NestedEnumParkingNullableFilterObjectSchema } from './NestedEnumParkingNullableFilter.schema'

const makeSchema = () => z.object({
  equals: ParkingSchema.optional().nullable(),
  in: ParkingSchema.array().optional().nullable(),
  notIn: ParkingSchema.array().optional().nullable(),
  not: z.union([ParkingSchema, z.lazy(() => NestedEnumParkingNullableFilterObjectSchema)]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const EnumParkingNullableFilterObjectSchema: z.ZodType<Prisma.EnumParkingNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumParkingNullableFilter>;
export const EnumParkingNullableFilterObjectZodSchema = makeSchema();
