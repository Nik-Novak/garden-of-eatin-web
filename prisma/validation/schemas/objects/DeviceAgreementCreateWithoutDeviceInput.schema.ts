import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateNestedOneWithoutDevice_agreeentsInputObjectSchema as AgreementCreateNestedOneWithoutDevice_agreeentsInputObjectSchema } from './AgreementCreateNestedOneWithoutDevice_agreeentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  opened: z.coerce.date(),
  accepted: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  agreement: z.lazy(() => AgreementCreateNestedOneWithoutDevice_agreeentsInputObjectSchema)
}).strict();
export const DeviceAgreementCreateWithoutDeviceInputObjectSchema: z.ZodType<Prisma.DeviceAgreementCreateWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementCreateWithoutDeviceInput>;
export const DeviceAgreementCreateWithoutDeviceInputObjectZodSchema = makeSchema();
