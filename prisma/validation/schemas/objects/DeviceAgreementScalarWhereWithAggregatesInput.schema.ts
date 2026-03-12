import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const deviceagreementscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DeviceAgreementScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DeviceAgreementScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DeviceAgreementScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DeviceAgreementScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DeviceAgreementScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  device_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  agreement_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  opened: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  accepted: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DeviceAgreementScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DeviceAgreementScalarWhereWithAggregatesInput> = deviceagreementscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DeviceAgreementScalarWhereWithAggregatesInput>;
export const DeviceAgreementScalarWhereWithAggregatesInputObjectZodSchema = deviceagreementscalarwherewithaggregatesinputSchema;
