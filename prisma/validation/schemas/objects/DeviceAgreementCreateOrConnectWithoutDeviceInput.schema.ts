import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementWhereUniqueInputObjectSchema as DeviceAgreementWhereUniqueInputObjectSchema } from './DeviceAgreementWhereUniqueInput.schema';
import { DeviceAgreementCreateWithoutDeviceInputObjectSchema as DeviceAgreementCreateWithoutDeviceInputObjectSchema } from './DeviceAgreementCreateWithoutDeviceInput.schema';
import { DeviceAgreementUncheckedCreateWithoutDeviceInputObjectSchema as DeviceAgreementUncheckedCreateWithoutDeviceInputObjectSchema } from './DeviceAgreementUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeviceAgreementCreateWithoutDeviceInputObjectSchema), z.lazy(() => DeviceAgreementUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const DeviceAgreementCreateOrConnectWithoutDeviceInputObjectSchema: z.ZodType<Prisma.DeviceAgreementCreateOrConnectWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementCreateOrConnectWithoutDeviceInput>;
export const DeviceAgreementCreateOrConnectWithoutDeviceInputObjectZodSchema = makeSchema();
