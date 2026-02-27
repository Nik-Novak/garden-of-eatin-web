import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ParkingSchema } from '../enums/Parking.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumParkingNullableFilterObjectSchema as NestedEnumParkingNullableFilterObjectSchema } from './NestedEnumParkingNullableFilter.schema'

const nestedenumparkingnullablewithaggregatesfilterSchema = z.object({
  equals: ParkingSchema.optional().nullable(),
  in: ParkingSchema.array().optional().nullable(),
  notIn: ParkingSchema.array().optional().nullable(),
  not: z.union([ParkingSchema, z.lazy(() => NestedEnumParkingNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumParkingNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumParkingNullableFilterObjectSchema).optional(),
  isSet: z.boolean().optional()
}).strict();
export const NestedEnumParkingNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumParkingNullableWithAggregatesFilter> = nestedenumparkingnullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumParkingNullableWithAggregatesFilter>;
export const NestedEnumParkingNullableWithAggregatesFilterObjectZodSchema = nestedenumparkingnullablewithaggregatesfilterSchema;
