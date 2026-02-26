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
export const ContactRequestCreateWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ContactRequestCreateWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestCreateWithoutDeviceInput>;
export const ContactRequestCreateWithoutDeviceInputObjectZodSchema = makeSchema();
