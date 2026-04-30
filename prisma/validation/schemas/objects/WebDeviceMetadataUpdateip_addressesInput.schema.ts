import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const WebDeviceMetadataUpdateip_addressesInputObjectSchema: z.ZodType<Prisma.WebDeviceMetadataUpdateip_addressesInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceMetadataUpdateip_addressesInput>;
export const WebDeviceMetadataUpdateip_addressesInputObjectZodSchema = makeSchema();
