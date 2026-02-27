import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const contactrequestscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ContactRequestScalarWhereInputObjectSchema), z.lazy(() => ContactRequestScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ContactRequestScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ContactRequestScalarWhereInputObjectSchema), z.lazy(() => ContactRequestScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  device_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ContactRequestScalarWhereInputObjectSchema: z.ZodType<Prisma.ContactRequestScalarWhereInput> = contactrequestscalarwhereinputSchema as unknown as z.ZodType<Prisma.ContactRequestScalarWhereInput>;
export const ContactRequestScalarWhereInputObjectZodSchema = contactrequestscalarwhereinputSchema;
