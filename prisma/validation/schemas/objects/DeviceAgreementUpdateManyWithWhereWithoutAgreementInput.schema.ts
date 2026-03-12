import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementScalarWhereInputObjectSchema as DeviceAgreementScalarWhereInputObjectSchema } from './DeviceAgreementScalarWhereInput.schema';
import { DeviceAgreementUpdateManyMutationInputObjectSchema as DeviceAgreementUpdateManyMutationInputObjectSchema } from './DeviceAgreementUpdateManyMutationInput.schema';
import { DeviceAgreementUncheckedUpdateManyWithoutAgreementInputObjectSchema as DeviceAgreementUncheckedUpdateManyWithoutAgreementInputObjectSchema } from './DeviceAgreementUncheckedUpdateManyWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceAgreementScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DeviceAgreementUpdateManyMutationInputObjectSchema), z.lazy(() => DeviceAgreementUncheckedUpdateManyWithoutAgreementInputObjectSchema)])
}).strict();
export const DeviceAgreementUpdateManyWithWhereWithoutAgreementInputObjectSchema: z.ZodType<Prisma.DeviceAgreementUpdateManyWithWhereWithoutAgreementInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementUpdateManyWithWhereWithoutAgreementInput>;
export const DeviceAgreementUpdateManyWithWhereWithoutAgreementInputObjectZodSchema = makeSchema();
