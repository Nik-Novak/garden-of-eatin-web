import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DeviceAgreementUpdateManyMutationInputObjectSchema as DeviceAgreementUpdateManyMutationInputObjectSchema } from './objects/DeviceAgreementUpdateManyMutationInput.schema';
import { DeviceAgreementWhereInputObjectSchema as DeviceAgreementWhereInputObjectSchema } from './objects/DeviceAgreementWhereInput.schema';

export const DeviceAgreementUpdateManySchema: z.ZodType<Prisma.DeviceAgreementUpdateManyArgs> = z.object({ data: DeviceAgreementUpdateManyMutationInputObjectSchema, where: DeviceAgreementWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DeviceAgreementUpdateManyArgs>;

export const DeviceAgreementUpdateManyZodSchema = z.object({ data: DeviceAgreementUpdateManyMutationInputObjectSchema, where: DeviceAgreementWhereInputObjectSchema.optional() }).strict();