import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceCountOutputTypeCountContactRequestsArgsObjectSchema as WebDeviceCountOutputTypeCountContactRequestsArgsObjectSchema } from './WebDeviceCountOutputTypeCountContactRequestsArgs.schema';
import { WebDeviceCountOutputTypeCountQrScansArgsObjectSchema as WebDeviceCountOutputTypeCountQrScansArgsObjectSchema } from './WebDeviceCountOutputTypeCountQrScansArgs.schema'

const makeSchema = () => z.object({
  contact_requests: z.union([z.boolean(), z.lazy(() => WebDeviceCountOutputTypeCountContactRequestsArgsObjectSchema)]).optional(),
  qr_scans: z.union([z.boolean(), z.lazy(() => WebDeviceCountOutputTypeCountQrScansArgsObjectSchema)]).optional()
}).strict();
export const WebDeviceCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.WebDeviceCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceCountOutputTypeSelect>;
export const WebDeviceCountOutputTypeSelectObjectZodSchema = makeSchema();
