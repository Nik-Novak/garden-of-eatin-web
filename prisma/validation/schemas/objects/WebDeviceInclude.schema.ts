import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ContactRequestFindManySchema as ContactRequestFindManySchema } from '../findManyContactRequest.schema';
import { QRScanFindManySchema as QRScanFindManySchema } from '../findManyQRScan.schema';
import { WebDeviceCountOutputTypeArgsObjectSchema as WebDeviceCountOutputTypeArgsObjectSchema } from './WebDeviceCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  contact_requests: z.union([z.boolean(), z.lazy(() => ContactRequestFindManySchema)]).optional(),
  qr_scans: z.union([z.boolean(), z.lazy(() => QRScanFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => WebDeviceCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const WebDeviceIncludeObjectSchema: z.ZodType<Prisma.WebDeviceInclude> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceInclude>;
export const WebDeviceIncludeObjectZodSchema = makeSchema();
