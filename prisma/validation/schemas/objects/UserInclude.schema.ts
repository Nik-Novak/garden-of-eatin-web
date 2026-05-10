import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { AccountFindManySchema as AccountFindManySchema } from '../findManyAccount.schema';
import { DeviceFindManySchema as DeviceFindManySchema } from '../findManyDevice.schema';
import { WebDeviceFindManySchema as WebDeviceFindManySchema } from '../findManyWebDevice.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  devices: z.union([z.boolean(), z.lazy(() => DeviceFindManySchema)]).optional(),
  web_devices: z.union([z.boolean(), z.lazy(() => WebDeviceFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
