import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementWhereUniqueInputObjectSchema as DeviceAgreementWhereUniqueInputObjectSchema } from './DeviceAgreementWhereUniqueInput.schema';
import { DeviceAgreementUpdateWithoutDeviceInputObjectSchema as DeviceAgreementUpdateWithoutDeviceInputObjectSchema } from './DeviceAgreementUpdateWithoutDeviceInput.schema';
import { DeviceAgreementUncheckedUpdateWithoutDeviceInputObjectSchema as DeviceAgreementUncheckedUpdateWithoutDeviceInputObjectSchema } from './DeviceAgreementUncheckedUpdateWithoutDeviceInput.schema';
import { DeviceAgreementCreateWithoutDeviceInputObjectSchema as DeviceAgreementCreateWithoutDeviceInputObjectSchema } from './DeviceAgreementCreateWithoutDeviceInput.schema';
import { DeviceAgreementUncheckedCreateWithoutDeviceInputObjectSchema as DeviceAgreementUncheckedCreateWithoutDeviceInputObjectSchema } from './DeviceAgreementUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DeviceAgreementUpdateWithoutDeviceInputObjectSchema), z.lazy(() => DeviceAgreementUncheckedUpdateWithoutDeviceInputObjectSchema)]),
  create: z.union([z.lazy(() => DeviceAgreementCreateWithoutDeviceInputObjectSchema), z.lazy(() => DeviceAgreementUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const DeviceAgreementUpsertWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.DeviceAgreementUpsertWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementUpsertWithWhereUniqueWithoutDeviceInput>;
export const DeviceAgreementUpsertWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
