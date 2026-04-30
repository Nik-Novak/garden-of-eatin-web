import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  device_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const ContactRequestUncheckedCreateWithoutWeb_deviceInputObjectSchema: z.ZodType<Prisma.ContactRequestUncheckedCreateWithoutWeb_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestUncheckedCreateWithoutWeb_deviceInput>;
export const ContactRequestUncheckedCreateWithoutWeb_deviceInputObjectZodSchema = makeSchema();
