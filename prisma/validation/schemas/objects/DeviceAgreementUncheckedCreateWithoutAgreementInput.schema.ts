import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  device_id: z.string(),
  opened: z.coerce.date(),
  accepted: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const DeviceAgreementUncheckedCreateWithoutAgreementInputObjectSchema: z.ZodType<Prisma.DeviceAgreementUncheckedCreateWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementUncheckedCreateWithoutAgreementInput>;
export const DeviceAgreementUncheckedCreateWithoutAgreementInputObjectZodSchema = makeSchema();
