import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { WebDeviceArgsObjectSchema as WebDeviceArgsObjectSchema } from './WebDeviceArgs.schema'

const makeSchema = () => z.object({
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  web_device: z.union([z.boolean(), z.lazy(() => WebDeviceArgsObjectSchema)]).optional()
}).strict();
export const ContactRequestIncludeObjectSchema: z.ZodType<Prisma.ContactRequestInclude> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestInclude>;
export const ContactRequestIncludeObjectZodSchema = makeSchema();
