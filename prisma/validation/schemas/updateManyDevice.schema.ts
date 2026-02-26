import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { DeviceUpdateManyMutationInputObjectSchema as DeviceUpdateManyMutationInputObjectSchema } from './objects/DeviceUpdateManyMutationInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './objects/DeviceWhereInput.schema';

export const DeviceUpdateManySchema: z.ZodType<Prisma.DeviceUpdateManyArgs> = z.object({ data: DeviceUpdateManyMutationInputObjectSchema, where: DeviceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DeviceUpdateManyArgs>;

export const DeviceUpdateManyZodSchema = z.object({ data: DeviceUpdateManyMutationInputObjectSchema, where: DeviceWhereInputObjectSchema.optional() }).strict();