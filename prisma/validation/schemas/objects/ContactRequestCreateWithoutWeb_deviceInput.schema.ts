import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateNestedOneWithoutContact_requestsInputObjectSchema as DeviceCreateNestedOneWithoutContact_requestsInputObjectSchema } from './DeviceCreateNestedOneWithoutContact_requestsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  device: z.lazy(() => DeviceCreateNestedOneWithoutContact_requestsInputObjectSchema).optional()
}).strict();
export const ContactRequestCreateWithoutWeb_deviceInputObjectSchema: z.ZodType<Prisma.ContactRequestCreateWithoutWeb_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestCreateWithoutWeb_deviceInput>;
export const ContactRequestCreateWithoutWeb_deviceInputObjectZodSchema = makeSchema();
