import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementWhereUniqueInputObjectSchema as DeviceAgreementWhereUniqueInputObjectSchema } from './DeviceAgreementWhereUniqueInput.schema';
import { DeviceAgreementUpdateWithoutAgreementInputObjectSchema as DeviceAgreementUpdateWithoutAgreementInputObjectSchema } from './DeviceAgreementUpdateWithoutAgreementInput.schema';
import { DeviceAgreementUncheckedUpdateWithoutAgreementInputObjectSchema as DeviceAgreementUncheckedUpdateWithoutAgreementInputObjectSchema } from './DeviceAgreementUncheckedUpdateWithoutAgreementInput.schema';
import { DeviceAgreementCreateWithoutAgreementInputObjectSchema as DeviceAgreementCreateWithoutAgreementInputObjectSchema } from './DeviceAgreementCreateWithoutAgreementInput.schema';
import { DeviceAgreementUncheckedCreateWithoutAgreementInputObjectSchema as DeviceAgreementUncheckedCreateWithoutAgreementInputObjectSchema } from './DeviceAgreementUncheckedCreateWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DeviceAgreementUpdateWithoutAgreementInputObjectSchema), z.lazy(() => DeviceAgreementUncheckedUpdateWithoutAgreementInputObjectSchema)]),
  create: z.union([z.lazy(() => DeviceAgreementCreateWithoutAgreementInputObjectSchema), z.lazy(() => DeviceAgreementUncheckedCreateWithoutAgreementInputObjectSchema)])
}).strict();
export const DeviceAgreementUpsertWithWhereUniqueWithoutAgreementInputObjectSchema: z.ZodType<Prisma.DeviceAgreementUpsertWithWhereUniqueWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementUpsertWithWhereUniqueWithoutAgreementInput>;
export const DeviceAgreementUpsertWithWhereUniqueWithoutAgreementInputObjectZodSchema = makeSchema();
