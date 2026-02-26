import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DeviceSelectObjectSchema as DeviceSelectObjectSchema } from './objects/DeviceSelect.schema';
import { DeviceIncludeObjectSchema as DeviceIncludeObjectSchema } from './objects/DeviceInclude.schema';
import { DeviceCreateInputObjectSchema as DeviceCreateInputObjectSchema } from './objects/DeviceCreateInput.schema';
import { DeviceUncheckedCreateInputObjectSchema as DeviceUncheckedCreateInputObjectSchema } from './objects/DeviceUncheckedCreateInput.schema';

export const DeviceCreateOneSchema: z.ZodType<Prisma.DeviceCreateArgs> = z.object({ select: DeviceSelectObjectSchema.optional(), include: DeviceIncludeObjectSchema.optional(), data: z.union([DeviceCreateInputObjectSchema, DeviceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DeviceCreateArgs>;

export const DeviceCreateOneZodSchema = z.object({ select: DeviceSelectObjectSchema.optional(), include: DeviceIncludeObjectSchema.optional(), data: z.union([DeviceCreateInputObjectSchema, DeviceUncheckedCreateInputObjectSchema]) }).strict();