import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WebDeviceWhereInputObjectSchema as WebDeviceWhereInputObjectSchema } from './objects/WebDeviceWhereInput.schema';

export const WebDeviceDeleteManySchema: z.ZodType<Prisma.WebDeviceDeleteManyArgs> = z.object({ where: WebDeviceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WebDeviceDeleteManyArgs>;

export const WebDeviceDeleteManyZodSchema = z.object({ where: WebDeviceWhereInputObjectSchema.optional() }).strict();