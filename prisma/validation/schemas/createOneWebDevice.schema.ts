import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WebDeviceSelectObjectSchema as WebDeviceSelectObjectSchema } from './objects/WebDeviceSelect.schema';
import { WebDeviceIncludeObjectSchema as WebDeviceIncludeObjectSchema } from './objects/WebDeviceInclude.schema';
import { WebDeviceCreateInputObjectSchema as WebDeviceCreateInputObjectSchema } from './objects/WebDeviceCreateInput.schema';
import { WebDeviceUncheckedCreateInputObjectSchema as WebDeviceUncheckedCreateInputObjectSchema } from './objects/WebDeviceUncheckedCreateInput.schema';

export const WebDeviceCreateOneSchema: z.ZodType<Prisma.WebDeviceCreateArgs> = z.object({ select: WebDeviceSelectObjectSchema.optional(), include: WebDeviceIncludeObjectSchema.optional(), data: z.union([WebDeviceCreateInputObjectSchema, WebDeviceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WebDeviceCreateArgs>;

export const WebDeviceCreateOneZodSchema = z.object({ select: WebDeviceSelectObjectSchema.optional(), include: WebDeviceIncludeObjectSchema.optional(), data: z.union([WebDeviceCreateInputObjectSchema, WebDeviceUncheckedCreateInputObjectSchema]) }).strict();