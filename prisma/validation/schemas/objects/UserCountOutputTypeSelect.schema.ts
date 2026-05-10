import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCountOutputTypeCountSessionsArgsObjectSchema as UserCountOutputTypeCountSessionsArgsObjectSchema } from './UserCountOutputTypeCountSessionsArgs.schema';
import { UserCountOutputTypeCountAccountsArgsObjectSchema as UserCountOutputTypeCountAccountsArgsObjectSchema } from './UserCountOutputTypeCountAccountsArgs.schema';
import { UserCountOutputTypeCountDevicesArgsObjectSchema as UserCountOutputTypeCountDevicesArgsObjectSchema } from './UserCountOutputTypeCountDevicesArgs.schema';
import { UserCountOutputTypeCountWebDevicesArgsObjectSchema as UserCountOutputTypeCountWebDevicesArgsObjectSchema } from './UserCountOutputTypeCountWebDevicesArgs.schema'

const makeSchema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSessionsArgsObjectSchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAccountsArgsObjectSchema)]).optional(),
  devices: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountDevicesArgsObjectSchema)]).optional(),
  web_devices: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountWebDevicesArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
