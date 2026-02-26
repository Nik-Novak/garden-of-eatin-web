import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { AccountFindManySchema as AccountFindManySchema } from '../findManyAccount.schema';
import { DeviceFindManySchema as DeviceFindManySchema } from '../findManyDevice.schema';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { InviteFindManySchema as InviteFindManySchema } from '../findManyInvite.schema';
import { InviteArgsObjectSchema as InviteArgsObjectSchema } from './InviteArgs.schema';
import { OpportunityApplicationFindManySchema as OpportunityApplicationFindManySchema } from '../findManyOpportunityApplication.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  devices: z.union([z.boolean(), z.lazy(() => DeviceFindManySchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  invites_sent: z.union([z.boolean(), z.lazy(() => InviteFindManySchema)]).optional(),
  invite_used: z.union([z.boolean(), z.lazy(() => InviteArgsObjectSchema)]).optional(),
  opportunity_applications: z.union([z.boolean(), z.lazy(() => OpportunityApplicationFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
