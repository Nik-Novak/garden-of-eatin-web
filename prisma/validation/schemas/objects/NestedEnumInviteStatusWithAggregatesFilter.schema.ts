import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InviteStatusSchema } from '../enums/InviteStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumInviteStatusFilterObjectSchema as NestedEnumInviteStatusFilterObjectSchema } from './NestedEnumInviteStatusFilter.schema'

const nestedenuminvitestatuswithaggregatesfilterSchema = z.object({
  equals: InviteStatusSchema.optional(),
  in: InviteStatusSchema.array().optional(),
  notIn: InviteStatusSchema.array().optional(),
  not: z.union([InviteStatusSchema, z.lazy(() => NestedEnumInviteStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumInviteStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumInviteStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumInviteStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumInviteStatusWithAggregatesFilter> = nestedenuminvitestatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumInviteStatusWithAggregatesFilter>;
export const NestedEnumInviteStatusWithAggregatesFilterObjectZodSchema = nestedenuminvitestatuswithaggregatesfilterSchema;
