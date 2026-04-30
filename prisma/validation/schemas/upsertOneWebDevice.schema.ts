import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WebDeviceSelectObjectSchema as WebDeviceSelectObjectSchema } from './objects/WebDeviceSelect.schema';
import { WebDeviceIncludeObjectSchema as WebDeviceIncludeObjectSchema } from './objects/WebDeviceInclude.schema';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './objects/WebDeviceWhereUniqueInput.schema';
import { WebDeviceCreateInputObjectSchema as WebDeviceCreateInputObjectSchema } from './objects/WebDeviceCreateInput.schema';
import { WebDeviceUncheckedCreateInputObjectSchema as WebDeviceUncheckedCreateInputObjectSchema } from './objects/WebDeviceUncheckedCreateInput.schema';
import { WebDeviceUpdateInputObjectSchema as WebDeviceUpdateInputObjectSchema } from './objects/WebDeviceUpdateInput.schema';
import { WebDeviceUncheckedUpdateInputObjectSchema as WebDeviceUncheckedUpdateInputObjectSchema } from './objects/WebDeviceUncheckedUpdateInput.schema';

export const WebDeviceUpsertOneSchema: z.ZodType<Prisma.WebDeviceUpsertArgs> = z.object({ select: WebDeviceSelectObjectSchema.optional(), include: WebDeviceIncludeObjectSchema.optional(), where: WebDeviceWhereUniqueInputObjectSchema, create: z.union([ WebDeviceCreateInputObjectSchema, WebDeviceUncheckedCreateInputObjectSchema ]), update: z.union([ WebDeviceUpdateInputObjectSchema, WebDeviceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WebDeviceUpsertArgs>;

export const WebDeviceUpsertOneZodSchema = z.object({ select: WebDeviceSelectObjectSchema.optional(), include: WebDeviceIncludeObjectSchema.optional(), where: WebDeviceWhereUniqueInputObjectSchema, create: z.union([ WebDeviceCreateInputObjectSchema, WebDeviceUncheckedCreateInputObjectSchema ]), update: z.union([ WebDeviceUpdateInputObjectSchema, WebDeviceUncheckedUpdateInputObjectSchema ]) }).strict();