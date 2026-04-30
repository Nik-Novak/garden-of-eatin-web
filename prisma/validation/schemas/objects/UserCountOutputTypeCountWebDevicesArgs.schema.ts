import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceWhereInputObjectSchema as WebDeviceWhereInputObjectSchema } from './WebDeviceWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WebDeviceWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountWebDevicesArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountWebDevicesArgsObjectZodSchema = makeSchema();
