import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WebDeviceUpdateManyMutationInputObjectSchema as WebDeviceUpdateManyMutationInputObjectSchema } from './objects/WebDeviceUpdateManyMutationInput.schema';
import { WebDeviceWhereInputObjectSchema as WebDeviceWhereInputObjectSchema } from './objects/WebDeviceWhereInput.schema';

export const WebDeviceUpdateManySchema: z.ZodType<Prisma.WebDeviceUpdateManyArgs> = z.object({ data: WebDeviceUpdateManyMutationInputObjectSchema, where: WebDeviceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WebDeviceUpdateManyArgs>;

export const WebDeviceUpdateManyZodSchema = z.object({ data: WebDeviceUpdateManyMutationInputObjectSchema, where: WebDeviceWhereInputObjectSchema.optional() }).strict();