import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceCreateNestedOneWithoutContact_requestsInputObjectSchema as DeviceCreateNestedOneWithoutContact_requestsInputObjectSchema } from './DeviceCreateNestedOneWithoutContact_requestsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  created_at: z.coerce.date().optional(),
  device: z.lazy(() => DeviceCreateNestedOneWithoutContact_requestsInputObjectSchema).optional()
}).strict();
export const ContactRequestCreateInputObjectSchema: z.ZodType<Prisma.ContactRequestCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestCreateInput>;
export const ContactRequestCreateInputObjectZodSchema = makeSchema();
