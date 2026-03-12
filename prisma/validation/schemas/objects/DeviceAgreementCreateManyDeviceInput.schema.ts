import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  agreement_id: z.string().max(24),
  opened: z.coerce.date(),
  accepted: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const DeviceAgreementCreateManyDeviceInputObjectSchema: z.ZodType<Prisma.DeviceAgreementCreateManyDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementCreateManyDeviceInput>;
export const DeviceAgreementCreateManyDeviceInputObjectZodSchema = makeSchema();
