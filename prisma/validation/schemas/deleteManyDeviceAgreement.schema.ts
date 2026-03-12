import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DeviceAgreementWhereInputObjectSchema as DeviceAgreementWhereInputObjectSchema } from './objects/DeviceAgreementWhereInput.schema';

export const DeviceAgreementDeleteManySchema: z.ZodType<Prisma.DeviceAgreementDeleteManyArgs> = z.object({ where: DeviceAgreementWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DeviceAgreementDeleteManyArgs>;

export const DeviceAgreementDeleteManyZodSchema = z.object({ where: DeviceAgreementWhereInputObjectSchema.optional() }).strict();