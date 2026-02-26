import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TravelModeSchema } from '../enums/TravelMode.schema';
import { NestedEnumTravelModeNullableFilterObjectSchema as NestedEnumTravelModeNullableFilterObjectSchema } from './NestedEnumTravelModeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: TravelModeSchema.optional().nullable(),
  in: TravelModeSchema.array().optional().nullable(),
  notIn: TravelModeSchema.array().optional().nullable(),
  not: z.union([TravelModeSchema, z.lazy(() => NestedEnumTravelModeNullableFilterObjectSchema)]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const EnumTravelModeNullableFilterObjectSchema: z.ZodType<Prisma.EnumTravelModeNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTravelModeNullableFilter>;
export const EnumTravelModeNullableFilterObjectZodSchema = makeSchema();
