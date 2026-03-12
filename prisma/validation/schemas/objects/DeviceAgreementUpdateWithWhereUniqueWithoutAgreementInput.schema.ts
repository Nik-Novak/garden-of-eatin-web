import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementWhereUniqueInputObjectSchema as DeviceAgreementWhereUniqueInputObjectSchema } from './DeviceAgreementWhereUniqueInput.schema';
import { DeviceAgreementUpdateWithoutAgreementInputObjectSchema as DeviceAgreementUpdateWithoutAgreementInputObjectSchema } from './DeviceAgreementUpdateWithoutAgreementInput.schema';
import { DeviceAgreementUncheckedUpdateWithoutAgreementInputObjectSchema as DeviceAgreementUncheckedUpdateWithoutAgreementInputObjectSchema } from './DeviceAgreementUncheckedUpdateWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceAgreementWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DeviceAgreementUpdateWithoutAgreementInputObjectSchema), z.lazy(() => DeviceAgreementUncheckedUpdateWithoutAgreementInputObjectSchema)])
}).strict();
export const DeviceAgreementUpdateWithWhereUniqueWithoutAgreementInputObjectSchema: z.ZodType<Prisma.DeviceAgreementUpdateWithWhereUniqueWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementUpdateWithWhereUniqueWithoutAgreementInput>;
export const DeviceAgreementUpdateWithWhereUniqueWithoutAgreementInputObjectZodSchema = makeSchema();
