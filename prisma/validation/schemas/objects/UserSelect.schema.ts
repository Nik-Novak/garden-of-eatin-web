import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountFindManySchema as AccountFindManySchema } from '../findManyAccount.schema';
import { DeviceFindManySchema as DeviceFindManySchema } from '../findManyDevice.schema';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { InviteFindManySchema as InviteFindManySchema } from '../findManyInvite.schema';
import { InviteArgsObjectSchema as InviteArgsObjectSchema } from './InviteArgs.schema';
import { OpportunityApplicationFindManySchema as OpportunityApplicationFindManySchema } from '../findManyOpportunityApplication.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  settings: z.boolean().optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  devices: z.union([z.boolean(), z.lazy(() => DeviceFindManySchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  invites_sent: z.union([z.boolean(), z.lazy(() => InviteFindManySchema)]).optional(),
  invite_used: z.union([z.boolean(), z.lazy(() => InviteArgsObjectSchema)]).optional(),
  opportunity_applications: z.union([z.boolean(), z.lazy(() => OpportunityApplicationFindManySchema)]).optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
