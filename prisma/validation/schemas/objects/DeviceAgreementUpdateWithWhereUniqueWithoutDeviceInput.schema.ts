import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementWhereUniqueInputObjectSchema as DeviceAgreementWhereUniqueInputObjectSchema } from './DeviceAgreementWhereUniqueInput.schema';
import { DeviceAgreementUpdateWithoutDeviceInputObjectSchema as DeviceAgreementUpdateWithoutDeviceInputObjectSchema } from './DeviceAgreementUpdateWithoutDeviceInput.schema';
import { DeviceAgreementUncheckedUpdateWithoutDeviceInputObjectSchema as DeviceAgreementUncheckedUpdateWithoutDeviceInputObjectSchema } from './DeviceAgreementUncheckedUpdateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DeviceAgreementUpdateWithoutDeviceInputObjectSchema), z.lazy(() => DeviceAgreementUncheckedUpdateWithoutDeviceInputObjectSchema)])
}).strict();
export const DeviceAgreementUpdateWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.DeviceAgreementUpdateWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementUpdateWithWhereUniqueWithoutDeviceInput>;
export const DeviceAgreementUpdateWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
