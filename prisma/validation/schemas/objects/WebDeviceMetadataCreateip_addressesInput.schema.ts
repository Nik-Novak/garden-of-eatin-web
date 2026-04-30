import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const WebDeviceMetadataCreateip_addressesInputObjectSchema: z.ZodType<Prisma.WebDeviceMetadataCreateip_addressesInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceMetadataCreateip_addressesInput>;
export const WebDeviceMetadataCreateip_addressesInputObjectZodSchema = makeSchema();
