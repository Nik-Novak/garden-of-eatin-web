import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WebDeviceSelectObjectSchema as WebDeviceSelectObjectSchema } from './objects/WebDeviceSelect.schema';
import { WebDeviceIncludeObjectSchema as WebDeviceIncludeObjectSchema } from './objects/WebDeviceInclude.schema';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './objects/WebDeviceWhereUniqueInput.schema';

export const WebDeviceDeleteOneSchema: z.ZodType<Prisma.WebDeviceDeleteArgs> = z.object({ select: WebDeviceSelectObjectSchema.optional(), include: WebDeviceIncludeObjectSchema.optional(), where: WebDeviceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WebDeviceDeleteArgs>;

export const WebDeviceDeleteOneZodSchema = z.object({ select: WebDeviceSelectObjectSchema.optional(), include: WebDeviceIncludeObjectSchema.optional(), where: WebDeviceWhereUniqueInputObjectSchema }).strict();