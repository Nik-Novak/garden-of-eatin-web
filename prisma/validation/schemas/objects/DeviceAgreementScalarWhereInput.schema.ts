import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const deviceagreementscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DeviceAgreementScalarWhereInputObjectSchema), z.lazy(() => DeviceAgreementScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DeviceAgreementScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DeviceAgreementScalarWhereInputObjectSchema), z.lazy(() => DeviceAgreementScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  device_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  agreement_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  opened: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  accepted: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DeviceAgreementScalarWhereInputObjectSchema: z.ZodType<Prisma.DeviceAgreementScalarWhereInput> = deviceagreementscalarwhereinputSchema as unknown as z.ZodType<Prisma.DeviceAgreementScalarWhereInput>;
export const DeviceAgreementScalarWhereInputObjectZodSchema = deviceagreementscalarwhereinputSchema;
