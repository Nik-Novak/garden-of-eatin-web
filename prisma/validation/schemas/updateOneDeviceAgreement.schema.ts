import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DeviceAgreementSelectObjectSchema as DeviceAgreementSelectObjectSchema } from './objects/DeviceAgreementSelect.schema';
import { DeviceAgreementIncludeObjectSchema as DeviceAgreementIncludeObjectSchema } from './objects/DeviceAgreementInclude.schema';
import { DeviceAgreementUpdateInputObjectSchema as DeviceAgreementUpdateInputObjectSchema } from './objects/DeviceAgreementUpdateInput.schema';
import { DeviceAgreementUncheckedUpdateInputObjectSchema as DeviceAgreementUncheckedUpdateInputObjectSchema } from './objects/DeviceAgreementUncheckedUpdateInput.schema';
import { DeviceAgreementWhereUniqueInputObjectSchema as DeviceAgreementWhereUniqueInputObjectSchema } from './objects/DeviceAgreementWhereUniqueInput.schema';

export const DeviceAgreementUpdateOneSchema: z.ZodType<Prisma.DeviceAgreementUpdateArgs> = z.object({ select: DeviceAgreementSelectObjectSchema.optional(), include: DeviceAgreementIncludeObjectSchema.optional(), data: z.union([DeviceAgreementUpdateInputObjectSchema, DeviceAgreementUncheckedUpdateInputObjectSchema]), where: DeviceAgreementWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DeviceAgreementUpdateArgs>;

export const DeviceAgreementUpdateOneZodSchema = z.object({ select: DeviceAgreementSelectObjectSchema.optional(), include: DeviceAgreementIncludeObjectSchema.optional(), data: z.union([DeviceAgreementUpdateInputObjectSchema, DeviceAgreementUncheckedUpdateInputObjectSchema]), where: DeviceAgreementWhereUniqueInputObjectSchema }).strict();