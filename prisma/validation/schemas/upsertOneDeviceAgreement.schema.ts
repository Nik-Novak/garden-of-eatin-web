import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DeviceAgreementSelectObjectSchema as DeviceAgreementSelectObjectSchema } from './objects/DeviceAgreementSelect.schema';
import { DeviceAgreementIncludeObjectSchema as DeviceAgreementIncludeObjectSchema } from './objects/DeviceAgreementInclude.schema';
import { DeviceAgreementWhereUniqueInputObjectSchema as DeviceAgreementWhereUniqueInputObjectSchema } from './objects/DeviceAgreementWhereUniqueInput.schema';
import { DeviceAgreementCreateInputObjectSchema as DeviceAgreementCreateInputObjectSchema } from './objects/DeviceAgreementCreateInput.schema';
import { DeviceAgreementUncheckedCreateInputObjectSchema as DeviceAgreementUncheckedCreateInputObjectSchema } from './objects/DeviceAgreementUncheckedCreateInput.schema';
import { DeviceAgreementUpdateInputObjectSchema as DeviceAgreementUpdateInputObjectSchema } from './objects/DeviceAgreementUpdateInput.schema';
import { DeviceAgreementUncheckedUpdateInputObjectSchema as DeviceAgreementUncheckedUpdateInputObjectSchema } from './objects/DeviceAgreementUncheckedUpdateInput.schema';

export const DeviceAgreementUpsertOneSchema: z.ZodType<Prisma.DeviceAgreementUpsertArgs> = z.object({ select: DeviceAgreementSelectObjectSchema.optional(), include: DeviceAgreementIncludeObjectSchema.optional(), where: DeviceAgreementWhereUniqueInputObjectSchema, create: z.union([ DeviceAgreementCreateInputObjectSchema, DeviceAgreementUncheckedCreateInputObjectSchema ]), update: z.union([ DeviceAgreementUpdateInputObjectSchema, DeviceAgreementUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DeviceAgreementUpsertArgs>;

export const DeviceAgreementUpsertOneZodSchema = z.object({ select: DeviceAgreementSelectObjectSchema.optional(), include: DeviceAgreementIncludeObjectSchema.optional(), where: DeviceAgreementWhereUniqueInputObjectSchema, create: z.union([ DeviceAgreementCreateInputObjectSchema, DeviceAgreementUncheckedCreateInputObjectSchema ]), update: z.union([ DeviceAgreementUpdateInputObjectSchema, DeviceAgreementUncheckedUpdateInputObjectSchema ]) }).strict();