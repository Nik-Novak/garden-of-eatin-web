import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DeviceAgreementCreateManyInputObjectSchema as DeviceAgreementCreateManyInputObjectSchema } from './objects/DeviceAgreementCreateManyInput.schema';

export const DeviceAgreementCreateManySchema: z.ZodType<Prisma.DeviceAgreementCreateManyArgs> = z.object({ data: z.union([ DeviceAgreementCreateManyInputObjectSchema, z.array(DeviceAgreementCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.DeviceAgreementCreateManyArgs>;

export const DeviceAgreementCreateManyZodSchema = z.object({ data: z.union([ DeviceAgreementCreateManyInputObjectSchema, z.array(DeviceAgreementCreateManyInputObjectSchema) ]),  }).strict();