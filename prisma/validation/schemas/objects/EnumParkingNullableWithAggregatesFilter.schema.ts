import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ParkingSchema } from '../enums/Parking.schema';
import { NestedEnumParkingNullableWithAggregatesFilterObjectSchema as NestedEnumParkingNullableWithAggregatesFilterObjectSchema } from './NestedEnumParkingNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumParkingNullableFilterObjectSchema as NestedEnumParkingNullableFilterObjectSchema } from './NestedEnumParkingNullableFilter.schema'

const makeSchema = () => z.object({
  equals: ParkingSchema.optional().nullable(),
  in: ParkingSchema.array().optional().nullable(),
  notIn: ParkingSchema.array().optional().nullable(),
  not: z.union([ParkingSchema, z.lazy(() => NestedEnumParkingNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumParkingNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumParkingNullableFilterObjectSchema).optional(),
  isSet: z.boolean().optional()
}).strict();
export const EnumParkingNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumParkingNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumParkingNullableWithAggregatesFilter>;
export const EnumParkingNullableWithAggregatesFilterObjectZodSchema = makeSchema();
