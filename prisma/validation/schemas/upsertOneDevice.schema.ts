import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { DeviceSelectObjectSchema as DeviceSelectObjectSchema } from './objects/DeviceSelect.schema';
import { DeviceIncludeObjectSchema as DeviceIncludeObjectSchema } from './objects/DeviceInclude.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './objects/DeviceWhereUniqueInput.schema';
import { DeviceCreateInputObjectSchema as DeviceCreateInputObjectSchema } from './objects/DeviceCreateInput.schema';
import { DeviceUncheckedCreateInputObjectSchema as DeviceUncheckedCreateInputObjectSchema } from './objects/DeviceUncheckedCreateInput.schema';
import { DeviceUpdateInputObjectSchema as DeviceUpdateInputObjectSchema } from './objects/DeviceUpdateInput.schema';
import { DeviceUncheckedUpdateInputObjectSchema as DeviceUncheckedUpdateInputObjectSchema } from './objects/DeviceUncheckedUpdateInput.schema';

export const DeviceUpsertOneSchema: z.ZodType<Prisma.DeviceUpsertArgs> = z.object({ select: DeviceSelectObjectSchema.optional(), include: DeviceIncludeObjectSchema.optional(), where: DeviceWhereUniqueInputObjectSchema, create: z.union([ DeviceCreateInputObjectSchema, DeviceUncheckedCreateInputObjectSchema ]), update: z.union([ DeviceUpdateInputObjectSchema, DeviceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DeviceUpsertArgs>;

export const DeviceUpsertOneZodSchema = z.object({ select: DeviceSelectObjectSchema.optional(), include: DeviceIncludeObjectSchema.optional(), where: DeviceWhereUniqueInputObjectSchema, create: z.union([ DeviceCreateInputObjectSchema, DeviceUncheckedCreateInputObjectSchema ]), update: z.union([ DeviceUpdateInputObjectSchema, DeviceUncheckedUpdateInputObjectSchema ]) }).strict();