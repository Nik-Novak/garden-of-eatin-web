import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DeviceNullableScalarRelationFilterObjectSchema as DeviceNullableScalarRelationFilterObjectSchema } from './DeviceNullableScalarRelationFilter.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const contactrequestwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ContactRequestWhereInputObjectSchema), z.lazy(() => ContactRequestWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ContactRequestWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ContactRequestWhereInputObjectSchema), z.lazy(() => ContactRequestWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  device_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  device: z.union([z.lazy(() => DeviceNullableScalarRelationFilterObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema)]).optional()
}).strict();
export const ContactRequestWhereInputObjectSchema: z.ZodType<Prisma.ContactRequestWhereInput> = contactrequestwhereinputSchema as unknown as z.ZodType<Prisma.ContactRequestWhereInput>;
export const ContactRequestWhereInputObjectZodSchema = contactrequestwhereinputSchema;
