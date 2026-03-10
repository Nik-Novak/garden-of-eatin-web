import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementTypeSchema } from '../enums/AgreementType.schema';
import { NestedEnumAgreementTypeFilterObjectSchema as NestedEnumAgreementTypeFilterObjectSchema } from './NestedEnumAgreementTypeFilter.schema'

const makeSchema = () => z.object({
  equals: AgreementTypeSchema.optional(),
  in: AgreementTypeSchema.array().optional(),
  notIn: AgreementTypeSchema.array().optional(),
  not: z.union([AgreementTypeSchema, z.lazy(() => NestedEnumAgreementTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumAgreementTypeFilterObjectSchema: z.ZodType<Prisma.EnumAgreementTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAgreementTypeFilter>;
export const EnumAgreementTypeFilterObjectZodSchema = makeSchema();
