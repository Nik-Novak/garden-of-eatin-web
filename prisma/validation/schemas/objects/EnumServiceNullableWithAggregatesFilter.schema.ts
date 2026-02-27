import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceSchema } from '../enums/Service.schema';
import { NestedEnumServiceNullableWithAggregatesFilterObjectSchema as NestedEnumServiceNullableWithAggregatesFilterObjectSchema } from './NestedEnumServiceNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumServiceNullableFilterObjectSchema as NestedEnumServiceNullableFilterObjectSchema } from './NestedEnumServiceNullableFilter.schema'

const makeSchema = () => z.object({
  equals: ServiceSchema.optional().nullable(),
  in: ServiceSchema.array().optional().nullable(),
  notIn: ServiceSchema.array().optional().nullable(),
  not: z.union([ServiceSchema, z.lazy(() => NestedEnumServiceNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumServiceNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumServiceNullableFilterObjectSchema).optional(),
  isSet: z.boolean().optional()
}).strict();
export const EnumServiceNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumServiceNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumServiceNullableWithAggregatesFilter>;
export const EnumServiceNullableWithAggregatesFilterObjectZodSchema = makeSchema();
