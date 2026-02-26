import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServiceSchema } from '../enums/Service.schema';
import { NestedEnumServiceNullableFilterObjectSchema as NestedEnumServiceNullableFilterObjectSchema } from './NestedEnumServiceNullableFilter.schema'

const makeSchema = () => z.object({
  equals: ServiceSchema.optional().nullable(),
  in: ServiceSchema.array().optional().nullable(),
  notIn: ServiceSchema.array().optional().nullable(),
  not: z.union([ServiceSchema, z.lazy(() => NestedEnumServiceNullableFilterObjectSchema)]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const EnumServiceNullableFilterObjectSchema: z.ZodType<Prisma.EnumServiceNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumServiceNullableFilter>;
export const EnumServiceNullableFilterObjectZodSchema = makeSchema();
