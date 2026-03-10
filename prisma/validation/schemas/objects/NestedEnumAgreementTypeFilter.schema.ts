import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementTypeSchema } from '../enums/AgreementType.schema'

const nestedenumagreementtypefilterSchema = z.object({
  equals: AgreementTypeSchema.optional(),
  in: AgreementTypeSchema.array().optional(),
  notIn: AgreementTypeSchema.array().optional(),
  not: z.union([AgreementTypeSchema, z.lazy(() => NestedEnumAgreementTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumAgreementTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumAgreementTypeFilter> = nestedenumagreementtypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumAgreementTypeFilter>;
export const NestedEnumAgreementTypeFilterObjectZodSchema = nestedenumagreementtypefilterSchema;
