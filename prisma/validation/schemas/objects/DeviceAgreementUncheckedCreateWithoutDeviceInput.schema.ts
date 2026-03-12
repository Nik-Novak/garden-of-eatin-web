import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  agreement_id: z.string(),
  opened: z.coerce.date(),
  accepted: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const DeviceAgreementUncheckedCreateWithoutDeviceInputObjectSchema: z.ZodType<Prisma.DeviceAgreementUncheckedCreateWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementUncheckedCreateWithoutDeviceInput>;
export const DeviceAgreementUncheckedCreateWithoutDeviceInputObjectZodSchema = makeSchema();
