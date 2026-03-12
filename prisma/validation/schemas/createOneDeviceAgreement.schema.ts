import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DeviceAgreementSelectObjectSchema as DeviceAgreementSelectObjectSchema } from './objects/DeviceAgreementSelect.schema';
import { DeviceAgreementIncludeObjectSchema as DeviceAgreementIncludeObjectSchema } from './objects/DeviceAgreementInclude.schema';
import { DeviceAgreementCreateInputObjectSchema as DeviceAgreementCreateInputObjectSchema } from './objects/DeviceAgreementCreateInput.schema';
import { DeviceAgreementUncheckedCreateInputObjectSchema as DeviceAgreementUncheckedCreateInputObjectSchema } from './objects/DeviceAgreementUncheckedCreateInput.schema';

export const DeviceAgreementCreateOneSchema: z.ZodType<Prisma.DeviceAgreementCreateArgs> = z.object({ select: DeviceAgreementSelectObjectSchema.optional(), include: DeviceAgreementIncludeObjectSchema.optional(), data: z.union([DeviceAgreementCreateInputObjectSchema, DeviceAgreementUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DeviceAgreementCreateArgs>;

export const DeviceAgreementCreateOneZodSchema = z.object({ select: DeviceAgreementSelectObjectSchema.optional(), include: DeviceAgreementIncludeObjectSchema.optional(), data: z.union([DeviceAgreementCreateInputObjectSchema, DeviceAgreementUncheckedCreateInputObjectSchema]) }).strict();