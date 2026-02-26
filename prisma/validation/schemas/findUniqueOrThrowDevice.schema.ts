import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { DeviceSelectObjectSchema as DeviceSelectObjectSchema } from './objects/DeviceSelect.schema';
import { DeviceIncludeObjectSchema as DeviceIncludeObjectSchema } from './objects/DeviceInclude.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './objects/DeviceWhereUniqueInput.schema';

export const DeviceFindUniqueOrThrowSchema: z.ZodType<Prisma.DeviceFindUniqueOrThrowArgs> = z.object({ select: DeviceSelectObjectSchema.optional(), include: DeviceIncludeObjectSchema.optional(), where: DeviceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DeviceFindUniqueOrThrowArgs>;

export const DeviceFindUniqueOrThrowZodSchema = z.object({ select: DeviceSelectObjectSchema.optional(), include: DeviceIncludeObjectSchema.optional(), where: DeviceWhereUniqueInputObjectSchema }).strict();