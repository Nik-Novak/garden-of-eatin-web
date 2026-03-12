import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateNestedOneWithoutDevice_agreementsInputObjectSchema as DeviceCreateNestedOneWithoutDevice_agreementsInputObjectSchema } from './DeviceCreateNestedOneWithoutDevice_agreementsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  opened: z.coerce.date(),
  accepted: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  device: z.lazy(() => DeviceCreateNestedOneWithoutDevice_agreementsInputObjectSchema)
}).strict();
export const DeviceAgreementCreateWithoutAgreementInputObjectSchema: z.ZodType<Prisma.DeviceAgreementCreateWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementCreateWithoutAgreementInput>;
export const DeviceAgreementCreateWithoutAgreementInputObjectZodSchema = makeSchema();
