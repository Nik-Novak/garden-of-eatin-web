import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumAgreementTypeWithAggregatesFilterObjectSchema as EnumAgreementTypeWithAggregatesFilterObjectSchema } from './EnumAgreementTypeWithAggregatesFilter.schema';
import { AgreementTypeSchema } from '../enums/AgreementType.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const agreementscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AgreementScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AgreementScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AgreementScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AgreementScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AgreementScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  agreement_type: z.union([z.lazy(() => EnumAgreementTypeWithAggregatesFilterObjectSchema), AgreementTypeSchema]).optional(),
  effective_date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  content_md: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AgreementScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AgreementScalarWhereWithAggregatesInput> = agreementscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AgreementScalarWhereWithAggregatesInput>;
export const AgreementScalarWhereWithAggregatesInputObjectZodSchema = agreementscalarwherewithaggregatesinputSchema;
