import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServiceSchema } from '../enums/Service.schema'

const nestedenumservicenullablefilterSchema = z.object({
  equals: ServiceSchema.optional().nullable(),
  in: ServiceSchema.array().optional().nullable(),
  notIn: ServiceSchema.array().optional().nullable(),
  not: z.union([ServiceSchema, z.lazy(() => NestedEnumServiceNullableFilterObjectSchema)]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const NestedEnumServiceNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumServiceNullableFilter> = nestedenumservicenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumServiceNullableFilter>;
export const NestedEnumServiceNullableFilterObjectZodSchema = nestedenumservicenullablefilterSchema;
