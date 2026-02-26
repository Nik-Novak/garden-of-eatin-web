import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { TravelModeSchema } from '../enums/TravelMode.schema'

const nestedenumtravelmodenullablefilterSchema = z.object({
  equals: TravelModeSchema.optional().nullable(),
  in: TravelModeSchema.array().optional().nullable(),
  notIn: TravelModeSchema.array().optional().nullable(),
  not: z.union([TravelModeSchema, z.lazy(() => NestedEnumTravelModeNullableFilterObjectSchema)]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const NestedEnumTravelModeNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumTravelModeNullableFilter> = nestedenumtravelmodenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumTravelModeNullableFilter>;
export const NestedEnumTravelModeNullableFilterObjectZodSchema = nestedenumtravelmodenullablefilterSchema;
