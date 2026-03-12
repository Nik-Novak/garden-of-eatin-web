import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementWhereUniqueInputObjectSchema as DeviceAgreementWhereUniqueInputObjectSchema } from './DeviceAgreementWhereUniqueInput.schema';
import { DeviceAgreementCreateWithoutAgreementInputObjectSchema as DeviceAgreementCreateWithoutAgreementInputObjectSchema } from './DeviceAgreementCreateWithoutAgreementInput.schema';
import { DeviceAgreementUncheckedCreateWithoutAgreementInputObjectSchema as DeviceAgreementUncheckedCreateWithoutAgreementInputObjectSchema } from './DeviceAgreementUncheckedCreateWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeviceAgreementCreateWithoutAgreementInputObjectSchema), z.lazy(() => DeviceAgreementUncheckedCreateWithoutAgreementInputObjectSchema)])
}).strict();
export const DeviceAgreementCreateOrConnectWithoutAgreementInputObjectSchema: z.ZodType<Prisma.DeviceAgreementCreateOrConnectWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementCreateOrConnectWithoutAgreementInput>;
export const DeviceAgreementCreateOrConnectWithoutAgreementInputObjectZodSchema = makeSchema();
