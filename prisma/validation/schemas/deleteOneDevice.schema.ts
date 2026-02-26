import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DeviceSelectObjectSchema as DeviceSelectObjectSchema } from './objects/DeviceSelect.schema';
import { DeviceIncludeObjectSchema as DeviceIncludeObjectSchema } from './objects/DeviceInclude.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './objects/DeviceWhereUniqueInput.schema';

export const DeviceDeleteOneSchema: z.ZodType<Prisma.DeviceDeleteArgs> = z.object({ select: DeviceSelectObjectSchema.optional(), include: DeviceIncludeObjectSchema.optional(), where: DeviceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DeviceDeleteArgs>;

export const DeviceDeleteOneZodSchema = z.object({ select: DeviceSelectObjectSchema.optional(), include: DeviceIncludeObjectSchema.optional(), where: DeviceWhereUniqueInputObjectSchema }).strict();