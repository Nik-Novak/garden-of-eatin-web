import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ServiceSchema } from '../enums/Service.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumServiceNullableFilterObjectSchema as NestedEnumServiceNullableFilterObjectSchema } from './NestedEnumServiceNullableFilter.schema'

const nestedenumservicenullablewithaggregatesfilterSchema = z.object({
  equals: ServiceSchema.optional().nullable(),
  in: ServiceSchema.array().optional().nullable(),
  notIn: ServiceSchema.array().optional().nullable(),
  not: z.union([ServiceSchema, z.lazy(() => NestedEnumServiceNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumServiceNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumServiceNullableFilterObjectSchema).optional(),
  isSet: z.boolean().optional()
}).strict();
export const NestedEnumServiceNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumServiceNullableWithAggregatesFilter> = nestedenumservicenullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumServiceNullableWithAggregatesFilter>;
export const NestedEnumServiceNullableWithAggregatesFilterObjectZodSchema = nestedenumservicenullablewithaggregatesfilterSchema;
