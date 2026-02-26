import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const ContactRequestUncheckedCreateWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ContactRequestUncheckedCreateWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestUncheckedCreateWithoutDeviceInput>;
export const ContactRequestUncheckedCreateWithoutDeviceInputObjectZodSchema = makeSchema();
