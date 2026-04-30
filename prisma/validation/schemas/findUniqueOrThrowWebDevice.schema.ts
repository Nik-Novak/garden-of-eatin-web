import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WebDeviceSelectObjectSchema as WebDeviceSelectObjectSchema } from './objects/WebDeviceSelect.schema';
import { WebDeviceIncludeObjectSchema as WebDeviceIncludeObjectSchema } from './objects/WebDeviceInclude.schema';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './objects/WebDeviceWhereUniqueInput.schema';

export const WebDeviceFindUniqueOrThrowSchema: z.ZodType<Prisma.WebDeviceFindUniqueOrThrowArgs> = z.object({ select: WebDeviceSelectObjectSchema.optional(), include: WebDeviceIncludeObjectSchema.optional(), where: WebDeviceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WebDeviceFindUniqueOrThrowArgs>;

export const WebDeviceFindUniqueOrThrowZodSchema = z.object({ select: WebDeviceSelectObjectSchema.optional(), include: WebDeviceIncludeObjectSchema.optional(), where: WebDeviceWhereUniqueInputObjectSchema }).strict();