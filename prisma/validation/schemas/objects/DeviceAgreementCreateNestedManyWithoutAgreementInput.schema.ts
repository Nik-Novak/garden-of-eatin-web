import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementCreateWithoutAgreementInputObjectSchema as DeviceAgreementCreateWithoutAgreementInputObjectSchema } from './DeviceAgreementCreateWithoutAgreementInput.schema';
import { DeviceAgreementUncheckedCreateWithoutAgreementInputObjectSchema as DeviceAgreementUncheckedCreateWithoutAgreementInputObjectSchema } from './DeviceAgreementUncheckedCreateWithoutAgreementInput.schema';
import { DeviceAgreementCreateOrConnectWithoutAgreementInputObjectSchema as DeviceAgreementCreateOrConnectWithoutAgreementInputObjectSchema } from './DeviceAgreementCreateOrConnectWithoutAgreementInput.schema';
import { DeviceAgreementCreateManyAgreementInputEnvelopeObjectSchema as DeviceAgreementCreateManyAgreementInputEnvelopeObjectSchema } from './DeviceAgreementCreateManyAgreementInputEnvelope.schema';
import { DeviceAgreementWhereUniqueInputObjectSchema as DeviceAgreementWhereUniqueInputObjectSchema } from './DeviceAgreementWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceAgreementCreateWithoutAgreementInputObjectSchema), z.lazy(() => DeviceAgreementCreateWithoutAgreementInputObjectSchema).array(), z.lazy(() => DeviceAgreementUncheckedCreateWithoutAgreementInputObjectSchema), z.lazy(() => DeviceAgreementUncheckedCreateWithoutAgreementInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DeviceAgreementCreateOrConnectWithoutAgreementInputObjectSchema), z.lazy(() => DeviceAgreementCreateOrConnectWithoutAgreementInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DeviceAgreementCreateManyAgreementInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema), z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DeviceAgreementCreateNestedManyWithoutAgreementInputObjectSchema: z.ZodType<Prisma.DeviceAgreementCreateNestedManyWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementCreateNestedManyWithoutAgreementInput>;
export const DeviceAgreementCreateNestedManyWithoutAgreementInputObjectZodSchema = makeSchema();
