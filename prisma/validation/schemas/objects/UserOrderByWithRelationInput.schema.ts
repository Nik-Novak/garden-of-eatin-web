import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DeviceSettingsOrderByInputObjectSchema as DeviceSettingsOrderByInputObjectSchema } from './DeviceSettingsOrderByInput.schema';
import { AccountOrderByRelationAggregateInputObjectSchema as AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { DeviceOrderByRelationAggregateInputObjectSchema as DeviceOrderByRelationAggregateInputObjectSchema } from './DeviceOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema as SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { InviteOrderByRelationAggregateInputObjectSchema as InviteOrderByRelationAggregateInputObjectSchema } from './InviteOrderByRelationAggregateInput.schema';
import { InviteOrderByWithRelationInputObjectSchema as InviteOrderByWithRelationInputObjectSchema } from './InviteOrderByWithRelationInput.schema';
import { OpportunityApplicationOrderByRelationAggregateInputObjectSchema as OpportunityApplicationOrderByRelationAggregateInputObjectSchema } from './OpportunityApplicationOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  emailVerified: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  settings: z.lazy(() => DeviceSettingsOrderByInputObjectSchema).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputObjectSchema).optional(),
  devices: z.lazy(() => DeviceOrderByRelationAggregateInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(),
  invites_sent: z.lazy(() => InviteOrderByRelationAggregateInputObjectSchema).optional(),
  invite_used: z.lazy(() => InviteOrderByWithRelationInputObjectSchema).optional(),
  opportunity_applications: z.lazy(() => OpportunityApplicationOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
