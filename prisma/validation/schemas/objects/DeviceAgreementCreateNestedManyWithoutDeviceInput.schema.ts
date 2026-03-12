import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementCreateWithoutDeviceInputObjectSchema as DeviceAgreementCreateWithoutDeviceInputObjectSchema } from './DeviceAgreementCreateWithoutDeviceInput.schema';
import { DeviceAgreementUncheckedCreateWithoutDeviceInputObjectSchema as DeviceAgreementUncheckedCreateWithoutDeviceInputObjectSchema } from './DeviceAgreementUncheckedCreateWithoutDeviceInput.schema';
import { DeviceAgreementCreateOrConnectWithoutDeviceInputObjectSchema as DeviceAgreementCreateOrConnectWithoutDeviceInputObjectSchema } from './DeviceAgreementCreateOrConnectWithoutDeviceInput.schema';
import { DeviceAgreementCreateManyDeviceInputEnvelopeObjectSchema as DeviceAgreementCreateManyDeviceInputEnvelopeObjectSchema } from './DeviceAgreementCreateManyDeviceInputEnvelope.schema';
import { DeviceAgreementWhereUniqueInputObjectSchema as DeviceAgreementWhereUniqueInputObjectSchema } from './DeviceAgreementWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceAgreementCreateWithoutDeviceInputObjectSchema), z.lazy(() => DeviceAgreementCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => DeviceAgreementUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => DeviceAgreementUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DeviceAgreementCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => DeviceAgreementCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DeviceAgreementCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema), z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DeviceAgreementCreateNestedManyWithoutDeviceInputObjectSchema: z.ZodType<Prisma.DeviceAgreementCreateNestedManyWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementCreateNestedManyWithoutDeviceInput>;
export const DeviceAgreementCreateNestedManyWithoutDeviceInputObjectZodSchema = makeSchema();
