import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  device_id: z.string().max(24).optional().nullable(),
  created_at: z.coerce.date().optional()
}).strict();
export const ContactRequestUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ContactRequestUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestUncheckedCreateInput>;
export const ContactRequestUncheckedCreateInputObjectZodSchema = makeSchema();
