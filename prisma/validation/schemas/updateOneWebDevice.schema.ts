import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WebDeviceSelectObjectSchema as WebDeviceSelectObjectSchema } from './objects/WebDeviceSelect.schema';
import { WebDeviceIncludeObjectSchema as WebDeviceIncludeObjectSchema } from './objects/WebDeviceInclude.schema';
import { WebDeviceUpdateInputObjectSchema as WebDeviceUpdateInputObjectSchema } from './objects/WebDeviceUpdateInput.schema';
import { WebDeviceUncheckedUpdateInputObjectSchema as WebDeviceUncheckedUpdateInputObjectSchema } from './objects/WebDeviceUncheckedUpdateInput.schema';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './objects/WebDeviceWhereUniqueInput.schema';

export const WebDeviceUpdateOneSchema: z.ZodType<Prisma.WebDeviceUpdateArgs> = z.object({ select: WebDeviceSelectObjectSchema.optional(), include: WebDeviceIncludeObjectSchema.optional(), data: z.union([WebDeviceUpdateInputObjectSchema, WebDeviceUncheckedUpdateInputObjectSchema]), where: WebDeviceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WebDeviceUpdateArgs>;

export const WebDeviceUpdateOneZodSchema = z.object({ select: WebDeviceSelectObjectSchema.optional(), include: WebDeviceIncludeObjectSchema.optional(), data: z.union([WebDeviceUpdateInputObjectSchema, WebDeviceUncheckedUpdateInputObjectSchema]), where: WebDeviceWhereUniqueInputObjectSchema }).strict();