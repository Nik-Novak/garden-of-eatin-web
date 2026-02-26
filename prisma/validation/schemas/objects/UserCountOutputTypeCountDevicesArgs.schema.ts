import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountDevicesArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountDevicesArgsObjectZodSchema = makeSchema();
