import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumAgreementTypeFilterObjectSchema as EnumAgreementTypeFilterObjectSchema } from './EnumAgreementTypeFilter.schema';
import { AgreementTypeSchema } from '../enums/AgreementType.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const agreementwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AgreementWhereInputObjectSchema), z.lazy(() => AgreementWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AgreementWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AgreementWhereInputObjectSchema), z.lazy(() => AgreementWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  agreement_type: z.union([z.lazy(() => EnumAgreementTypeFilterObjectSchema), AgreementTypeSchema]).optional(),
  effective_date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  content_md: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AgreementWhereInputObjectSchema: z.ZodType<Prisma.AgreementWhereInput> = agreementwhereinputSchema as unknown as z.ZodType<Prisma.AgreementWhereInput>;
export const AgreementWhereInputObjectZodSchema = agreementwhereinputSchema;
