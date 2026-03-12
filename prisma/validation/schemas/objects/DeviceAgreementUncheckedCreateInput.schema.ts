import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  device_id: z.string().max(24),
  agreement_id: z.string().max(24),
  opened: z.coerce.date(),
  accepted: z.coerce.date(),
  created_at: z.coerce.date().optional()
}).strict();
export const DeviceAgreementUncheckedCreateInputObjectSchema: z.ZodType<Prisma.DeviceAgreementUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementUncheckedCreateInput>;
export const DeviceAgreementUncheckedCreateInputObjectZodSchema = makeSchema();
