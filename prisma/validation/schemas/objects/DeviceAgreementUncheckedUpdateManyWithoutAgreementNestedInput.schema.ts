import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementCreateWithoutAgreementInputObjectSchema as DeviceAgreementCreateWithoutAgreementInputObjectSchema } from './DeviceAgreementCreateWithoutAgreementInput.schema';
import { DeviceAgreementUncheckedCreateWithoutAgreementInputObjectSchema as DeviceAgreementUncheckedCreateWithoutAgreementInputObjectSchema } from './DeviceAgreementUncheckedCreateWithoutAgreementInput.schema';
import { DeviceAgreementCreateOrConnectWithoutAgreementInputObjectSchema as DeviceAgreementCreateOrConnectWithoutAgreementInputObjectSchema } from './DeviceAgreementCreateOrConnectWithoutAgreementInput.schema';
import { DeviceAgreementUpsertWithWhereUniqueWithoutAgreementInputObjectSchema as DeviceAgreementUpsertWithWhereUniqueWithoutAgreementInputObjectSchema } from './DeviceAgreementUpsertWithWhereUniqueWithoutAgreementInput.schema';
import { DeviceAgreementCreateManyAgreementInputEnvelopeObjectSchema as DeviceAgreementCreateManyAgreementInputEnvelopeObjectSchema } from './DeviceAgreementCreateManyAgreementInputEnvelope.schema';
import { DeviceAgreementWhereUniqueInputObjectSchema as DeviceAgreementWhereUniqueInputObjectSchema } from './DeviceAgreementWhereUniqueInput.schema';
import { DeviceAgreementUpdateWithWhereUniqueWithoutAgreementInputObjectSchema as DeviceAgreementUpdateWithWhereUniqueWithoutAgreementInputObjectSchema } from './DeviceAgreementUpdateWithWhereUniqueWithoutAgreementInput.schema';
import { DeviceAgreementUpdateManyWithWhereWithoutAgreementInputObjectSchema as DeviceAgreementUpdateManyWithWhereWithoutAgreementInputObjectSchema } from './DeviceAgreementUpdateManyWithWhereWithoutAgreementInput.schema';
import { DeviceAgreementScalarWhereInputObjectSchema as DeviceAgreementScalarWhereInputObjectSchema } from './DeviceAgreementScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceAgreementCreateWithoutAgreementInputObjectSchema), z.lazy(() => DeviceAgreementCreateWithoutAgreementInputObjectSchema).array(), z.lazy(() => DeviceAgreementUncheckedCreateWithoutAgreementInputObjectSchema), z.lazy(() => DeviceAgreementUncheckedCreateWithoutAgreementInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DeviceAgreementCreateOrConnectWithoutAgreementInputObjectSchema), z.lazy(() => DeviceAgreementCreateOrConnectWithoutAgreementInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DeviceAgreementUpsertWithWhereUniqueWithoutAgreementInputObjectSchema), z.lazy(() => DeviceAgreementUpsertWithWhereUniqueWithoutAgreementInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DeviceAgreementCreateManyAgreementInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema), z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema), z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema), z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema), z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DeviceAgreementUpdateWithWhereUniqueWithoutAgreementInputObjectSchema), z.lazy(() => DeviceAgreementUpdateWithWhereUniqueWithoutAgreementInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DeviceAgreementUpdateManyWithWhereWithoutAgreementInputObjectSchema), z.lazy(() => DeviceAgreementUpdateManyWithWhereWithoutAgreementInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DeviceAgreementScalarWhereInputObjectSchema), z.lazy(() => DeviceAgreementScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DeviceAgreementUncheckedUpdateManyWithoutAgreementNestedInputObjectSchema: z.ZodType<Prisma.DeviceAgreementUncheckedUpdateManyWithoutAgreementNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementUncheckedUpdateManyWithoutAgreementNestedInput>;
export const DeviceAgreementUncheckedUpdateManyWithoutAgreementNestedInputObjectZodSchema = makeSchema();
