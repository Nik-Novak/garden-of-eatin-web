import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementTypeSchema } from '../enums/AgreementType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumAgreementTypeFilterObjectSchema as NestedEnumAgreementTypeFilterObjectSchema } from './NestedEnumAgreementTypeFilter.schema'

const nestedenumagreementtypewithaggregatesfilterSchema = z.object({
  equals: AgreementTypeSchema.optional(),
  in: AgreementTypeSchema.array().optional(),
  notIn: AgreementTypeSchema.array().optional(),
  not: z.union([AgreementTypeSchema, z.lazy(() => NestedEnumAgreementTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAgreementTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAgreementTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumAgreementTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumAgreementTypeWithAggregatesFilter> = nestedenumagreementtypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumAgreementTypeWithAggregatesFilter>;
export const NestedEnumAgreementTypeWithAggregatesFilterObjectZodSchema = nestedenumagreementtypewithaggregatesfilterSchema;
