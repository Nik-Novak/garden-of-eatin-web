import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WebDeviceCreateManyInputObjectSchema as WebDeviceCreateManyInputObjectSchema } from './objects/WebDeviceCreateManyInput.schema';

export const WebDeviceCreateManySchema: z.ZodType<Prisma.WebDeviceCreateManyArgs> = z.object({ data: z.union([ WebDeviceCreateManyInputObjectSchema, z.array(WebDeviceCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.WebDeviceCreateManyArgs>;

export const WebDeviceCreateManyZodSchema = z.object({ data: z.union([ WebDeviceCreateManyInputObjectSchema, z.array(WebDeviceCreateManyInputObjectSchema) ]),  }).strict();