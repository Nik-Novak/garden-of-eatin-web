import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementCreateWithoutDeviceInputObjectSchema as DeviceAgreementCreateWithoutDeviceInputObjectSchema } from './DeviceAgreementCreateWithoutDeviceInput.schema';
import { DeviceAgreementUncheckedCreateWithoutDeviceInputObjectSchema as DeviceAgreementUncheckedCreateWithoutDeviceInputObjectSchema } from './DeviceAgreementUncheckedCreateWithoutDeviceInput.schema';
import { DeviceAgreementCreateOrConnectWithoutDeviceInputObjectSchema as DeviceAgreementCreateOrConnectWithoutDeviceInputObjectSchema } from './DeviceAgreementCreateOrConnectWithoutDeviceInput.schema';
import { DeviceAgreementUpsertWithWhereUniqueWithoutDeviceInputObjectSchema as DeviceAgreementUpsertWithWhereUniqueWithoutDeviceInputObjectSchema } from './DeviceAgreementUpsertWithWhereUniqueWithoutDeviceInput.schema';
import { DeviceAgreementCreateManyDeviceInputEnvelopeObjectSchema as DeviceAgreementCreateManyDeviceInputEnvelopeObjectSchema } from './DeviceAgreementCreateManyDeviceInputEnvelope.schema';
import { DeviceAgreementWhereUniqueInputObjectSchema as DeviceAgreementWhereUniqueInputObjectSchema } from './DeviceAgreementWhereUniqueInput.schema';
import { DeviceAgreementUpdateWithWhereUniqueWithoutDeviceInputObjectSchema as DeviceAgreementUpdateWithWhereUniqueWithoutDeviceInputObjectSchema } from './DeviceAgreementUpdateWithWhereUniqueWithoutDeviceInput.schema';
import { DeviceAgreementUpdateManyWithWhereWithoutDeviceInputObjectSchema as DeviceAgreementUpdateManyWithWhereWithoutDeviceInputObjectSchema } from './DeviceAgreementUpdateManyWithWhereWithoutDeviceInput.schema';
import { DeviceAgreementScalarWhereInputObjectSchema as DeviceAgreementScalarWhereInputObjectSchema } from './DeviceAgreementScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceAgreementCreateWithoutDeviceInputObjectSchema), z.lazy(() => DeviceAgreementCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => DeviceAgreementUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => DeviceAgreementUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DeviceAgreementCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => DeviceAgreementCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DeviceAgreementUpsertWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => DeviceAgreementUpsertWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DeviceAgreementCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema), z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema), z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema), z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema), z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DeviceAgreementUpdateWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => DeviceAgreementUpdateWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DeviceAgreementUpdateManyWithWhereWithoutDeviceInputObjectSchema), z.lazy(() => DeviceAgreementUpdateManyWithWhereWithoutDeviceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DeviceAgreementScalarWhereInputObjectSchema), z.lazy(() => DeviceAgreementScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DeviceAgreementUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema: z.ZodType<Prisma.DeviceAgreementUncheckedUpdateManyWithoutDeviceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementUncheckedUpdateManyWithoutDeviceNestedInput>;
export const DeviceAgreementUncheckedUpdateManyWithoutDeviceNestedInputObjectZodSchema = makeSchema();
