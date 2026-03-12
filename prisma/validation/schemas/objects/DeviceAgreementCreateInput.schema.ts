import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateNestedOneWithoutDevice_agreementsInputObjectSchema as DeviceCreateNestedOneWithoutDevice_agreementsInputObjectSchema } from './DeviceCreateNestedOneWithoutDevice_agreementsInput.schema';
import { AgreementCreateNestedOneWithoutDevice_agreeentsInputObjectSchema as AgreementCreateNestedOneWithoutDevice_agreeentsInputObjectSchema } from './AgreementCreateNestedOneWithoutDevice_agreeentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  opened: z.coerce.date(),
  accepted: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  device: z.lazy(() => DeviceCreateNestedOneWithoutDevice_agreementsInputObjectSchema),
  agreement: z.lazy(() => AgreementCreateNestedOneWithoutDevice_agreeentsInputObjectSchema)
}).strict();
export const DeviceAgreementCreateInputObjectSchema: z.ZodType<Prisma.DeviceAgreementCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementCreateInput>;
export const DeviceAgreementCreateInputObjectZodSchema = makeSchema();
