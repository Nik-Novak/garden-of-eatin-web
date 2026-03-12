import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DeviceScalarRelationFilterObjectSchema as DeviceScalarRelationFilterObjectSchema } from './DeviceScalarRelationFilter.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { AgreementScalarRelationFilterObjectSchema as AgreementScalarRelationFilterObjectSchema } from './AgreementScalarRelationFilter.schema';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema'

const deviceagreementwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DeviceAgreementWhereInputObjectSchema), z.lazy(() => DeviceAgreementWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DeviceAgreementWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DeviceAgreementWhereInputObjectSchema), z.lazy(() => DeviceAgreementWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  device_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  agreement_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  opened: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  accepted: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  device: z.union([z.lazy(() => DeviceScalarRelationFilterObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema)]).optional(),
  agreement: z.union([z.lazy(() => AgreementScalarRelationFilterObjectSchema), z.lazy(() => AgreementWhereInputObjectSchema)]).optional()
}).strict();
export const DeviceAgreementWhereInputObjectSchema: z.ZodType<Prisma.DeviceAgreementWhereInput> = deviceagreementwhereinputSchema as unknown as z.ZodType<Prisma.DeviceAgreementWhereInput>;
export const DeviceAgreementWhereInputObjectZodSchema = deviceagreementwhereinputSchema;
