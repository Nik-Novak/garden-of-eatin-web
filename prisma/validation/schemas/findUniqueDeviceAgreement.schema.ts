import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DeviceAgreementSelectObjectSchema as DeviceAgreementSelectObjectSchema } from './objects/DeviceAgreementSelect.schema';
import { DeviceAgreementIncludeObjectSchema as DeviceAgreementIncludeObjectSchema } from './objects/DeviceAgreementInclude.schema';
import { DeviceAgreementWhereUniqueInputObjectSchema as DeviceAgreementWhereUniqueInputObjectSchema } from './objects/DeviceAgreementWhereUniqueInput.schema';

export const DeviceAgreementFindUniqueSchema: z.ZodType<Prisma.DeviceAgreementFindUniqueArgs> = z.object({ select: DeviceAgreementSelectObjectSchema.optional(), include: DeviceAgreementIncludeObjectSchema.optional(), where: DeviceAgreementWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DeviceAgreementFindUniqueArgs>;

export const DeviceAgreementFindUniqueZodSchema = z.object({ select: DeviceAgreementSelectObjectSchema.optional(), include: DeviceAgreementIncludeObjectSchema.optional(), where: DeviceAgreementWhereUniqueInputObjectSchema }).strict();