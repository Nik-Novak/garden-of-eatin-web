import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { UserCountOutputTypeCountAccountsArgsObjectSchema as UserCountOutputTypeCountAccountsArgsObjectSchema } from './UserCountOutputTypeCountAccountsArgs.schema';
import { UserCountOutputTypeCountDevicesArgsObjectSchema as UserCountOutputTypeCountDevicesArgsObjectSchema } from './UserCountOutputTypeCountDevicesArgs.schema';
import { UserCountOutputTypeCountSessionsArgsObjectSchema as UserCountOutputTypeCountSessionsArgsObjectSchema } from './UserCountOutputTypeCountSessionsArgs.schema';
import { UserCountOutputTypeCountInvitesSentArgsObjectSchema as UserCountOutputTypeCountInvitesSentArgsObjectSchema } from './UserCountOutputTypeCountInvitesSentArgs.schema';
import { UserCountOutputTypeCountOpportunityApplicationsArgsObjectSchema as UserCountOutputTypeCountOpportunityApplicationsArgsObjectSchema } from './UserCountOutputTypeCountOpportunityApplicationsArgs.schema'

const makeSchema = () => z.object({
  accounts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAccountsArgsObjectSchema)]).optional(),
  devices: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountDevicesArgsObjectSchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSessionsArgsObjectSchema)]).optional(),
  invites_sent: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountInvitesSentArgsObjectSchema)]).optional(),
  opportunity_applications: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountOpportunityApplicationsArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
