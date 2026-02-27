import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './objects/DeviceWhereInput.schema';

export const DeviceDeleteManySchema: z.ZodType<Prisma.DeviceDeleteManyArgs> = z.object({ where: DeviceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DeviceDeleteManyArgs>;

export const DeviceDeleteManyZodSchema = z.object({ where: DeviceWhereInputObjectSchema.optional() }).strict();