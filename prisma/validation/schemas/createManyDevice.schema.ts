import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { DeviceCreateManyInputObjectSchema as DeviceCreateManyInputObjectSchema } from './objects/DeviceCreateManyInput.schema';

export const DeviceCreateManySchema: z.ZodType<Prisma.DeviceCreateManyArgs> = z.object({ data: z.union([ DeviceCreateManyInputObjectSchema, z.array(DeviceCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.DeviceCreateManyArgs>;

export const DeviceCreateManyZodSchema = z.object({ data: z.union([ DeviceCreateManyInputObjectSchema, z.array(DeviceCreateManyInputObjectSchema) ]),  }).strict();