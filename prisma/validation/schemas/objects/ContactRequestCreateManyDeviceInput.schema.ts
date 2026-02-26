import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const ContactRequestCreateManyDeviceInputObjectSchema: z.ZodType<Prisma.ContactRequestCreateManyDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestCreateManyDeviceInput>;
export const ContactRequestCreateManyDeviceInputObjectZodSchema = makeSchema();
