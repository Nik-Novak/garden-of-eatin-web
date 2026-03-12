import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  device_id: z.string().max(24),
  agreement_id: z.string().max(24),
  opened: z.coerce.date(),
  accepted: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const DeviceAgreementCreateManyInputObjectSchema: z.ZodType<Prisma.DeviceAgreementCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementCreateManyInput>;
export const DeviceAgreementCreateManyInputObjectZodSchema = makeSchema();
