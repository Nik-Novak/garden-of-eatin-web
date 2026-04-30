import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ContactRequestFindManySchema as ContactRequestFindManySchema } from '../findManyContactRequest.schema';
import { QRScanFindManySchema as QRScanFindManySchema } from '../findManyQRScan.schema';
import { WebDeviceCountOutputTypeArgsObjectSchema as WebDeviceCountOutputTypeArgsObjectSchema } from './WebDeviceCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  device_id: z.boolean().optional(),
  metadata: z.boolean().optional(),
  settings: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  user_id: z.boolean().optional(),
  contact_requests: z.union([z.boolean(), z.lazy(() => ContactRequestFindManySchema)]).optional(),
  qr_scans: z.union([z.boolean(), z.lazy(() => QRScanFindManySchema)]).optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => WebDeviceCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const WebDeviceSelectObjectSchema: z.ZodType<Prisma.WebDeviceSelect> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceSelect>;
export const WebDeviceSelectObjectZodSchema = makeSchema();
