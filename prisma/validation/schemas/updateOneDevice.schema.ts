import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DeviceSelectObjectSchema as DeviceSelectObjectSchema } from './objects/DeviceSelect.schema';
import { DeviceIncludeObjectSchema as DeviceIncludeObjectSchema } from './objects/DeviceInclude.schema';
import { DeviceUpdateInputObjectSchema as DeviceUpdateInputObjectSchema } from './objects/DeviceUpdateInput.schema';
import { DeviceUncheckedUpdateInputObjectSchema as DeviceUncheckedUpdateInputObjectSchema } from './objects/DeviceUncheckedUpdateInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './objects/DeviceWhereUniqueInput.schema';

export const DeviceUpdateOneSchema: z.ZodType<Prisma.DeviceUpdateArgs> = z.object({ select: DeviceSelectObjectSchema.optional(), include: DeviceIncludeObjectSchema.optional(), data: z.union([DeviceUpdateInputObjectSchema, DeviceUncheckedUpdateInputObjectSchema]), where: DeviceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DeviceUpdateArgs>;

export const DeviceUpdateOneZodSchema = z.object({ select: DeviceSelectObjectSchema.optional(), include: DeviceIncludeObjectSchema.optional(), data: z.union([DeviceUpdateInputObjectSchema, DeviceUncheckedUpdateInputObjectSchema]), where: DeviceWhereUniqueInputObjectSchema }).strict();