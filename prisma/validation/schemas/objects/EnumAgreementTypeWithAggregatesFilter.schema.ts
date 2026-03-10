import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementTypeSchema } from '../enums/AgreementType.schema';
import { NestedEnumAgreementTypeWithAggregatesFilterObjectSchema as NestedEnumAgreementTypeWithAggregatesFilterObjectSchema } from './NestedEnumAgreementTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumAgreementTypeFilterObjectSchema as NestedEnumAgreementTypeFilterObjectSchema } from './NestedEnumAgreementTypeFilter.schema'

const makeSchema = () => z.object({
  equals: AgreementTypeSchema.optional(),
  in: AgreementTypeSchema.array().optional(),
  notIn: AgreementTypeSchema.array().optional(),
  not: z.union([AgreementTypeSchema, z.lazy(() => NestedEnumAgreementTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAgreementTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAgreementTypeFilterObjectSchema).optional()
}).strict();
export const EnumAgreementTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumAgreementTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAgreementTypeWithAggregatesFilter>;
export const EnumAgreementTypeWithAggregatesFilterObjectZodSchema = makeSchema();
