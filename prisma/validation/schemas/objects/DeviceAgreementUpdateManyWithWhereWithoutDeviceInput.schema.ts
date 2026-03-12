import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementScalarWhereInputObjectSchema as DeviceAgreementScalarWhereInputObjectSchema } from './DeviceAgreementScalarWhereInput.schema';
import { DeviceAgreementUpdateManyMutationInputObjectSchema as DeviceAgreementUpdateManyMutationInputObjectSchema } from './DeviceAgreementUpdateManyMutationInput.schema';
import { DeviceAgreementUncheckedUpdateManyWithoutDeviceInputObjectSchema as DeviceAgreementUncheckedUpdateManyWithoutDeviceInputObjectSchema } from './DeviceAgreementUncheckedUpdateManyWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceAgreementScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DeviceAgreementUpdateManyMutationInputObjectSchema), z.lazy(() => DeviceAgreementUncheckedUpdateManyWithoutDeviceInputObjectSchema)])
}).strict();
export const DeviceAgreementUpdateManyWithWhereWithoutDeviceInputObjectSchema: z.ZodType<Prisma.DeviceAgreementUpdateManyWithWhereWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementUpdateManyWithWhereWithoutDeviceInput>;
export const DeviceAgreementUpdateManyWithWhereWithoutDeviceInputObjectZodSchema = makeSchema();
