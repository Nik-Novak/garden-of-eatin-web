import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const contactrequestscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ContactRequestScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ContactRequestScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ContactRequestScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ContactRequestScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ContactRequestScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  device_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ContactRequestScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ContactRequestScalarWhereWithAggregatesInput> = contactrequestscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ContactRequestScalarWhereWithAggregatesInput>;
export const ContactRequestScalarWhereWithAggregatesInputObjectZodSchema = contactrequestscalarwherewithaggregatesinputSchema;
