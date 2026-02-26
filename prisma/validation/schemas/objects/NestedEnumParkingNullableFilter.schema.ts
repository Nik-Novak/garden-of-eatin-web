import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ParkingSchema } from '../enums/Parking.schema'

const nestedenumparkingnullablefilterSchema = z.object({
  equals: ParkingSchema.optional().nullable(),
  in: ParkingSchema.array().optional().nullable(),
  notIn: ParkingSchema.array().optional().nullable(),
  not: z.union([ParkingSchema, z.lazy(() => NestedEnumParkingNullableFilterObjectSchema)]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const NestedEnumParkingNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumParkingNullableFilter> = nestedenumparkingnullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumParkingNullableFilter>;
export const NestedEnumParkingNullableFilterObjectZodSchema = nestedenumparkingnullablefilterSchema;
