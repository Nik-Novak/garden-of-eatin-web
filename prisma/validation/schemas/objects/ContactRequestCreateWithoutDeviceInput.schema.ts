import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceCreateNestedOneWithoutContact_requestsInputObjectSchema as WebDeviceCreateNestedOneWithoutContact_requestsInputObjectSchema } from './WebDeviceCreateNestedOneWithoutContact_requestsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  web_device: z.lazy(() => WebDeviceCreateNestedOneWithoutContact_requestsInputObjectSchema).optional()
}).strict();
export const ContactRequestCreateWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ContactRequestCreateWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestCreateWithoutDeviceInput>;
export const ContactRequestCreateWithoutDeviceInputObjectZodSchema = makeSchema();
